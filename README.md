# An OpenAPI specification for [siastats.info](https://siastats.info)  
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Swagger 3.0](http://validator.swagger.io/validator?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjkawamoto%2Fsiastats-swagger%2Fmaster%2Fswagger.yaml)](https://swagger.io/)

## Usage
### JavaScript
[swagger-client](https://www.npmjs.com/package/swagger-client) provides a client.
The usage is simple and just call `Swagger` function with the URL of this API specification.

```js
import Swagger from "swagger-client";

const client = await Swagger(
  "https://raw.githubusercontent.com/jkawamoto/siastats-swagger/master/swagger.yaml"
);
```

The client has four methods under `apis`:
- `client.apis.navigator.status`
- `client.apis.navigator.hash`
- `client.apis.host.host`
- `client.apis.host.allHosts`

See `index.mjs` to find how to use each method.

You can also try the sample code by running these commands:

```shell
$ yarn install 
$ yarn start
```

### Go
Use [go-siastats](https://github.com/jkawamoto/go-siastats) that is a client library generated from this API specification with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator).

## APIs
This specification includes these APIs.

### Navigator (blockchain explorer) API
* https://siastats.info:3500/navigator-api/hash/:hash: Returns the information about any hash (address, Tx, contract...) or block height on the blockchain
* https://siastats.info:3500/navigator-api/status: Global status and blockchain sync situation of SiaStats nodes

### Hosts monitor API
* https://siastats.info:3510/hosts-api/host/:host_id: Information and detailed SiaStats benchmarks about a host. Uses the SiaStats-hostID
* https://siastats.info:3510/hosts-api/allhosts: Summary information and SiaStats final scores of all the hosts in the Sia network

