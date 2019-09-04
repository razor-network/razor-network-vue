<template>
  <header class="pt-190 pb-120 bg-dark header_2">
    <!-- <video autoplay muted loop>
               <source src="./data.mp4" type="video/mp4">
    </video>-->
    <!-- Header Menu 2 -->

    <nav class="header_menu_2 transparent pt-30 pb-30 mt-20">
      <div class="container px-xl-0">
        <div class="row justify-content-between align-items-baseline">
          <div class="col-md-4" data-aos-duration="500" data-aos="fade-down" data-aos-delay="750">
            <div class="logo color-white">
              <a href="/">
                <img src="../i/logo3.svg" height="50px" />
              </a>
            </div>
          </div>
          <!-- <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="750" >
					<a  class=" link color-white" style = "padding: .5rem 1rem;" href="dashboard.html">Testnet</a>
					<a   class=" link color-white" style = "padding: .5rem 1rem;" href="https://github.com/razor-network/whitepaper/raw/master/Razor%20Network%20Whitepaper%200.4.pdf">Whitepaper</a>
          </span>-->
          <div
            class="col-md-2 d-flex justify-content-end align-items-center"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="750"
          >
            <!-- <a href="#" class="link color-white f-18 mx-15">Features</a>
					<a href="#" class="link color-white f-18 mx-15">Team</a>
            <a href="#" class="btn sm action-2 mx-15">Contact</a>-->
            <a class="link color-white f-18 mx-15" href="dashboard.html">Testnet</a>
            <a class="link color-white f-18 mx-15" href="developers.html">Developers</a>
            <a class="link color-white f-18 mx-15" href="https://docs.razor.network">Documentation</a>

            <a href="https://github.com/razor-network" class="mx-15 link color-white">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://twitter.com/razor_network" class="mx-15 link color-white">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://t.me/razornetwork" class="mx-15 link color-white">
              <i class="fab fa-telegram fa-2x"></i>
            </a>
            <a href="https://discord.gg/3kvXUye" class="mx-15 link color-white">
              <i class="fab fa-discord fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="mb-3 logo color-white d-block d-xl-none text-center logo_mobile">
        <a href="/">
          <img src="../i/logo3.svg" height="50px" />
        </a>
      </div>
      <h1
        class="color-white text-left"
        data-aos-duration="500"
        data-aos="fade-down"
        data-aos-delay="0"
      >
        Truly decentralized oracle network
        <br />for decentralized
        <div style="display: inline-block" class="finance animated">Finance</div>
        <!-- <div class="insurance">Insurance</div> -->
      </h1>
      <div class="mw-620 mx-auto mt-35 f-22 color-white op-7 text-center text-adaptive">
        <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="250">
          Razor is the world's first decentralized oracle network with onchain governance, offering high economic security
          <!-- Blockchains do not have access to the data from outside the blockchain. Such data is necessary for operation of various decentralized applications.

Traditionally this is done by using a centralized entities called “Oracles”. But they are a single point of failure in otherwise decentralized applications and must be trustworthy.

          Razor is truly decentralized oracle platform offering a high degree of decentralization and economic security, which is crucial for decentralized finance applications.-->
        </span>
      </div>

      <!-- <form class="row align-items-center justify-content-center no-gutters mt-70" data-aos-duration="500" data-aos="fade-down" data-aos-delay="500" method="POST" action="form-handler.php"> -->
      <form
        class="row align-items-center justify-content-center no-gutters mt-70"
        data-aos-duration="500"
        data-aos="fade-down"
        data-aos-delay="500"
        action="https://gmail.us20.list-manage.com/subscribe/post?u=32e904d07df33d9c4d5d756eb&amp;id=f3daba9fa6&c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
      >
        <div class="col-xl-6 flex-wrap justify-content-center justify-content-md-between holder">
          <!-- <div id="mc_embed_signup_scroll" class="input-group input-group-sm mb-3"> -->
          <!-- <label for="mce-EMAIL">Subscribe</label> -->
          <input
            type="email"
            value
            name="EMAIL"
            class="mw-320 input lg border-transparent-white focus-white color-white placeholder-transparent-white f-20"
            id="mce-EMAIL"
            placeholder="Your email"
            required
          />
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_32e904d07df33d9c4d5d756eb_f3daba9fa6" tabindex="-1" value />
          </div>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="btn action-1 lg"
          />
        </div>
      </form>

      <!-- <input type="email" name="email" placeholder="Your email" class="mw-320 input lg border-transparent-white focus-white color-white placeholder-transparent-white f-20" required />
      <button class="btn action-1 lg">Subscribe</button>-->

      <div class="color-white op-3 text-center mt-35">
        <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="750">
          Subscribe to our newsletter for latest updates
          <!-- <a href="#" class="link color-white">Terms of Service</a> -->
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headers"
};
</script>

<style>
</style>