export class Registry<T> {
  protected elements: Map<string, T> = new Map<string, T>();

  public set(key: string, value: T): this {
    this.elements.set(key, value);
    return this;
  }

  public get(key: string): T  | undefined {
    return this.elements.get(key);
  }

  public has(key: string): boolean {
    return this.elements.has(key);
  }

  public remove(key: string): this {
    this.elements.delete(key);
    return this;
  }

  public reset(): void {
    this.elements.clear();
  }

  public forEach(callback: (value: T, key: string) => void): void {
    this.elements.forEach(callback);
  }

  public values(): IterableIterator<T> {
    return this.elements.values();
  }

  public all(): Map<string, T> {
    return this.elements;
  }
}
