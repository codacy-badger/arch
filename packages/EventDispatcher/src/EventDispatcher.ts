import {EventDispatcherInterface} from "./EventDispatcherInterface";
import {EventListenerInterface} from "./EventListenerInterface";
import {Event} from "./Event";

interface EventListenerStore {
  eventName: string;
  listener: EventListenerInterface;
}

export class EventDispatcher implements EventDispatcherInterface {
  protected listeners: EventListenerStore[] = [];

  public addListener(eventName: string, listener: EventListenerInterface) {
    this.listeners.push({ eventName, listener });
  }

  public dispatch(eventName: string, event: Event) {
    this.listeners
      .filter((storedListener) => storedListener.eventName)
      .forEach((storedListener) => {
        storedListener.listener.handle();
      });
  }

  public getListeners(eventName?: string) {
    if (!eventName) {
      return this.listeners;
    }

    return this.listeners.filter((storedListener) => storedListener.eventName === eventName);
  }
}
