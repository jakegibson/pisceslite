# pisceslite
Cyrpto infrastructure & ecosystem learning project

 # Background
 I have followed and bought/sold crypto for several years, but was unfamiliar with much of the underlying infrastructure and processes that make up a crypto exchange. Below are the resources I reviewed prior to starting this repo. No code has been written or resources deployed at this point. Repo will be used to track learning process as well as deployment resources.

 ### High level overview

[The Best Crypto Exchange - Cointelegraph Magazine](https://cointelegraph.com/magazine/the-best-crypto-exchange/)

[How to Build a Crypto Exchange](https://topflightapps.com/ideas/how-to-build-a-cryptocurrency-exchange/)

[Atomic Swap -Cryptopedia](https://www.gemini.com/cryptopedia/what-is-an-atomic-swap-token-swap)


### Testnets

[https://medium.com/coinmonks/ultimate-guide-to-bitcoin-testnet-fullnode-setup-b83da1bb22e](https://medium.com/coinmonks/ultimate-guide-to-bitcoin-testnet-fullnode-setup-b83da1bb22e)

[Bitcoin and Eth Kubernetes PoC (3years old)](https://github.com/CryptoKube-io/kube-poc)

[Polkadot Docker Official](https://github.com/paritytech/polkadot/blob/master/doc/docker.md)

[Eth Testnet - Ulam](https://www.ulam.io/blog/how-to-setup-custom-ethereum-testnet/)

[EOS Testnet - Ulam](https://www.ulam.io/blog/how-to-setup-eos-testnet/)

### Open source / white label exchanges

[https://github.com/openware/opendax](https://github.com/openware/opendax)

[https://github.com/bitholla/hollaex-kit](https://github.com/bitholla/hollaex-kit)

<br/> 

# Goal
### Deploy as many crypto exchange related components to an AWS hosted kubernetes cluster. If done in a reasonable amount of time, add observability and reliability tooling.
First pass:  
1. Pulumi based deployment of AWS VPC and EKS cluster
2. Deploy HollaEx white label exchange

