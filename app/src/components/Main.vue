<template>
  <div>
    <section>
      <h1>Contract</h1>

      <h3 v-if='!account'><strong>PLEASE LOGIN TO MetaMask</strong></h3>

      <template v-if='account'>
        <p>My account balance: <strong>{{ balance }} ETH</strong></p>
        <p>My account address: <strong>{{ account }} ETH</strong></p>
      </template>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/mutation-types';

export default {
  name: 'bet-app',
  created() {
    // this.$store.dispatch('watchTime');
  },
  computed: {
    ...mapGetters({
      account: 'account',
      balance: 'balance',
    }),
  },
  methods: {
    //TODO add methods
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
section {
  margin-top: 3em;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #7FC76A;
  font-size: 1em;
  color: white;
  cursor: pointer;
  border: 0;
}

h1, h2 {
  font-weight: normal;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

ol li {
  display: block;
}

a {
  color: #42b983;
}
</style>
