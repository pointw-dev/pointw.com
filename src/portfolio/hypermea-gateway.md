# hypermea-gateway

> hypermea-gateway is a simple API that allows other HypermeaService APIs to register. Once registered, that API's resources and affordances appear in the root of the gateway. In this way, clients can go to the gateway and find all resources provided by all registered APIs.

<portfolio-repos name="hypermea-gateway" github docker />

Splitting a single service into four presents a problem of orchestration.  To address this we can use the [gateway pattern](https://www.geeksforgeeks.org/api-gateway-patterns-in-microservices/).

The Gateway component receives the root document of each API that registers with it.  When the Gateway receives a request for its root resource, it responds with an aggregation of all root documents it has received.

<centered-image src="/img/gateway-pattern.svg" width="600" rounded />

This works well with the hypermedia approach.  The `pointw/hypermea-gateway` component is very lightweight.  It adds almost no additional processing when clients come calling.  A typical client makes a request for the root resource once. Once the Gateway delivers its aggregated root resource, it is typically never invoked again for the rest of that client's session. 

:::tip Note
This simple gateway component was originally created to demonstrate in a single `docker-compose.yml` the gateway pattern - to save a developer from having to use, say, AWS API Gateway.  Since then, it has been found to be very useful so we are beefing it up and will offer it for use in production systems in the future.
:::
