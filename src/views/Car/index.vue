<template>
  <div>
    <!-- Inner Banner Area -->
    <div class="inner-banner-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="inner-banner-content">
              <h2>Cart</h2>
              <ul>
                <li><a href="index.html">首页</a></li>
                <li><i class="bx bx-chevron-right"></i></li>
                <li><a href="cart.html" class="active">借书列表</a></li>
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

    <!-- Start Cart Area -->
    <section class="cart-wraps-area ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <form>
              <div class="cart-wraps">
                <div class="cart-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">图书</th>
                        <th scope="col">名称</th>
                        <th scope="col">数量</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td class="product-thumbnail">
                          <a href="#">
                            <img
                              src="olex/assets/images/products/product-img4.png"
                              alt="Image"
                            />
                          </a>
                        </td>

                        <td class="product-name">
                          <a href="#">Watch</a>
                        </td>

                        <td class="product-quantity">
                          <div class="input-counter">
                            <span class="minus-btn">
                              <i class="bx bx-minus"></i>
                            </span>
                            <input type="text" value="1" />
                            <span class="plus-btn">
                              <i class="bx bx-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td class="product-subtotal">
                          <a href="#" class="remove">
                            <i class="bx bx-trash"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="cart-buttons">
                  <div class="row align-items-center">
                    <div class="col-lg-7 col-sm-7 col-md-7">
                      <div class="continue-shopping-box">
                        <a href="#" class="default-btn btn-bg-three">
                          继续浏览
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-5 col-sm-5 col-md-5 text-right">
                      <a href="#" class="default-btn btn-bg-three">
                        借阅
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Cart Area -->
  </div>
</template>