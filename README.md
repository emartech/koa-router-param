# koa-router-param

> Params Router middleware for [koa-router](https://github.com/alexmingoia/koa-router)

## Installation

Install using [npm](https://www.npmjs.org/):

```sh
npm install koa-router-param
```

## API Reference

* [koa-router-params](#module_koa-router-params)
    * _static_ [.Integer(paramName)](#exp_module_koa-router-params--Middleware--Integer)

<a name="exp_module_koa-router-params--Middleware"></a>
## Middleware

<a name="exp_module_koa-router-params--Middleware--Integer"></a>
### RouterParam.Integer(paramName) ⇒ <code>generator</code>

Casts the given parameter to `Integer`.

| Param | Type | Description |
| --- | --- | --- |
| paramName | <code>String</code> | The name of the parameter in the routing path |

#### Example

Basic usage:

```javascript
var Router = require('koa-router');
var RouterParam = require('koa-router-param');

router
    .param('userId', RouterParam.Integer('userId'))
    .get('/', function *(next) {...});
    .get('/users/:userId', function *(next) {...});
    .get('/users/:userId/comments', function *(next) {...});
```

## Contributing

Please submit all issues and pull requests to the [emartech/koa-router-param](http://github.com/emartech/koa-router-param) repository!

## Tests

Run tests using `npm test`.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/emartech/koa-router-param/issues).
