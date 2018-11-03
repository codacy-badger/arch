import {EventListenerInterface} from "./EventListenerInterface";
import {Event} from "./Event";

export interface EventDispatcherInterface {
  dispatch(eventName: string, event: Event);

  addListener(eventName: string, listener: EventListenerInterface, priority: number);

  getListeners(eventName?: string);
}
