import 'reflect-metadata';
import { expect } from 'chai';
import {Metadata} from "..";

describe('MetadataTest', () => {
  class Foo {}
  Reflect.defineMetadata('foobar', 42, Foo);

  describe('#get(), #set()', () => {
    it('should set and get metadata', () => {
      Metadata.set('foo', 'bar', Foo);
      expect(Metadata.get('foobar', Foo)).to.equal(42);
      expect(Metadata.get('foo', Foo)).to.equal('bar');
    });

    it('should return undefined if an item is not existing', () => {
      expect(Metadata.get('bar', Foo)).to.be.undefined;
    });
  });

  describe('#has()', () => {
    it('should tell if metadata exists', () => {
      expect(Metadata.has('foobar', Foo)).to.be.true;
      expect(Metadata.has('bar', Foo)).to.be.false;
    });
  });
});
