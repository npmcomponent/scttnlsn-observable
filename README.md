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

## API

### .set(attrs, options)

Set multiple attributes.  Emits `change <attr>` event for each attribute and generic `change` event unless `silent: true` is passed as an option.

### .set(key, value, options)

Set single attribute.  Emits `change <attr>` event for each attribute and generic `change` event unless `silent: true` is passed as an option.

### .get(key)

Returns value of given attribute.

## License

MIT