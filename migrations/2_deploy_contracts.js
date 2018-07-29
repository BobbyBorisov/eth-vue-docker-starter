/* global artifacts:true */
const Contract = artifacts.require('./Contract.sol');

module.exports = (deployer) => {
  deployer.deploy(Contract);
};
