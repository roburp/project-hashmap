# Hash Map

A hash map implemented in JavaScript, built as part of The Odin Project's Full Stack JavaScript curriculum.

## About

This project implements a `HashMap` class from scratch using JavaScript arrays as buckets and a custom hash function to store and retrieve key-value pairs efficiently.

Each key is converted into a hash code, which determines the bucket where its key-value pair is stored. Collisions are handled by storing multiple pairs within the same bucket.

```text
HashMap
  ↓
Buckets
  ↓
[ ] [ [ "dog", "animal" ] ] [ ] [ [ "cat", "animal" ], [ "car", "vehicle" ] ] [ ]
```

## Features

HashMap supports:

- `set(key, value)` — adds a new key-value pair or updates the value of an existing key
- `get(key)` — returns the value associated with a given key, or `undefined` if the key does not exist
- `has(key)` — returns `true` if the key exists, otherwise `false`
- `remove(key)` — removes a key-value pair and returns `true`, or returns `false` if the key does not exist
- `length()` — returns the number of stored key-value pairs
- `clear()` — removes all key-value pairs from the hash map
- `keys()` — returns an array containing all keys
- `values()` — returns an array containing all values
- `entries()` — returns an array containing each key-value pair as its own array

## Hashing

The hash map uses a polynomial hashing algorithm with a prime number of `31`.

```js
hash(key) {
  let hashCode = 0;
  const primeNumber = 31;

  for (let i = 0; i < key.length; i++) {
    hashCode =
      (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
  }

  return hashCode;
}
```

The resulting hash code is used as an index into the bucket array.

## Collision Handling

Multiple keys can produce the same bucket index. These collisions are handled through separate chaining, where each bucket can contain multiple key-value pairs.

```text
Bucket
  ↓
[ [ "sara", 100 ], [ "rasa", 200 ], [ "arasa", 300 ] ]
```

When retrieving, updating, or removing a key, the hash map searches the pairs within the corresponding bucket for the matching key.

## Usage

```js
import { HashMap } from "./hashmap.js";

const map = new HashMap();

map.set("name", "Robert");
map.set("age", 30);
map.set("city", "Manila");

console.log(map.get("name"));
// Robert

console.log(map.has("age"));
// true

console.log(map.keys());
// [ "name", "age", "city" ]

console.log(map.values());
// [ "Robert", 30, "Manila" ]

console.log(map.entries());
// [ [ "name", "Robert" ], [ "age", 30 ], [ "city", "Manila" ] ]
```

## Concepts Practiced

- Hash functions
- Hashing and hash codes
- Collision handling
- Separate chaining
- Key-value data structures
- Arrays and nested arrays
- Big O complexity
- JavaScript classes and methods
- Iteration and array methods
- Modular arithmetic
