import { expect } from 'chai';
import {Record} from "../../src/Record";
import {LogLevel} from "@arch/contracts";
import {VoidHandler} from "../../src/Handler/VoidHandler";

describe('VoidHandlerTest', () => {
  describe('#handle', () => {
    const record: Record = {
      channel: 'test',
      context: {},
      datetime: new Date(),
      extra: {},
      level: LogLevel.ERROR,
      message: 'Foobar',
    };

    it('should return true', () => {
      const handler = new VoidHandler();
      expect(handler.handle(record)).to.be.true;
      expect(handler.isHandling(record.level)).to.be.true;
    });
  });
});
