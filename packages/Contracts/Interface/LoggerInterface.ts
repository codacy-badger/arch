import {LogLevel} from "..";

export interface LoggerInterface {
  emergency(message: string, context?: object): void;

  alert(message: string, context?: object): void;

  critical(message: string, context?: object): void;

  error(message: string, context?: object): void;

  warning(message: string, context?: object): void;

  notice(message: string, context?: object): void;

  info(message: string, context?: object): void;

  debug(message: string, context?: object): void;

  log(level: LogLevel, message: string, context?: object): void;
}
