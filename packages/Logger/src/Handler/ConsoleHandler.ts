import {Record} from "../Record";
import {AbstractFormattableHandler} from "./AbstractFormattableHandler";

export class ConsoleHandler extends AbstractFormattableHandler {
  public constructor(protected console?: Console) {
    super();
  }

  public handle(record: Record) {
    const formatter = this.getFormatter();
    console.log(formatter.format(record));
  }
}
