const server = require('http').createServer()
const url = require('url')
const uuid = require('node-uuid');
const request = require('request');

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ server: server })

const express = require('express')
const app = express()
const port = 3010;

const redis = require("redis");
const genChann = redis.createClient();
const sub = redis.createClient();
const pub = redis.createClient();

const channel = 'foo';
sub.subscribe(channel);
genChann.del('ipList');

function getConnectedNum(){
  return wss.clients.map(function(client){
    return client;
  }).length;
}

function setUserCount () {
  return new Promise((resolve, reject) => 
    genChann.set('userCount', getConnectedNum(), (err, resp) => 
      resolve(resp)
    )
  );
}

function broadCast (fn){
  wss.clients.forEach(client => 
    fn.apply(this, [client])
  );
}

function req(ip){
  return new Promise((resolve, reject) => {
    request(`http://ipinfo.io/${ip}`, (err, resp, body) => {
      return resolve(body);
    })
  });
}

function getConnectDetails(){
  let allUserData = wss.clients.map(client => client.upgradeReq.headers)  
  let justIps = allUserData.map(item =>  req(item.host) );

  return new Promise((resolve, reject) => {
    Promise.all(justIps).then((resp) => {
      allUserData = allUserData.map((item, i) => Object.assign(item, 
        (/Please|provide|IP/.test(resp[i])) ? {ip: 'Invalid IP'} : JSON.parse(resp[i])
      ));
      resolve(allUserData);
    }, error => { throw new Error('error fetching: ') })
  });
}

function sendCountSendIpList (client) {
  getConnectDetails().then(allUserData => {
    setUserCount()
    .then(resp => {
      genChann.get('userCount', (err, resp) => {
        if (client.readyState === client.OPEN) {
          client.send(JSON.stringify({count: resp, ipList: allUserData}, null))
        }
      })
    });    
  });
}

wss.on('connection', function connection(ws, err) {
  ws.upgradeReq.headers.guid = uuid.v4();
  broadCast(clients => sendCountSendIpList(clients));
  genChann.sadd(['ipList', ws.upgradeReq.headers.host]);

  ws.on('close', function close() {
    broadCast(clients => sendCountSendIpList(clients));
    // genChann.srem('ipList', ws.upgradeReq.headers.host );
  });
});
 
server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });