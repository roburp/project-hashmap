class hashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = [];

    // functionally the same as the for-loop
    //this.buckets = Array.from(new Array(this.capacity), () => []);
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push([]);
    }
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
  // If the key already exists in the hash map, then the old value associated with it should be overwritten by the new one.
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    const pair = bucket.find((pair) => pair[0] === key);

    if (pair) {
      pair[1] = value;
    } else {
      bucket.push([key, value]);
    }
    //...........
  }

  // takes a key as an argument and returns the value that is associated with it. If the key is not found, return undefined.
  get(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    const pair = bucket.find((pair) => pair[0] === key);
    return pair ? pair[1] : undefined;
  }

  // takes a key as an argument and returns a boolean based on whether or not the key is in the hash map.
  has(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    return bucket.some((pair) => pair[0] === key);
  }

  // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key then return true.
  // If the key isn’t in the hash map, it should return false.
  remove(key) {}
}
/*

implementing this particular behavior until later.

has(key) takes a key as an argument and returns a boolean based on whether or not the key is in the hash map.

remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key then return true. If the key isn’t in the hash map, it should return false.

length() returns the number of stored keys in the hash map.

clear() removes all entries in the hash map.

keys() returns an array containing all the keys (not values) inside the hash map.

values() returns an array containing all the values (not keys) inside the hash map.

entries() returns an array that contains each key-value pair in their own arrays, for example: [[firstKey, firstValue], [secondKey, secondValue]].


// Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out-of-bounds index:
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bounds");
}
  */
