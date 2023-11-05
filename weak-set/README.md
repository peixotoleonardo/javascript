# WeakSet

> WeakSet is a collection of **garbage-collectable** unique values, including objects and
> non-registered symbols.

## Set vs WeakSet

- WeakSets are collections of **objects and symbols only**. They cannot contain arbitrary
  values of any type, as Sets can.
  
- The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no
  other references to a value stored in the WeakSet exist, those values can be garbage
  collected.

- WeakSet is more suitable (and performant) than a Set for tracking object references,
  especially if very large number of objects is involved.
