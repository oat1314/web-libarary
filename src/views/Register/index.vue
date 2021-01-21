<template>
  <div>
    <!-- Inner Banner Area -->
    <div class="inner-banner-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="inner-banner-content">
              <h2>用户注册</h2>
              <ul>
                <li><a href="index.html"><router-link to='/home'>首页</router-link></a></li>
                <li><i class="bx bx-chevron-right"></i></li>
                <li><a href="register.html" class="active">注册</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="inner-banner-img">
              <img
                src="olex/assets/images/inner-banner/inner-banner9.png"
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
                  用户已有账号,可以快速登录
                </p>
                <a @click="gologin()" href="log-in.html" class="user-btn">用户登录</a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="user-form">
                <h2>注册</h2>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <i class="bx bx-user"></i>
                        <input
                          type="text"
                          class="form-control"
                          required
                          data-error="Please enter your Username"
                          placeholder="Enter Your Username"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <i class="bx bx-envelope"></i>
                        <input
                          type="email"
                          class="form-control"
                          required
                          data-error="Please enter your Username or Email"
                          placeholder="Enter Your Email"
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
                        注册
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
    gologin () {
      this.$router.push('/login')
    }
  }
}
</script>