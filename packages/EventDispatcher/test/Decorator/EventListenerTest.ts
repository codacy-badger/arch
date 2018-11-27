import { expect } from 'chai';
import {EventListener} from "../../src/Decorator/EventListener";
import {Metadata} from "../../../Metadata";

describe('EventListenerTest', () => {
  describe('@EventListener', () => {
    it('should be a decorator', () => {
      expect(EventListener).to.be.an.instanceOf(Function);
      expect(EventListener('')).to.be.an.instanceOf(Function);
    });

    it('should add proper metadata to decorated listeners', () => {
      @EventListener('foobar', 42)
      class Foo {
      }

      expect(Metadata.get('event', Foo)).to.equal('foobar');
      expect(Metadata.get('priority', Foo)).to.equal(42);
    });
  });
});
