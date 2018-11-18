import {expect} from 'chai';
import {AbstractFormattableHandler} from "../../src/Handler/AbstractFormattableHandler";
import {LineFormatter} from "../../src/Formatter/LineFormatter";
import {LogLevel} from "@arch/contracts";

describe('AbstractFormattableHandlerTest', () => {
  describe('#setFormatter(), #getFormatter()', () => {
    it('should set and return a formatter', () => {
      const handler = new class extends AbstractFormattableHandler { handle() {} };
      handler.setFormatter(new LineFormatter());
      expect(handler.isHandling(LogLevel.WARNING)).to.be.true;
      expect(handler.getFormatter()).to.be.an.instanceOf(LineFormatter);
    });
  });
});
