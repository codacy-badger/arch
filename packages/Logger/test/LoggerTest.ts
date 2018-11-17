import {expect} from 'chai';
import {Logger} from "../src/Logger";
import {ConsoleHandler} from "../src/Handler/ConsoleHandler";
import {LogLevel} from "@arch/contracts";

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

  describe('#getLevelName', () => {
    it('should return the proper level name', () => {
      expect(Logger.getLevelName(LogLevel.EMERGENCY)).to.equal('EMERGENCY');
      expect(Logger.getLevelName(LogLevel.ALERT)).to.equal('ALERT');
      expect(Logger.getLevelName(LogLevel.CRITICAL)).to.equal('CRITICAL');
      expect(Logger.getLevelName(LogLevel.ERROR)).to.equal('ERROR');
      expect(Logger.getLevelName(LogLevel.WARNING)).to.equal('WARNING');
      expect(Logger.getLevelName(LogLevel.NOTICE)).to.equal('NOTICE');
      expect(Logger.getLevelName(LogLevel.INFO)).to.equal('INFO');
      expect(Logger.getLevelName(LogLevel.DEBUG)).to.equal('DEBUG');
      expect(Logger.getLevelName(<any>"foobar")).to.be.undefined;
    });
  });
});
