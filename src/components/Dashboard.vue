<template>
  <div>
    <section class="content_1 bg-light pt-80 pb-80">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-7 col-lg-10 text-center"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h2 class="mt-25">Testnet dashboard</h2>
            <div class="color-heading text-adaptive">
              Razor steel Testnet is currently reporting price of ETH/USD and BTC/USD. The contract is deployed on
              <a
                href="https://rinkeby.etherscan.io/address/0x85805137394718708F1e679862739E51Ef89Dc00"
              >Rinkeby</a>. You can check the status of the testnet below.
            </div>
            <br />

            <!-- <div class="chart-container" style="position: relative; height:200vh; width:60vw"> -->
            <!-- ChartJS genreation -->
            <h1 id="loading">Loading...</h1>
            <canvas id="proposals"></canvas>
            <canvas id="proposals2"></canvas>
            <!-- <canvas id="revelations"></canvas>
                    <canvas id="revelations2"></canvas>
            <canvas id="stakes"></canvas>-->

            <!-- </div> -->
            <div
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0"
              class="aos-init aos-animate"
            >
              <a
                href="https://rinkeby.etherscan.io/address/0x85805137394718708F1e679862739E51Ef89Dc00"
                class="mb-30 btn lg action-1"
              >Explore the Contract on Etherscan</a>
              <!-- <a href="https://github.com/razor-network" target="_blank" class="mb-30 btn lg action-1">Github</a> -->
              <!-- <div class="color-heading text-adaptive">Commercial License</div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- forms alerts -->
    <div class="alert alert-success alert-dismissible alert-form-success" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      Thanks for your message!
    </div>
    <div class="alert alert-warning alert-dismissible alert-form-check-fields" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      Please, fill in required fields.
    </div>
    <div class="alert alert-danger alert-dismissible alert-form-error" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      An error occurred while sending data :(
    </div>
    <!-- popup with video -->
    <div class="overlay"></div>

    <div class="video_popup">
      <a class="close">
        <img srcset="i/close_white@2x.png 2x" src="i/close_white.png" alt />
      </a>
      <div class="d-flex align-items-center justify-content-center w-full h-full iframe_container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style>
</style>