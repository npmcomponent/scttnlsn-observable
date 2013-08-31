var assert = require('assert');
var observable = require('observable');

describe('Observable', function () {
    beforeEach(function () {
        this.obj = observable();
    });

    it('should set attributes', function () {
        this.obj.set({ foo: 'bar', baz: 'qux' });
        assert(this.obj.get('foo') === 'bar');
        assert(this.obj.get('baz') === 'qux');
    });

    it('should set single attribute', function () {
        this.obj.set('foo', 'bar');
        assert(this.obj.get('foo') === 'bar');
    });

    it('should emit change event for each attribute', function (done) {
        this.obj.on('change foo', function (value, previous) {
            assert(value === 'bar');
            assert(previous === undefined);
            done();
        });

        this.obj.set({ foo: 'bar' });
    });

    it('should emit change event for all attributes', function (done) {
        this.obj.on('change', function (changed, previous) {
            assert(changed.foo === 'bar');
            assert(previous.foo === undefined);
            done();
        });

        this.obj.set({ foo: 'bar' });
    });

    it('does not emit events when silent', function () {
        var emitted = false;

        this.obj.on('change', function () {
            emitted = true;
        });

        this.obj.set({ foo: 'bar' }, { silent: true });
        assert(emitted === false);
    });
});