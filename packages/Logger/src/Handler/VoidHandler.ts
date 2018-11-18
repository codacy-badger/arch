import {HandlerInterface} from "./HandlerInterface";
import {LogLevel} from "@arch/contracts";
import {Record} from "../Record";

export class VoidHandler implements HandlerInterface {
  handle(record: Record) {
    return true;
  }

  isHandling(level: LogLevel) {
    return true;
  }
}
