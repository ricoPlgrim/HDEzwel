<template>
    <GuideNav title="Mobile Guide" version="2024.12" :menuItems="[
        { name: 'colors', path: '/guide/mobile/colors' },
        { name: 'fonts', path: '/guide/mobile/fonts' },
        { name: 'texts', path: '/guide/mobile/texts' },
        { name: 'buttons', path: '/guide/mobile/buttons' },
        { name: 'forms', path: '/guide/mobile/forms' },
        { name: 'components', path: '/guide/mobile/components' },
        { name: 'icons', path: '/guide/mobile/icons' },
        { name: 'tables', path: '/guide/mobile/tables' },
        { name: 'swipers', path: '/guide/mobile/swipers' },
        { name: 'layerpops', path: '/guide/mobile/layerpops' },
        { name: 'videos', path: '/guide/mobile/videos' }
    ]" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">component</h2>

        <h3 class="page-guide-title2">toggle</h3>
        <div class="page-guide-box">
            <ul class="toggle-wrap">
                <li>
                    <div class="toggle-title">
                        <button class="btn-toggle js_toggle" data-target="size">
                            <h3 class="title-type">Size &amp; Fit</h3>
                        </button>
                    </div>
                    <div id="size" class="toggle-box">
                        toggle 내용
                    </div>
                </li>
                <li>
                    <div class="toggle-title">
                        <button class="btn-toggle js_toggle" data-target="composition">
                            <h3 class="title-type">Composition &amp; Care</h3>
                        </button>
                    </div>
                    <div id="composition" class="toggle-box">
                        toggle 내용
                    </div>
                </li>
            </ul>
        </div>

        <h3 class="page-guide-title2">accordian</h3>
        <div class="page-guide-box">
            <div class="accordion-list">
                <dl class="accordion-item">
                    <dt>
                        <button class="js_accordion">
                            <p>T-Shirts</p>
                        </button>
                    </dt>
                    <dd>
                        content
                    </dd>
                </dl>
                <dl class="accordion-item">
                    <dt>
                        <button class="js_accordion">
                            <p>T-Shirts type2</p>
                        </button>
                    </dt>
                    <dd>
                        content
                    </dd>
                </dl>
            </div>
        </div>

        <h3 class="page-guide-title2">star</h3>
        <div class="page-guide-box">
            <h4>basic : width 0~100%</h4>
            <div class="star-rating">
                <div class="star" style="width:0%">star</div>
            </div>
            <div class="star-rating">
                <div class="star" style="width:30%">star</div>
            </div>
            <div class="star-rating">
                <div class="star" style="width:50%">star</div>
            </div>
            <div class="star-rating">
                <div class="star" style="width:80%">star</div>
            </div>
            <div class="star-rating">
                <div class="star" style="width:100%">star</div>
            </div>

            <br><br>
            <div class="star-rating2">
                <div class="star" style="width:0%">star</div>
            </div>
            <div class="star-rating2">
                <div class="star" style="width:30%">star</div>
            </div>
            <div class="star-rating2">
                <div class="star" style="width:50%">star</div>
            </div>
            <div class="star-rating2">
                <div class="star" style="width:80%">star</div>
            </div>
            <div class="star-rating2">
                <div class="star" style="width:90%">star</div>
            </div>
            <div class="star-rating2">
                <div class="star" style="width:100%">star</div>
            </div>

            <br><br>
            <h4>click star rating</h4>
            <div class="star-wrap">
                <input class="input-star input-star-none" name="rating" id="rating-0" value="0" type="radio">
                <label aria-label="0 stars" class="label_star" for="rating-0"></label>

                <label aria-label="0.5 stars" class="label_star label_star_half" for="rating-05"><i
                        class="rating-star ico-star-half"></i></label>
                <input class="input-star" name="rating" id="rating-05" value="0.5" type="radio">

                <label aria-label="1 star" class="label_star" for="rating-10"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-10" value="1" type="radio">

                <label aria-label="1.5 stars" class="label_star label_star_half" for="rating-15"><i
                        class="rating-star ico-star-half"></i></label>
                <input class="input-star" name="rating" id="rating-15" value="1.5" type="radio" checked="">

                <label aria-label="2 stars" class="label_star" for="rating-20"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-20" value="2" type="radio">

                <label aria-label="2.5 stars" class="label_star label_star_half" for="rating-25"><i
                        class="rating-star ico-star-half"></i></label>
                <input class="input-star" name="rating" id="rating-25" value="2.5" type="radio">

                <label aria-label="3 stars" class="label_star" for="rating-30"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-30" value="3" type="radio">

                <label aria-label="3.5 stars" class="label_star label_star_half" for="rating-35"><i
                        class="rating-star ico-star-half"></i></label>
                <input class="input-star" name="rating" id="rating-35" value="3.5" type="radio">

                <label aria-label="4 stars" class="label_star" for="rating-40"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-40" value="4" type="radio">

                <label aria-label="4.5 stars" class="label_star label_star_half" for="rating-45"><i
                        class="rating-star ico-star-half"></i></label>
                <input class="input-star" name="rating" id="rating-45" value="4.5" type="radio">

                <label aria-label="5 stars" class="label_star" for="rating-50"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-50" value="5" type="radio">
            </div>

            <br><br>
            <div class="star-wrap2 selected">
                <input class="input-star input-star-none" name="rating2" id="rating2-0" value="0" type="radio">
                <label aria-label="0 stars" class="label_star" for="rating2-0"></label>

                <label aria-label="1 star" class="label_star" for="rating2-10"><i class="rating-star ico-star2"></i></label>
                <input class="input-star" name="rating2" id="rating2-10" value="1" type="radio">

                <label aria-label="2 stars" class="label_star" for="rating2-20"><i
                        class="rating-star ico-star2"></i></label>
                <input class="input-star" name="rating2" id="rating2-20" value="2" type="radio">

                <label aria-label="3 stars" class="label_star" for="rating2-30"><i
                        class="rating-star ico-star2"></i></label>
                <input class="input-star" name="rating2" id="rating2-30" value="3" type="radio">

                <label aria-label="4 stars" class="label_star" for="rating2-40"><i
                        class="rating-star ico-star2"></i></label>
                <input class="input-star" name="rating2" id="rating2-40" value="4" type="radio">

                <label aria-label="5 stars" class="label_star" for="rating2-50"><i
                        class="rating-star ico-star2"></i></label>
                <input class="input-star" name="rating2" id="rating2-50" value="5" type="radio" checked="">
            </div>

            <br><br>
            <div class="star-wrap3 selected">
                <input class="input-star input-star-none" name="rating3" id="rating3-0" value="0" type="radio">
                <label aria-label="0 stars" class="label_star" for="rating3-0"></label>

                <label aria-label="1 star" class="label_star" for="rating3-10"><i class="rating-star ico-star3"></i></label>
                <input class="input-star" name="rating3" id="rating3-10" value="1" type="radio">

                <label aria-label="2 stars" class="label_star" for="rating3-20"><i
                        class="rating-star ico-star3"></i></label>
                <input class="input-star" name="rating3" id="rating3-20" value="2" type="radio">

                <label aria-label="3 stars" class="label_star" for="rating3-30"><i
                        class="rating-star ico-star3"></i></label>
                <input class="input-star" name="rating3" id="rating3-30" value="3" type="radio">

                <label aria-label="4 stars" class="label_star" for="rating3-40"><i
                        class="rating-star ico-star3"></i></label>
                <input class="input-star" name="rating3" id="rating3-40" value="4" type="radio">

                <label aria-label="5 stars" class="label_star" for="rating3-50"><i
                        class="rating-star ico-star3"></i></label>
                <input class="input-star" name="rating3" id="rating3-50" value="5" type="radio" checked="">
            </div>
        </div>

        <h3 class="page-guide-title2">product list</h3>
        <div class="page-guide-box">
            <div class="product-top">
                <div class="prd-mode">
                    <div class="chk-box">
                        <input type="checkbox" id="saleChk">
                        <label class="checkbox" for="saleChk"></label>
                        <label for="saleChk">Sale Only</label>
                    </div>
                    <!-- <button type="button" class="btn-mode">2개</button> -->
                    <!-- <button type="button" class="btn-mode mode4">4개</button> -->
                    <span class="count"><em>99</em> items</span>
                </div>
                <div class="prd-type">
                    <button type="button">Filter<i class="ico-filter"></i></button>
                    <button type="button">Sort<i class="ico-sort"></i></button>
                </div>
            </div>
            <div class="product-list">
                <ul>
                    <li class="product-item">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">High Collar Blouson jackets jackets jackets
                                            jacketsjacketsjacketsjackets</p>
                                    </div>
                                    <div class="product-price">
                                        <span class="original"><b>$400.00</b></span>
                                        <div class="special-price">
                                            <strong class="price"><b>$245.00</b></strong>
                                            <em class="sale">10%</em>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="tag-box">
                                            <span class="tag-type">Priority Shipping</span>
                                            <span class="tag-type">exclusive</span>
                                        </div>
                                        <div class="stats-box">
                                            <span class="like">
                                                <i class="ico-star"><span class="hidden">like</span></i>
                                                <em>237</em>
                                            </span>
                                            <span class="color">
                                                <i class="ico-plus v2"><span class="hidden">more</span></i>
                                                <em>12 Colors</em>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="product-item">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">High Collar Blouson</p>
                                    </div>
                                    <div class="product-price">
                                        <div class="special-price">
                                            <strong class="price"><b>$245.00</b></strong>
                                            <em class="sale">10%</em>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="stats-box">
                                            <span class="like">
                                                <i class="ico-star"><span class="hidden">like</span></i>
                                                <em>1</em>
                                            </span>
                                            <span class="color">
                                                <i class="ico-plus v2"><span class="hidden">more</span></i>
                                                <em>5 Colors</em>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="product-item">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title"></p>
                                    </div>
                                    <div class="product-price">
                                        <span class="original"><b>IDR100,487,999.72</b></span>
                                        <div class="special-price">
                                            <strong class="price"><b>IDR100,279,999.76</b></strong>
                                            <em class="sale">10%</em>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="tag-box">
                                            <span class="tag-type">Priority Shipping</span>
                                        </div>
                                        <div class="stats-box">
                                            <span class="color">
                                                <i class="ico-plus v2"><span class="hidden">more</span></i>
                                                <em>2 Colors</em>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <!-- 상품 프로모션 배너 영역 -->
                    <li class="product-item product-promotion">
                        <a href="#">
                            <img src="@/assets/images/mobile/temp/@temp_prd_banner.png">
                        </a>
                    </li>
                    <!-- //상품 프로모션 배너 영역 -->
                    <li class="product-item">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">Top Top toptoptoptotp</p>
                                    </div>
                                    <div class="product-price">
                                        <span class="original"><b>IDR100,487,999.72</b></span>
                                        <div class="special-price">
                                            <strong class="price"><b>IDR20,279</b></strong>
                                            <em class="sale">80%</em>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="tag-box">
                                            <span class="tag-type">Priority Shipping</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <div class="special-price">
                                            <strong class="price"><b>IDR100,279,999.76</b></strong>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="tag-box">
                                            <span class="tag-type">Priority Shipping</span>
                                        </div>
                                        <div class="stats-box">
                                            <span class="like">
                                                <i class="ico-star"><span class="hidden">like</span></i>
                                                <em>127</em>
                                            </span>
                                            <span class="color">
                                                <i class="ico-plus v2"><span class="hidden">more</span></i>
                                                <em>7 Colors</em>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="product-item soldout">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/mobile/temp/@temp_prd_image.png">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">High Collar Blouson jackets jackets jackets
                                            jacketsjacketsjacketsjackets</p>
                                    </div>
                                    <div class="product-price">
                                        <span class="original"><b>$10.100.245.00</b></span>
                                        <div class="special-price">
                                            <strong class="price"><b>$10.100.245.00</b></strong>
                                            <em class="sale">90%</em>
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="stats-box">
                                            <span class="like">
                                                <i class="ico-star"><span class="hidden">like</span></i>
                                                <em>8</em>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <h3 class="page-guide-title2">cart list</h3>
        <div class="page-guide-box">
            <div class="cart-list">
                <div class="cart-item">
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/mobile/temp/@temp_prd_image.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <h3 class="brand">BRAND</h3>
                                <p class="title">Over fit round Dewy Double Jacket Big pockets detail with raglan</p>
                                <button type="button" class="btn-del">
                                    <span class="hidden">delete</span>
                                </button>
                            </div>
                            <div class="product-option">
                                <ul class="list">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                                <button type="button" class="btn-edit">
                                    Edit
                                </button>
                            </div>
                            <div class="product-price">
                                <span class="price"><b>$245.00</b></span>
                                <span class="original"><b>$400.00</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="product-btn">
                        <button type="button" class="btn-wish"><i class="ico-like v3"></i><span>Move to
                                WishList</span></button>
                        <div class="side">
                            <p class="msg">Coupon Applied</p>
                        </div>
                    </div>
                    <div class="product-noti">
                        <ul class="list-type">
                            <li>Estimated Delivery : May 11 - May 23</li>
                            <li>Non-cancelable item</li>
                            <li>
                                <p class="tooltip-text">Final Sale <span class="tooltip-btn"><i class="ico-info"></i></span>
                                    : Non-returnable item</p>
                                <div class="tooltip-box">
                                    Subject to data protection regulations
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="product-tag">
                        <span class="tag-type">Final Sale</span>
                        <span class="tag-type">Exclusive</span>
                    </div>
                </div>
                <div class="cart-item">
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/mobile/temp/@temp_prd_image.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <h3 class="brand">BRAND</h3>
                                <p class="title">Over fit round Dewy Double Jacket Big pockets detail with raglan</p>
                                <button type="button" class="btn-del">
                                    <span class="hidden">delete</span>
                                </button>
                            </div>
                            <div class="product-option">
                                <ul class="list">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                                <button type="button" class="btn-edit">
                                    Edit
                                </button>
                            </div>
                            <div class="product-price">
                                <span class="price"><b>$245.00</b></span>
                                <span class="original"><b>$400.00</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="product-btn">
                        <button type="button" class="btn-wish"><i class="ico-like v3"></i><span>Move to
                                WishList</span></button>
                    </div>
                    <div class="product-noti">
                        <ul class="list-type">
                            <li>Estimated Delivery : May 11 - May 23</li>
                        </ul>
                    </div>
                    <div class="product-tag">
                        <span class="tag-type">Priority Shipping</span>
                        <span class="tag-type">Low Stock</span>
                    </div>
                </div>
                <div class="cart-item soldout">
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/mobile/temp/@temp_prd_image.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <h3 class="brand">BRAND</h3>
                                <p class="title">Over fit round Dewy Double Jacket Big pockets detail with raglan</p>
                                <button type="button" class="btn-del">
                                    <span class="hidden">delete</span>
                                </button>
                            </div>
                            <div class="product-option">
                                <ul class="list">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <a href="#" class="btn-type4 v5">Restock Notification</a>
                            </div>
                        </div>
                    </div>
                    <div class="product-btn">
                        <button type="button" class="btn-wish"><i class="ico-like v3"></i><span>Move to
                                WishList</span></button>
                    </div>
                </div>
                <div class="cart-item soldout v2">
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/mobile/temp/@temp_prd_image.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <h3 class="brand">BRAND</h3>
                                <p class="title">Over fit round Dewy Double Jacket Big pockets detail with raglan</p>
                                <button type="button" class="btn-del">
                                    <span class="hidden">delete</span>
                                </button>
                            </div>
                            <div class="product-option">
                                <ul class="list">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <p class="msg">Not available for sale.</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-btn">
                        <button type="button" class="btn-wish"><i class="ico-like v3"></i><span>Move to
                                WishList</span></button>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">address list</h3>
        <div class="page-guide-box">
            <h3 class="page-guide-title3">type 1</h3>
            <div class="address-box active">
                <strong class="title">Billing Address<span class="tag-type3">DEFAULT</span></strong>
                <div class="info">
                    <p class="name">Paul Lee</p>
                    <p> 1313 Disneyland Dr,<br>
                        Anaheim, California, 92802,<br>
                        United States</p>
                    <p class="tel">T : 7147814636</p>
                </div>
                <a href="#" class="btn-edit">
                    Edit
                </a>
            </div>
            <div class="address-box active">
                <strong class="title">Shipping Address<span class="tag-type3">DEFAULT</span></strong>
                <div class="info">
                    <p class="name">Paul Lee</p>
                    <p> 1313 Disneyland Dr,<br>
                        Anaheim, California, 92802,<br>
                        United States</p>
                    <p class="tel">T : 7147814636</p>
                </div>
                <a href="#" class="btn-edit">
                    Edit
                </a>
            </div>
            <div class="address-box">
                <div class="info">
                    <p class="name">Paul Lee</p>
                    <p> 1313 Disneyland Dr,<br>
                        Anaheim, California, 92802,<br>
                        United States</p>
                    <p class="tel">T : 7147814636</p>
                </div>
                <a href="#" class="btn-delete">
                    Delete
                </a>
                <a href="#" class="btn-edit">
                    Edit
                </a>
            </div>
            <div class="address-box">
                <div class="info">
                    <p class="name">Paul Lee</p>
                    <p> 1313 Disneyland Dr,<br>
                        Anaheim, California, 92802,<br>
                        United States</p>
                    <p class="tel">T : 7147814636</p>
                </div>
                <a href="#" class="btn-delete">
                    Delete
                </a>
                <a href="#" class="btn-edit">
                    Edit
                </a>
            </div>
        </div>

        <h3 class="page-guide-title2">page</h3>
        <h3 class="page-guide-title3">error</h3>
        <div class="page-guide-box">
            <p class="text">* 본 작업에서는 .error-wrap { min-height: 100vh } 으로 수정하기</p>
            <div class="error-wrap">
                <i class="ico-attention"><span class="hidden">attention</span></i>
                <div class="text-box">
                    <div class="title-type3">The requested service<br>cannot be performed.</div>
                    <p>We apologize for the inconvenience.<br>lease log in again after a while.</p>
                </div>
                <div class="btn-wrap">
                    <button type="button" class="btn-type v2">Go to Main</button>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title3">no-data type 1</h3>
        <div class="page-guide-box">
            <div class="nodata-wrap">
                <i class="ico-nodata"><span class="hidden">nodata</span></i>
                <p>There are no stores found.<br>Please search again.</p>
            </div>
        </div>
        <h3 class="page-guide-title3">no-data type2</h3>
        <div class="page-guide-box">
            <div class="nodata-wrap2">
                <p>Sorry,<br>No search items are found</p>
            </div>
        </div>
        <h3 class="page-guide-title3">no-data type2 v2</h3>
        <div class="page-guide-box">
            <div class="nodata-wrap2">
                <div class="title">We have found<br>no results for “pizzaperfume”</div>
                <p>Please try again.</p>
            </div>
        </div>

        <h3 class="page-guide-title2">loading</h3>
        <div class="page-guide-box">
            <div class="loading-svg">
                <img class="loading-logo" src="@/assets/images/mobile/loading_logo.svg" alt="">
                <img class="loading-bar" src="@/assets/images/mobile/loading_bar.svg" alt="">
            </div>
        </div>

        <h3 class="page-guide-title2">custom scroll</h3>
        <div class="page-guide-box">
            <div style="height:200px;padding:10px;border:1px solid #000;font-size:13px;line-height:20px"
                class="custom-scroll">
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
                scroll 있을 경우 custom~~~~<br>
                높이값은 그때 그때 알아서 추가 하는 시스템으로 갑시다<br>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';

useHead({
    title: 'HDEzwel Mobile Guide',
});

</script>

<style scoped lang="scss">@import "@/assets/scss/mobile/common.scss";
@import "@/assets/scss/mobile/guide.scss";</style>
  







