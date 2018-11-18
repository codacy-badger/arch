import { expect } from 'chai';
import {LineFormatter} from "../../src/Formatter/LineFormatter";
import {ExampleRecord} from "../Fixtures/ExampleRecord";

describe('LineFormatterTest', () => {
  describe('#format()', () => {
    it('should properly format a simple line', () => {
      const formatter = new LineFormatter();
      expect(formatter.format(ExampleRecord)).to.equal(`[${new Date().toLocaleDateString()}] test.ERROR: Foobar`);
    });
  });
});
