import { expect } from 'chai';
import {Logger} from "../src/Logger";
import {ConsoleHandler} from "../src/Handler/ConsoleHandler";

describe('LoggerTest', () => {
  describe('#constructor(), #getName()', () => {
    it('should be initialized with a name', () => {
      const logger = new Logger('foobar', [], []);
      expect(logger.getName()).to.equal('foobar');
      expect(logger.getHandlers().length).to.equal(0);
      expect(logger.getProcessors().length).to.equal(0);
    });
  });

  describe('#addHandler()', () => {
    it('should add a handler', () => {
      const logger = new Logger('foobar');
      logger.addHandler(new ConsoleHandler());
      expect(logger.getHandlers().length).to.equal(1);
      expect(logger.getHandlers()[0]).to.be.an.instanceOf(ConsoleHandler);
    });
  });
});
