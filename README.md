observable
==========

Add observable attributes to an object.

## Install

    component install scttnlsn/observable

## Usage

Use it directly:

```js
var observable = require('observable');
var obj = observable();

obj.on('change foo', function (value, previous) {
    console.log('foo changed');
});

obj.on('change', function (changes, previous) {
    console.log('changed');
});

obj.set({ foo: 'bar' });
```

Or as a mixin:

```js
function Model(attrs) {
    this.set(attrs);
}

observable(Model.prototype);

var m = new Model({ foo: 'bar' });
m.set({ foo: 'baz' });
```