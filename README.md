# koa-router-param

> Params Router middleware for [koa-router](https://github.com/alexmingoia/koa-router)

## Installation

Install using [npm](https://www.npmjs.org/):

```sh
npm install koa-router-param
```

## API Reference

* [koa-router-param(params)](#module_koa-router-param)
    * .Type
        * _static_ [.Number](#exp_module_koa-router-param--Type--Number)

<a name="exp_module_koa-router-param"></a>
## KoaRouterParam(params) ⇒ <code>Generator</code>

Creates a middleware for _koa-router_ route.

#### Parameters

| params | <code>Object</code> | An object representing the processable URL params |
| ↳ key | <code>String</code> | Name of the param in the URL |
| ↳ value | <code>Generator</code> | A transformer for the param's value |

#### Example

Basic usage:

```javascript
var Router = require('koa-router');
var routerParam = require('koa-router-param');

router
    .get(
        '/users/:userId',
        routerParam({ userId: routerParam.Type.Number }),
        function *(next) {
            console.log(this.params.userId); // => Number(123)
        }
    );
```

<a name="exp_module_koa-router-param--Type--Number"></a>
## RouterParam.Type.Number ⇒ <code>Generator</code>

Casts the given parameter to `Number`.

#### Example

Basic usage:

```javascript
{ paramName: routerParam.Type.Number }
```

## Contributing

Please submit all issues and pull requests to the [emartech/koa-router-param](http://github.com/emartech/koa-router-param) repository!

## Tests

Run tests using `npm test`.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/emartech/koa-router-param/issues).
