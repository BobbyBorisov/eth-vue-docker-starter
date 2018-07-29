# Solidity vuejs truffle docker starter project


## Prerequisites

* Docker
* Metamask extension

## Setup
* place your dapp logic in app/ folder
* contracts go in contract folder
* migrations in migrations

## Usage


```bash
# start the containers
docker-compose up -d

```


## What it does internally when containers are started

* installs packages by running yarn
* runs migrations to the development network (modify it as you wish in docker-compose.yml)
* starts webpack watcher listening for changes with hot reload.


## Test

```bash
# test smart contract
truffle test
```
