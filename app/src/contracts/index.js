// /* global web3:true */

import contract from 'truffle-contract';

// import artifacts
import contractArtifacts from '../../../build/contracts/Contract.json';

// create contracts
const Contract = contract(contractArtifacts);

export {
  Contract,
};
