is-debug ![travis](https://magnum.travis-ci.com/airbrite/is-debug.svg?token=scEbB8WHJGy4UpQcXFEQ&branch=master)
========

Are we debugging or what?

## Usage

In package.json:

```json
{
  "dependencies": {
    "is-debug": "git@github.com:airbrite/is-debug.git#v1.0.0",
    ...
  }
}
```

Use:

```js
var isDebug = require('is-debug')();
```

## How it works

Detects whether or not the `NODE_ENV` environment varible is `development` or `undefined`, if so, return `true`.

You can also override this by setting the `DEBUG` environment variable to `"true"` or `"false"`.

```bash
DEBUG=true npm start

DEBUG=false npm start
```
