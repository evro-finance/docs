# EVRO Docs

Evro is an open-source protocol deployed on Gnosis that enables you to CREATE, MANAGE AND BALANCE COLLATERALIZED VAULTS without issuers, custodians, or intermediaries. Built on Liquity V2 principles, Evro operates through fully decentralized smart contracts with no administrative control and no upgrade authority.\
\
By aligning incentives among vault creators, liquidators, and integrators, the system sustains value stability through transparent, trustless automation.

Decentralized design ensures that once deployed, the protocol operates independently. Evro is governed by code, not counterparties.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
