import { expect } from 'chai';
import {Logger} from "../src/Logger";

describe('LoggerTest', () => {
  describe('#constructor()', () => {
    it('should be initialized with a name', () => {
      const logger = new Logger('foobar', []);
      expect(logger.getName()).to.equal('foobar');
    });
  });
});
