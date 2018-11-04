import {LoggerInterface, LogLevel} from "@arch/contracts";
import {HandlerInterface} from "./Handler/HandlerInterface";

export class Logger implements LoggerInterface {
  public constructor(protected name: string, protected handlers: HandlerInterface[]) {
  }

  public getName() {
    return this.name;
  }

  public addHandler(handler: HandlerInterface): void {
    this.handlers.push(handler);
  }

  public getHandlers(): HandlerInterface[] {
    return this.handlers;
  }

  public alert(message: string, context?: object): void {
  }

  public critical(message: string, context?: object): void {
  }

  public debug(message: string, context?: object): void {
  }

  public emergency(message: string, context?: object): void {
  }

  public error(message: string, context?: object): void {
  }

  public info(message: string, context?: object): void {
  }

  public notice(message: string, context?: object): void {
  }

  public warning(message: string, context?: object): void {
  }

  public log(level: LogLevel, message: string, context?: object): void {
  }
}
