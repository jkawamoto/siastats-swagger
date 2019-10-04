# An OpenAPI specification for [siastats.info](https://siastats.info)  
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

This specification includes these APIs.

## Navigator (blockchain explorer) API
* https://siastats.info:3500/navigator-api/hash/:hash: Returns the information about any hash (address, Tx, contract...) or block height on the blockchain
* https://siastats.info:3500/navigator-api/status: Global status and blockchain sync situation of SiaStats nodes

## Hosts monitor API
* https://siastats.info:3510/hosts-api/host/:host_id: Information and detailed SiaStats benchmarks about a host. Uses the SiaStats-hostID
* https://siastats.info:3510/hosts-api/allhosts: Summary information and SiaStats final scores of all the hosts in the Sia network
