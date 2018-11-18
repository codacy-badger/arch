import { expect } from 'chai';
import {VoidHandler} from "../../src/Handler/VoidHandler";
import {ExampleRecord} from "../Fixtures/ExampleRecord";

describe('VoidHandlerTest', () => {
  describe('#handle', () => {
    it('should return true', () => {
      const handler = new VoidHandler();
      expect(handler.handle(ExampleRecord)).to.be.true;
      expect(handler.isHandling(ExampleRecord.level)).to.be.true;
    });
  });
});
