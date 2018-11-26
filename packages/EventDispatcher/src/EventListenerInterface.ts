import {Event} from "./Event";

export interface EventListenerInterface {
  handle(event: Event): boolean;
}
