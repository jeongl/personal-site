import {expect} from 'chai';
import DateHelper from './dateHelper';

describe('Date Helper', () => {
  describe('Smoke test', () => {
    it('returns true', () => {
      expect(DateHelper.test()).to.equal(true);
    });
  });
});
