import {Record} from "../Record";

export interface ProcessorInterface {
  processRecord(record: Record);
}
