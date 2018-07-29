// /* global web3:true */

import contract from 'truffle-contract';

// import artifacts
import dummyContractArtifacts from '../../../build/contracts/DummyContract.json';

// create contracts
const DummyContract = contract(dummyContractArtifacts);

export {
  DummyContract,
};
