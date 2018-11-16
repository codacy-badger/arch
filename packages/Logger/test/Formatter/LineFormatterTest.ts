import { expect } from 'chai';
import {LineFormatter} from "../../src/Formatter/LineFormatter";
import {Record} from "../../src/Record";
import {LogLevel} from "@arch/contracts";

describe('LineFormatterTest', () => {
  describe('#format()', () => {
    const record: Record = {
      channel: 'test',
      context: {},
      datetime: new Date(),
      extra: {},
      level: LogLevel.ERROR,
      message: 'Foobar',
    };

    it('should properly format a simple line', () => {
      const formatter = new LineFormatter();
      expect(formatter.format(record)).to.equal('Foobar');
    });
  });
});
