import {LogLevel} from "@arch/contracts";

export interface Record {
  message: string;
  context: object;
  level: LogLevel;
  channel: string;
  datetime: Date;
  extra: object;
}
