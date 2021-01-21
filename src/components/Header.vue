<template>
  <div>
    <!-- Start Navbar Area -->
    <div class="navbar-area">
      <!-- Menu For Mobile Device -->
      <div class="mobile-nav">
        <a href="index.html" class="logo">
          <img src="olex/assets/images/logos/logo-1.png" alt="Logo" />
        </a>
      </div>

      <!-- Menu For Desktop Device -->
      <div class="main-nav nav-three">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="index.html">
              <img src="olex/assets/images/logos/logo-3.png" alt="Logo" />
            </a>

            <div
              class="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <a href="index-3.html" class="nav-link active"> <router-link to="/home">首页</router-link> </a>
                </li>

                <li class="nav-item">
                  <a href="shop-grid.html" class="nav-link"> <router-link to="/bookdetail">图书详情</router-link> </a>
                </li>

                <li class="nav-item">
                  <a href="index-3.html" class="nav-link "> <router-link to="/booksort">书籍分类</router-link></a>
                </li>

                <li class="nav-item">
                  <a href="index-3.html" class="nav-link "> <router-link to="/user">个人中心 </router-link></a>
                </li>

                <li class="nav-item">
                  <a href="index-3.html" class="nav-link "> <router-link to="/car">借书列表 </router-link></a>
                </li>
              </ul>

              <div class="nav-other">
                <div class="nav-other-item">
                  <div class="cart-btn-area">
                    <a href="#" class="cart-btn"><router-link to="/car"> <i class="bx bx-cart"></i></router-link></a>
                  </div>
                </div>
              </div>

              <div class="nav-btn nav-other-btn">
                <a  @click="gohome()" class="default-btn btn-bg-three"
                  >Log In Now</a
                >
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="side-nav-responsive">
        <div class="container">
          <div class="dot-menu">
            <div class="circle-inner">
              <div class="circle circle-one"></div>
              <div class="circle circle-two"></div>
              <div class="circle circle-three"></div>
            </div>
          </div>

          <div class="container">
            <div class="side-nav-inner">
              <div class="side-nav justify-content-center align-items-center">
                <div class="side-item">
                  <div class="nav-other-item">
                    <div class="language-list">
                      <div class="dropdown language-list-dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton-two"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Language
                          <i class="bx bx-chevron-down"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton-two"
                        >
                          <a class="dropdown-item" href="#">
                            <img
                              src="olex/assets/images/language-flag/eng.png"
                              alt="Images"
                            />
                            English
                          </a>
                          <a href="#">
                            <img
                              src="olex/assets/images/language-flag/arabic.png"
                              alt="Images"
                            />
                            اللغة العربية
                          </a>
                          <a href="#">
                            <img
                              src="olex/assets/images/language-flag/germany.png"
                              alt="Images"
                            />
                            Deutsch
                          </a>
                          <a href="#">
                            <img
                              src="olex/assets/images/language-flag/portugal.png"
                              alt="Images"
                            />
                            Português
                          </a>
                          <a href="#">
                            <img
                              src="olex/assets/images/language-flag/china.png"
                              alt="Images"
                            />
                            普通話
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="nav-other-item">
                    <div class="cart-btn-area">
                      <a href="#" class="cart-btn"
                        ><i class="bx bx-cart"></i
                      ></a>
                      <span>1</span>
                    </div>
                  </div>

                  <div class="nav-other-item">
                    <div class="option-btn">
                      <a href="log-in.html" class="default-btn">Log In Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Navbar Area -->
  </div>
</template>

<script>
export default {
  methods: {
    gohome () {
      this.$router.push("/login");  
    }
  }
}
</script>