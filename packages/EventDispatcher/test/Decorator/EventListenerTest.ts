import { expect } from 'chai';
import {EventListener} from "../../src/Decorator/EventListener";
import {Metadata} from "../../../Metadata";

describe('EventDispatcherTest', () => {
  it('should add proper metadata to decorated listeners', () => {
    @EventListener('foobar')
    class Foo {
    }

    expect(Metadata.get('event', Foo)).to.equal('foobar');
  });
});
