import { expect } from 'chai';
import {ConsoleHandler} from "../../src/Handler/ConsoleHandler";
import * as sinon from 'sinon';
import {ExampleRecord} from "../Fixtures/ExampleRecord";

describe('ConsoleHandlerTest', () => {
  describe('#handle', () => {
    it('should properly log to console', () => {
      const spy = sinon.spy(console, 'log');
      const handler = new ConsoleHandler(console);
      handler.handle(ExampleRecord);
      expect(spy.called).to.be.true;
    });
  });
});
