/* global web3:true */
import Vue from 'vue';
import Vuex from 'vuex';
import Web3 from 'web3';
import createLogger from 'vuex/dist/logger';
import * as types from './mutation-types';
import {DummyContract} from '../contracts';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const rootState = {
  account: '',
  balance: '',
  owner: '',
};

const getters = {
  account: state => state.account,
  balance: state => state.balance,
  owner: state => state.owner,
};

const actions = {
  initWeb3({dispatch}) {
    const web3RetryInterval = setInterval(() => {
      if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        clearInterval(web3RetryInterval);
        dispatch('watchWeb3Account');
        dispatch('setContractProvider');
        dispatch('getOwner');
      }
    }, 100);
  },
  watchWeb3Account({dispatch, state, commit}) {
    setInterval(() => {
      const account = web3.eth.accounts[0];
      if (!account) return;

      if (account === state.account){
          dispatch('getBalance');
      }else {
          commit(types.UPDATE_ACCOUNT, account);
          dispatch('getBalance');
      }
    }, 600);
  },
  setContractProvider() {
      DummyContract.setProvider(web3.currentProvider);
  },
  getBalance({commit, state}, blockNumber = 'latest') {
    web3.eth.getBalance(state.account, blockNumber, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      commit(types.UPDATE_BALANCE, web3.fromWei(result).toNumber());
    });
  },
  getOwner({commit, state}) {
    DummyContract.deployed().then(async (instance) => {
      const owner = await instance.owner.call()
      commit(types.SET_OWNER, owner);
    });
  },
}

const mutations = {
  [types.ROUTE_CHANGED](state, {to, from}) {
    // NOTE: not used
    console.log('route changed from', from.name, 'to', to.name); // eslint-disable-line no-console
  },

  [types.UPDATE_ACCOUNT](state, account) {
    state.account = account;
  },

  [types.UPDATE_BALANCE](state, balance) {
    state.balance = balance;
  },

  [types.SET_OWNER](state, owner) {
    state.owner = owner;
  },
};

export default new Vuex.Store({
  state: rootState,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
