import {FormattableHandlerInterface} from "./FormattableHandlerInterface";
import {FormatterInterface} from "../Formatter/FormatterInterface";
import {LineFormatter} from "../Formatter/LineFormatter";
import {LogLevel} from "@arch/contracts";
import {Record} from "../Record";

export abstract class AbstractFormattableHandler implements FormattableHandlerInterface {
  protected formatter: FormatterInterface;

  public setFormatter(formatter: FormatterInterface) {
    this.formatter = formatter;
  }

  public getFormatter() {
    return new LineFormatter();
  }

  public abstract handle(record: Record);

  public isHandling(level: LogLevel) {
    return true;
  }
}
