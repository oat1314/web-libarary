<template>
  <div>
    <!-- Inner Banner Area -->
    <div class="inner-banner-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="inner-banner-content">
              <h2>搜索</h2>
              <ul>
                <li><a href="index.html">首页</a></li>
                <li><i class="bx bx-chevron-right"></i></li>
                <li><a href="cart.html" class="active">搜索</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="inner-banner-img">
              <img
                src="olex/assets/images/inner-banner/inner-banner3.png"
                alt="Inner Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Inner Banner Area End -->

    <div>
      <br />
      <br />
      <br />
    </div>

    <!-- Newsletter Section -->
    <div class="newsletter-section ptb-100">
      <div class="container">
        <div class="newsletter-area-max">
          <div class="row">
            <div class="col-lg-4">
              <div class="newsletter-title">
                <h2>图书搜索</h2>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="newsletter-area">
                <form
                  class="newsletter-form"
                  data-toggle="validator"
                  method="POST"
                >
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autocomplete="off"
                  />
                  <button class="subscribe-btn" type="submit">搜索</button>
                  <div id="validator-newsletter" class="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Newsletter Section End -->
  </div>
</template>