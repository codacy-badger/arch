import { expect } from 'chai';
import {EventDispatcher} from "..";
import {EventListenerInterface} from "../src/EventListenerInterface";
import * as sinon from 'sinon';

describe('EventDispatcherTest', () => {
  class FooEventListener implements EventListenerInterface {
    public handle() {
      return true;
    }
  }

  class BarEventListener implements EventListenerInterface {
    public handle() {
      return true;
    }
  }

  class FoobarEventListener implements EventListenerInterface {
    public handle() {
      return false;
    }
  }

  describe('#getListeners(), #addListener()', () => {
    it('should properly add listeners', () => {
      const dispatcher = new EventDispatcher();
      expect(dispatcher.getListeners('foo').length).to.equal(0);
      dispatcher.addListener('foo', new FooEventListener());
      expect(dispatcher.getListeners('foo').length).to.equal(1);
      const listener = dispatcher.getListeners('foo')[0];
      expect(listener.listener).to.be.an.instanceOf(FooEventListener);
      expect(listener.eventName).to.equal('foo');
      expect(listener.priority).to.equal(0);
    });

    it('should return all listeners when no event name is given', () => {
      const dispatcher = new EventDispatcher();
      expect(dispatcher.getListeners().length).to.equal(0);
      dispatcher.addListener('foo', new FooEventListener());
      expect(dispatcher.getListeners()).to.be.an.instanceOf(Array);
      expect(dispatcher.getListeners().length).to.equal(1);
    });
  });

  describe('#dispatch()', () => {
    it('should dispatch proper events', () => {
      const barEventListener = new BarEventListener();
      const foobarEventListener = new FoobarEventListener();

      const dispatcher = new EventDispatcher();
      dispatcher.addListener('bar', barEventListener);
      dispatcher.addListener('foobar', foobarEventListener);
      const barEventSpy = sinon.spy(barEventListener, 'handle');
      const foobarEventSpy = sinon.spy(foobarEventListener, 'handle');
      dispatcher.dispatch('bar');
      expect(barEventSpy.called).to.be.true;
      expect(foobarEventSpy.called).to.be.false;
    });
  });

  describe('#getListeners()', () => {
    it('should return events in sorted order', () => {
      const dispatcher = new EventDispatcher();
      dispatcher.addListener('foo', new FooEventListener(), 5);
      dispatcher.addListener('foo', new BarEventListener(), 100);
      dispatcher.addListener('foo', new FoobarEventListener(), 50);
      const listeners = dispatcher.getListeners('foo');
      expect(listeners[0].listener).to.be.an.instanceOf(BarEventListener);
      expect(listeners[1].listener).to.be.an.instanceOf(FoobarEventListener);
      expect(listeners[2].listener).to.be.an.instanceOf(FooEventListener);
    });
  });
});
