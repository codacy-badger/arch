import {Type} from "../../../Contracts";
import {Metadata} from "../../../Metadata";

export const EventListener = (event: string) => {
  return (target: Type<any>) => {
    Metadata.set('event', event, target);
  };
};
