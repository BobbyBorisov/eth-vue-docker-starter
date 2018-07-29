/* global artifacts:true */
const DummyContract = artifacts.require('./DummyContract.sol');

module.exports = (deployer) => {
  deployer.deploy(DummyContract);
};
