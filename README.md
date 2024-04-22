# Klaytn Dev Sandbox

This repository contains Boilerplate code for frontend(UI) and contracts(backend) that are helpful to building blockchain applications on Klaytn.

It imports [klaytn-contract library](https://github.com/klaytn/klaytn-contracts/tree/master/contracts) to create a KIP7, KIP17 and KIP37 token.

## Prerequisites

The following packages should be installed before using this source code.

- Node v16.14.0 or above
- [pnpm](https://pnpm.io/installation) v8 or above

### Prerequisites for starting a Local Klaytn Node

- git
- `docker and docker compose` (Docker should be running in the background) for ubuntu/mac or Install `docker desktop` if using Windows machine

## Package Installation

Please install node packages first.

```bash
pnpm i
```

## Basic Usage

### Compile contracts

```bash
cd contracts/ # from root directory
pnpm run compile
```

### Deploy contracts

```bash
pnpm run deploy
```

### Build the frontend

```bash
cd frontend/ # from root directory
pnpm run build
```

### Start the frontend

```bash
pnpm run start
```

## Usage Variations

| Variation                         | Quick Script                                     | Detailed Guide ([./docs/](./docs/)*)                                      |
|-----------------------------------|--------------------------------------------------|---------------------------------------------------------------------------|
| Basic Usage (this)                | `pnpm run hh`                                    | -                                                                         |
| using Local Klaytn Node           | `pnpm run local`                                 | [using-local-klaytn-node.md](./docs/using-local-klaytn-node.md)           |
| using Baobab Testnet              | `pnpm run baobab` (read Detailed Guide first)    | [using-baobab-testnet.md](./docs/using-baobab-testnet.md)                 |
| using Klaytn API Service — Baobab | `pnpm run kasBaobab` (read Detailed Guide first) | [using-kasBaobab.md](./docs/using-kasBaobab.md)                           |
| deploying only specific contracts | `pnpm run specific`                              | [deploying-specific-contracts.md](./docs/deploying-specific-contracts.md) |

## Want to Contribute to Klaytn Dev Sandbox? <a id="want-to-contribute"></a>

In line with our commitment to decentralization, all Klaytn codebase and its documentations are completely open source. Klaytn always welcomes your contribution. Anyone can view, edit, fix its contents and make suggestions. You can either create a pull request on GitHub or use GitBook. Make sure to sign our [Contributor License Agreement (CLA)](https://cla-assistant.io/klaytn/klaytn-dev-sandbox) first and there are also a few guidelines our contributors would check out before contributing:

- [Contribution Guide](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conducts](./code-of-conduct.md)

## Need Help? <a href="#need-help" id="need-help"></a>

If you have any questions, please visit our [Gitter channel](https://gitter.im/klaytn/klaytn-dev-sandbox?utm_source=share-link&utm_medium=link&utm_campaign=share-link), [Klaytn Developers Forum](https://forum.klaytn.com/) and [Discord channel](https://discord.gg/mWsHFqN5Zf).
