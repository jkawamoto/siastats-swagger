/*
 * index.mjs
 *
 * Copyright (c) 2019-2021 Junpei Kawamoto
 *
 * This software is released under the MIT License.
 *
 * http://opensource.org/licenses/mit-license.php
 */

import Swagger from "swagger-client";
import chalk from "chalk";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function main() {
  // Initialize a client with this API definition.
  const client = await Swagger(
    "https://raw.githubusercontent.com/jkawamoto/siastats-swagger/master/swagger.yaml"
  );

  // Navigator API
  console.log(
    chalk.bold("Global status and blockchain sync situation of SiaStats nodes")
  );
  const status = await client.apis.navigator.status();
  console.log(status.body);

  console.log(chalk.bold("Returns the information about any hash"));
  const hash = await client.apis.navigator.hash({
    hash: "bde3467039a6d9a563224330ff7578a027205f1f2738e1e0daf134d8ded1878cf5870c41927d",
  });
  console.log(hash.body);

  // Hosts monitor API
  console.log(
    chalk.bold("Information and detailed SiaStats benchmarks about a host")
  );
  const host = await client.apis.host.host({ id: 10 });
  console.log(host.body);

  console.log(
    chalk.bold(
      "Summary information and SiaStats final scores of all the hosts in the Sia network"
    )
  );
  const allHosts = await client.apis.host.allHosts(
    {}, // Note: this API doesn't take any parameters,
    { requestBody: { network: "sia", list: "active" } } // but this request body is required.
  );
  console.log(allHosts.body);

  // Real-Time databases
  console.log(chalk.bold("Summary of the network status"));
  const ns = await client.apis.network_status.network_status();
  console.log(ns.body);
}

main().catch((e) => console.error(e));
