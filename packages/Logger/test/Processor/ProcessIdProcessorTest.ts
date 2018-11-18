import { expect } from 'chai';
import {Record} from "../../src/Record";
import {LogLevel} from "@arch/contracts";
import {ProcessIdProcessor} from "../../src/Processor/ProcessIdProcessor";

describe('ProcessIdProcessorTest', () => {
  describe('#processRecord', () => {
    const record: Record = {
      channel: 'test',
      context: {},
      datetime: new Date(),
      extra: {},
      level: LogLevel.ERROR,
      message: 'Foobar',
    };

    it('should add pid to extra', () => {
      const handler = new ProcessIdProcessor();
      const processedRecord = handler.processRecord(record);
      expect(processedRecord.extra.pid).to.equal(process.pid);
    });
  });
});
