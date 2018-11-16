import {LogLevel} from "@arch/contracts";
import {Record} from "../Record";

export interface HandlerInterface {
  handle(record: Record);

  isHandling(level: LogLevel);
}
