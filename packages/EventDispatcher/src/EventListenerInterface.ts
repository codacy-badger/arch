import {AbstractEvent} from "./AbstractEvent";

export interface EventListenerInterface {
  handle(event: AbstractEvent): boolean;
}
