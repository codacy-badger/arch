import {LoggerInterface, LogLevel} from "@arch/contracts";
import {HandlerInterface} from "./Handler/HandlerInterface";
import {Record} from "./Record";
import {ProcessorInterface} from "./Processor/ProcessorInterface";

export class Logger implements LoggerInterface {
  public static getLevelName(level: LogLevel) {
    return LogLevel[level];
  }

  public constructor(
    protected name: string,
    protected handlers: HandlerInterface[]     = [],
    protected processors: ProcessorInterface[] = []) {
  }

  public getName(): string {
    return this.name;
  }

  public addHandler(handler: HandlerInterface): void {
    this.handlers.push(handler);
  }

  public getHandlers(): HandlerInterface[] {
    return this.handlers;
  }

  public addProcessor(processor: ProcessorInterface): void {
    this.processors.push(processor);
  }

  public getProcessors(): ProcessorInterface[] {
    return this.processors;
  }

  public alert(message: string, context?: object): void {
    this.log(LogLevel.ALERT, message, context);
  }

  public critical(message: string, context?: object): void {
    this.log(LogLevel.CRITICAL, message, context);
  }

  public debug(message: string, context?: object): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  public emergency(message: string, context?: object): void {
    this.log(LogLevel.EMERGENCY, message, context);
  }

  public error(message: string, context?: object): void {
    this.log(LogLevel.ERROR, message, context);
  }

  public info(message: string, context?: object): void {
    this.log(LogLevel.INFO, message, context);
  }

  public notice(message: string, context?: object): void {
    this.log(LogLevel.NOTICE, message, context);
  }

  public warning(message: string, context?: object): void {
    this.log(LogLevel.WARNING, message, context);
  }

  public log(level: LogLevel, message: string, context?: object): void {
    this.addRecord(level, message, context);
  }

  public addRecord(level: LogLevel, message: string, context?: object): boolean {
    const handlers = this.handlers.filter((handler) => handler.isHandling(level));

    if (!handlers.length) {
      return false;
    }

    const record: Record = {
      channel: this.getName(),
      context,
      datetime: (new Date()),
      extra: {},
      level,
      message,
    };

    handlers.forEach((handler) => {
      this.processors.forEach((processor) => processor.processRecord(record));

      handler.handle(record);
    });

    return true;
  }
}
