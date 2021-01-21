<template>
  <div>
    <!-- Inner Banner Area -->
    <div class="inner-banner-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="inner-banner-content">
              <h2>用户登录</h2>
              <ul>
                <li><a href="index.html">首页</a></li>
                <li><i class="bx bx-chevron-right"></i></li>
                <li><a href="log-in.html" class="active">用户登录</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="inner-banner-img">
              <img
                src="olex/assets/images/inner-banner/inner-banner7.png"
                alt="Inner Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Inner Banner Area End -->

    <!-- User Area -->
    <div class="user-area pt-100 pb-70">
      <div class="container">
        <div class="user-width">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="user-content">
                <h2>Hi Visitors!</h2>
                <p>
                  没有账户,可以注册账号
                </p>
                <a @click="goregister()" href="register.html" class="user-btn">Register Now</a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="user-form">
                <h2>Log In</h2>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <i class="bx bx-user"></i>
                        <input
                          type="text"
                          class="form-control"
                          required
                          data-error="Please enter your Username or Email"
                          placeholder="Username or Email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <i class="bx bx-lock"></i>
                        <input
                          class="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <button type="submit" class="default-btn btn-bg-three">
                        登录
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- User Area End -->
  </div>
</template>

<script>
export default {
  methods: {
    goregister () {
      this.$router.push('/register')
    }
  }
}
</script>