import {HandlerInterface} from "./HandlerInterface";
import {LogLevel} from "@arch/contracts";
import {Record} from "../Record";

export class VoidHandler implements HandlerInterface {
  public handle(record: Record) {
    return true;
  }

  public isHandling(level: LogLevel) {
    return true;
  }
}
