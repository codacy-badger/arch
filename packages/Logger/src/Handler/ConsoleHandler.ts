import {Record} from "../Record";
import {AbstractFormattableHandler} from "./AbstractFormattableHandler";
import {LogLevel} from "@arch/contracts";

export class ConsoleHandler extends AbstractFormattableHandler {
  public handle(record: Record) {
    const formatter = this.getFormatter();

    let method = 'log';

    switch (record.level) {
      case LogLevel.DEBUG:
        method = 'debug';
        break;
      case LogLevel.INFO:
        method = 'info';
    }

    console[method](formatter.format(record));
  }
}
