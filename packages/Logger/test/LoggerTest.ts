import {expect} from 'chai';
import {Logger} from "../src/Logger";
import {ConsoleHandler} from "../src/Handler/ConsoleHandler";
import {LogLevel} from "@arch/contracts";
import {VoidHandler} from "../src/Handler/VoidHandler";
import * as sinon from 'sinon';
import {VoidProcessor} from "../src/Processor/VoidProcessor";

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

  describe('#addProcessor', () => {
    it('should add a processor', () => {
      const logger = new Logger('foobar');
      logger.addProcessor(new VoidProcessor());
      expect(logger.getProcessors().length).to.equal(1);
      expect(logger.getProcessors()[0]).to.be.an.instanceOf(VoidProcessor);
    });
  });

  describe('#getLevelName()', () => {
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

  describe('#log()', () => {
    it('should properly delegate log calls', () => {
      const logger = new Logger('test');
      const spy = sinon.spy(logger, 'log');
      const context = { foo: 'bar' };
      logger.addHandler(new VoidHandler());
      logger.info('info message', context);
      logger.emergency('emergency message', context);
      logger.debug('debug message', context);
      logger.critical('critical message', context);
      logger.notice('notice message', context);
      logger.alert('alert message', context);
      logger.warning('warning message', context);
      expect(spy.calledWith(LogLevel.INFO, 'info message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.EMERGENCY, 'emergency message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.DEBUG, 'debug message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.CRITICAL, 'critical message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.NOTICE, 'notice message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.ALERT, 'alert message', { foo: 'bar' })).to.be.true;
      expect(spy.calledWith(LogLevel.WARNING, 'warning message', { foo: 'bar' })).to.be.true;
    });
  });
});
