import {Record} from "../Record";
import {AbstractFormattableHandler} from "./AbstractFormattableHandler";

export class ConsoleHandler extends AbstractFormattableHandler {
  public constructor(protected console?: Console) {
    super();
  }

  public handle(record: Record) {
    const formatter = this.getFormatter();

    /* tslint:disable-next-line:no-console */
    console.log(formatter.format(record));
  }
}
