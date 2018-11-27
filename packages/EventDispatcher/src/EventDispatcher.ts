import {EventDispatcherInterface} from "./EventDispatcherInterface";
import {EventListenerInterface} from "./EventListenerInterface";
import {AbstractEvent} from "./AbstractEvent";

export class EventDispatcher implements EventDispatcherInterface {
  protected listeners: Array<{ eventName: string, listener: EventListenerInterface, priority?: number }> = [];

  public addListener(eventName: string, listener: EventListenerInterface, priority: number = 0) {
    this.listeners.push({ eventName, listener, priority });
  }

  public dispatch(eventName: string, event?: AbstractEvent) {
    this.listeners
      .filter((listener) => listener.eventName)
      .some((listener) => {
        return listener.listener.handle(event);
      });
  }

  public getListeners(eventName?: string) {
    if (! eventName) {
      return this.listeners;
    }

    return this.listeners
      .filter((listener) => listener.eventName === eventName)
      .sort((a, b) => (a.priority >= b.priority ? -1 : 1));
  }
}
