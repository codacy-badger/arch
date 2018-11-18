import {ProcessorInterface} from "./ProcessorInterface";
import {Record} from "../Record";

export class VoidProcessor implements ProcessorInterface {
  public processRecord(record: Record) {
    return record;
  }
}
