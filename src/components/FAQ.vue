<template>
  <div>
    <b-card no-body class="card">
      <b-card-header class="mb-0">
        <!-- not using b-button due to its inbuilt CSS -->
        <button href="#" v-b-toggle.oracle class="btn btn-link color-main">What is an Oracle?</button>
      </b-card-header>
      <b-collapse block id="oracle" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>Blockchains do not have access to the data from outside the blockchain. Such data is necessary for operation of various decentralized applications. This problem is solved by an entity called an oracle.</b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="card">
      <b-card-header class="mb-0" id role="tab">
        <!-- not using b-button due to its inbuilt CSS -->
        <button class="btn btn-link color-main" v-b-toggle.razor>What is Razor Network?</button>
      </b-card-header>
      <b-collapse id="razor" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Razor Network is truly decentralized oracle platform offering a high degree of decentralization and economic security.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="card">
      <b-card-header class="mb-0" id role="tab">
        <!-- not using b-button due to its inbuilt CSS -->
        <button
          class="btn btn-link color-main"
          v-b-toggle.blockchain
        >Does Razor Network have its own blockchain?</button>
      </b-card-header>
      <b-collapse id="blockchain" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>
            Razor Network is a Proof of Stake consensus algorithm which achieves consensus on oracle values by Truth-by-consensus algorithm.
            Razor Network currently runs directly on Ethereum public networks. In the future, it will run on its own Proof of Stake blockchain with Honey Badger BFT Consensus algorithm.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="card">
      <b-card-header class="mb-0 card-header" id role="tab">
        <button
          class="btn btn-link color-main"
          block
          href="#"
          v-b-toggle.token
        >Does Razor Network have a Native Token?</button>
      </b-card-header>
      <b-collapse id="token" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Schell is the native ERC20 utility token used in Razor Network for staking purposes. It has the abbreviation SCH and symbol ʂ.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="card">
      <b-card-header class="mb-0 card-header" id role="tab">
        <button
          class="btn btn-link color-main"
          block
          href="#"
          v-b-toggle.schells
        >How can I earn Schells?</button>
      </b-card-header>
      <b-collapse id="schells" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Schells can be earned by becoming a staker in the network. Schells are earned in the form of block rewards in the network.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "faq"
};
</script>

<style>
.btn-info {
  background: none;
  color: blue;
}
</style>