import {EventListenerInterface} from "./EventListenerInterface";
import {AbstractEvent} from "./AbstractEvent";

export interface EventDispatcherInterface {
  dispatch(eventName: string, event: AbstractEvent);

  addListener(eventName: string, listener: EventListenerInterface, priority: number);

  getListeners(eventName?: string);
}
