# keys

  Cross-browser Object.keys

## Installation

**keys** is meant to be used as a [component](https://github.com/component/component).

    $ component install matthewp/keys

## API

#### keys(obj)

```javascript
keys({foo: 'bar'});

> [ 'foo' ]
```

Falls back to ES5 Object.keys if the browser supports it.

## Dependencies

None.