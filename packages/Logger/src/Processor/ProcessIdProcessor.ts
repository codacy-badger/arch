import {ProcessorInterface} from "./ProcessorInterface";
import {Record} from "../Record";

export class ProcessIdProcessor implements ProcessorInterface {
  public processRecord(record: Record) {
    Object.assign(record.extra, {
      pid: process.pid,
    });

    return record;
  }
}
