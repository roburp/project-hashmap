class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;

    this.buckets = Array.from(new Array(this.capacity), () => []);
    // functionally the same as the for-loop
    /* 
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push([]);
    }
      */
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.capacity);
    }
    return hashCode;
  }

  // takes two arguments: the first is a key and the second is a value to associate with the key.
  // If the key already exists in the hash set, then the old value associated with it should be overwritten by the new one.
  set(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[index];

    if (bucket.includes(key)) {
      return;
    } else {
      bucket.push(key);
    }

    if (this.length() > this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  // takes a key as an argument and returns a boolean based on whether or not the key is in the hash set.
  has(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    return bucket.includes(key);
  }

  // takes a key as an argument. If the given key is in the hash set, it should remove the entry with that key then return true.
  // If the key isn’t in the hash set, it should return false.
  remove(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    const keyIndex = bucket.findIndex((entry) => entry === key);

    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
      return true;
    } else return false;
  }

  // returns the number of stored keys in the hash set.
  length() {
    return this.buckets.reduce((total, bucket) => total + bucket.length, 0);
  }
  // removes
  //  all entries in the hash set.
  clear() {
    this.buckets = Array.from(new Array(this.capacity), () => []);
  }

  //returns an array that contains each key in their own arrays
  entries() {
    return this.buckets.flat();
  }

  resize() {
    const oldEntries = this.entries();

    this.capacity *= 2;
    this.buckets = Array.from(new Array(this.capacity), () => []);

    oldEntries.forEach((entry) => this.set(entry));
  }
}
