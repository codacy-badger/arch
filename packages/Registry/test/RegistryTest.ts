import { expect } from 'chai';
import {Registry} from "..";

describe('RegistryTest', () => {
  const registry = new Registry();

  beforeEach(() => {
    registry.reset();
  });

  describe('#get(), #set()', () => {
    it('should set and get elements', () => {
      registry.set('foo', 'bar');
      registry.set('bar', 'foo');
      expect(registry.get('foo')).to.equal('bar');
      expect(registry.get('bar')).to.equal('foo');
    });

    it('should return undefined if an item is not existing', () => {
      expect(registry.get('foobar')).to.be.undefined;
    });
  });

  describe('#has()', () => {
    it('should tell if an item is existent', () => {
      registry.set('foo', 'bar');
      expect(registry.has('foo')).to.be.true;
      expect(registry.has('bar')).to.be.false;
    });
  });

  describe('#remove()', () => {
    it('should remove an item', () => {
      registry.set('foo', 'bar');
      expect(registry.get('foo')).to.equal('bar');
      registry.remove('foo');
      expect(registry.get('foo')).to.be.undefined;
    });
  });

  describe('#foreach()', () => {
    it('should iterate through all elements', () => {
      registry.set('foo', 'bar');
      registry.set('key', 'value');

      const arr = [];
      registry.forEach((value: any, key: any) => {
        arr.push({ key: key, value: value });
      });

      expect(arr.length).to.equal(2);
      expect(arr[0].key).to.equal('foo');
      expect(arr[1].value).to.equal('value');
    });
  });

  describe('#values()', () => {
    it('should return values as an iterator', () => {
      expect(typeof registry.values()[Symbol.iterator] === 'function').to.be.true;
    });
  });

  describe('#all()', () => {
    it('should return all values', () => {
      registry.set('foo', 'bar');
      expect(registry.all()).to.be.an.instanceOf(Map);
      expect(registry.all().size).to.equal(1);
    });
  });
});
