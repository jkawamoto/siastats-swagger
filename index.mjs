/*
 * index.mjs
 *
 * Copyright (c) 2019 Junpei Kawamoto
 *
 * This software is released under the MIT License.
 *
 * http://opensource.org/licenses/mit-license.php
 */

import Swagger from "swagger-client";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function main() {
  // Initialize a client with this API definition.
  const client = await Swagger(
    "https://raw.githubusercontent.com/jkawamoto/siastats-swagger/master/swagger.yaml"
  );

  // Navigator API
  const status = await client.apis.navigator.status();
  console.log(status.body);

  const hash = await client.apis.navigator.hash({
    hash:
      "bde3467039a6d9a563224330ff7578a027205f1f2738e1e0daf134d8ded1878cf5870c41927d"
  });
  console.log(hash.body);

  // Hosts monitor API
  const host = await client.apis.host.host({ id: 10 });
  console.log(host.body);

  const allHosts = await client.apis.host.allHosts(
    {}, // doesn't take any parameters,
    { requestBody: { network: "sia", list: "active" } } // but this request body is required.
  );
  console.log(allHosts.body);
}

main().catch(e => console.error(e));
