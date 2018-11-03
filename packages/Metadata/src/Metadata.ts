import 'reflect-metadata';
import {Type} from "@arch/contracts";

export class Metadata {
  public static get(key: string, target: Type<any>) {
    return Reflect.getMetadata(key, target);
  }

  public static set(key: string, value: any, target: Type<any>): void {
    Reflect.defineMetadata(key, value, target);
  }

  public static has(key: string, target: Type<any>): boolean {
    return Reflect.hasMetadata(key, target);
  }
}
