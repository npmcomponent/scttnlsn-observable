var emitter = require('emitter');

module.exports = function (obj) {

    obj || (obj = {});
    emitter(obj);

    obj.set = function (key, value, options) {
        var attrs = {};

        if (typeof key === 'object') {
            attrs = key;
            options = value;
        } else {
            attrs[key] = value;
        }

        this.attrs || (this.attrs = {});
        options || (options = {});

        var changed = {};
        var previous = {};

        for (var key in attrs) {
            if (this.attrs[key] === attrs[key]) continue;

            changed[key] = attrs[key];
            previous[key] = this.attrs[key];
            this.attrs[key] = attrs[key];
        }

        if (!options.silent) {
            var emitted = false;

            for (var key in changed) {
                this.emit('change ' + key, changed[key], previous[key]);
                emitted = true;
            }

            if (emitted) {
                this.emit('change', changed, previous);
            }
        }
    };

    obj.get = function (key) {
        this.attrs || (this.attrs = {});
        return this.attrs[key];
    };

    return obj;

};