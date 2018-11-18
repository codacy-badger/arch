import { expect } from 'chai';
import {ConsoleHandler} from "../../src/Handler/ConsoleHandler";
import * as sinon from 'sinon';
import {Record} from "../../src/Record";
import {LogLevel} from "@arch/contracts";

describe('ConsoleHandlerTest', () => {
  describe('#handle', () => {
    const record: Record = {
      channel: 'test',
      context: {},
      datetime: new Date(),
      extra: {},
      level: LogLevel.ERROR,
      message: 'Foobar',
    };

    it('should properly log to console', () => {
      const spy = sinon.spy(console, 'log');
      const handler = new ConsoleHandler(console);
      handler.handle(record);
      expect(spy.called).to.be.true;
    });
  });
});
