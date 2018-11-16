import {FormatterInterface} from "./FormatterInterface";
import {Record} from "../Record";

export class LineFormatter implements FormatterInterface {
  protected readonly defaultLineFormat = '[%datetime%] %channel%.%level%: %message%';

  constructor(protected readonly lineFormat?: string) {
  }

  public format(record: Record) {
    return (this.lineFormat ? this.lineFormat : this.defaultLineFormat)
      .replace('%datetime%', record.datetime.toLocaleDateString())
      .replace('%channel%', record.channel)
      .replace('%level%', String(record.level))
      .replace('%message%', record.message)
    ;
  }
}
