let HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "ganache",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
        provider: function() {
            return new HDWalletProvider("your mnenonic goes here", "infura link")
        },
        network_id: 3
    }
  }
};
