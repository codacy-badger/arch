import {Record} from "../../src/Record";
import {LogLevel} from "@arch/contracts";

export const ExampleRecord: Record = {
  channel: 'test',
  context: {},
  datetime: new Date(),
  extra: {},
  level: LogLevel.ERROR,
  message: 'Foobar',
};
