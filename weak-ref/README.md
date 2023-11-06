# WeakRef

> WeakRef lets you hold a weak reference to another object, without preventing
> that object from getting garbage-collected.

A primary use for weak references is to implement caches or mappings holding large
objects, where it's desired that a large object is not kept alive solely because it
appears in a cache or mapping.