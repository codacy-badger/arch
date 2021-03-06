import { expect } from 'chai';
import {ProcessIdProcessor} from "../../src/Processor/ProcessIdProcessor";
import {ExampleRecord} from "../Fixtures/ExampleRecord";

describe('ProcessIdProcessorTest', () => {
  describe('#processRecord', () => {
    it('should add pid to extra', () => {
      const processor = new ProcessIdProcessor();
      const processedRecord = processor.processRecord(ExampleRecord);
      expect(processedRecord.extra.pid).to.equal(process.pid);
    });
  });
});
