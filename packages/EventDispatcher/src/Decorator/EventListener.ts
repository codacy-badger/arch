import {Type} from "../../../Contracts";
import {Metadata} from "../../../Metadata";

export const EventListener = (event: string, priority: number = 0) => {
  return (target: Type<any>) => {
    Metadata.set('event', event, target);
    Metadata.set('priority', priority, target);
  };
};
