*This repository is a mirror of the [component](http://component.io) module [scttnlsn/observable](http://github.com/scttnlsn/observable). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/scttnlsn-observable`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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