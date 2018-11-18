import { expect } from 'chai';
import {ExampleRecord} from "../Fixtures/ExampleRecord";
import {VoidProcessor} from "../../src/Processor/VoidProcessor";

describe('ProcessIdProcessorTest', () => {
  describe('#processRecord', () => {
    it('should do nothing to the record', () => {
      const processor = new VoidProcessor();
      const processedRecord = processor.processRecord(ExampleRecord);
      expect(processedRecord).to.equal(ExampleRecord);
    });
  });
});
