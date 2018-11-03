import { expect } from 'chai';
import {EventDispatcher} from "..";
import {EventListenerInterface} from "../src/EventListenerInterface";

describe('EventDispatcherTest', () => {

  class FooEventListener implements EventListenerInterface {
    public handle() {
      return true;
    }
  }

  describe('#getListeners(), #addListener()', () => {
    const dispatcher = new EventDispatcher();
    expect(dispatcher.getListeners('foo').length).to.equal(0);
    dispatcher.addListener('foo', new FooEventListener());
    expect(dispatcher.getListeners('foo').length).to.equal(1);
    expect(dispatcher.getListeners('foo')[0].listener).to.be.an.instanceOf(FooEventListener);
  });
});
