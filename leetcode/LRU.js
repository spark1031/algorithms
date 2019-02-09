// ****JavaScript Concepts:
// - Currying
// - Debounce
// - Throttle




let set = new Set();

let obj = {};


obj[one] = "1"
obj[two] = "2"

{ one: 1, two: 2 }

//can also use HASH and DOUBLE-LINKED-LIST (ideal JavaScript soln)
//use below method (ideal for Ruby soln)

//ordered hash - called a HashMap
let map = new Map();

//where capacity is max # of recently used values that are stored
//look up Map documentation for JS to see methods defined on this object
// .size
// .length
// .delete(key)
// .set(key, value)
// .get(key)
const LRUCache = function (capacity) {
  this.store = new Map();
  this.capacity = capacity;
}

//define get method for LRUCache object:
LRUCache.prototype.get = function (key) {
  //check if i have key
  let result = this.store.get(key);

  //if it exists in store, and if so delete and add it to the end of your map
  if (result) {
    this.store.delete(key);
    this.store.set(key, result);
    return result;
  }
  return null;
}

LRUCache.prototype.put = function (key, val) {
  //check if I have key first, then if I do delete out and put it at the end
  //if it doesn't have it, you have to delete the first one and then add the new pair at the end
}


