<template>
    <GuideNav title="PC Guide" version="2024.12" :menuItems="[
        { name: 'colors', path: '/guide/desktop/colors' },
        { name: 'fonts', path: '/guide/desktop/fonts' },
        { name: 'texts', path: '/guide/desktop/texts' },
        { name: 'buttons', path: '/guide/desktop/buttons' },
        { name: 'forms', path: '/guide/desktop/forms' },
        { name: 'components', path: '/guide/desktop/components' },
        { name: 'icons', path: '/guide/desktop/icons' },
        { name: 'tables', path: '/guide/desktop/tables' },
        { name: 'swipers', path: '/guide/desktop/swipers' },
        { name: 'layerpops', path: '/guide/desktop/layerpops' },
        { name: 'videos', path: '/guide/desktop/videos' }
    ]" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">component</h2>

        <h3 class="page-guide-title2">location</h3>
        <div class="page-guide-box">
            <div class="location">
                <a href="#">Home</a>
                <a href="#">Women</a>
                <a href="#">Clothing</a>
                <a href="#">All Clothing</a>
            </div>
        </div>
        <h3 class="page-guide-title2">toggle</h3>
        <div class="page-guide-box">
            <ul class="toggle-wrap">
                <li>
                    <div class="toggle-title">
                        <button class="btn-toggle js_toggle active" data-target="size">
                            <h3 class="title-type">Size &amp; Fit</h3>
                        </button>
                    </div>
                    <div id="size" class="toggle-box active">
                        toggle 내용
                    </div>
                </li>
                <li>
                    <div class="toggle-title">
                        <button class="btn-toggle js_toggle active" data-target="composition">
                            <h3 class="title-type">Composition &amp; Care</h3>
                        </button>
                    </div>
                    <div id="composition" class="toggle-box active">
                        toggle 내용
                    </div>
                </li>
            </ul>
        </div>

        <h3 class="page-guide-title2">accordian</h3>
        <div class="page-guide-box">
            <div class="accordion-list">
                <dl class="accordion-item active">
                    <dt>
                        <button class="js_accordion">Editor’s Notes</button>
                    </dt>
                    <dd style="display: block;">
                        Short trench with tab details that can be opened and closed at the back.
                        It is a soft and lightweight item that is good to match with various items with a natural color
                        sense. Using 60s cotton. high-density washing fabric, it
                        features soft color and touch, and has good breathability
                        and moisture absorption.
                    </dd>
                </dl>
                <dl class="accordion-item">
                    <dt>
                        <button class="js_accordion">Size &amp; Fit</button>
                    </dt>
                    <dd style="display: none;">
                        ddddddddddddddddddddddddddddddddddddddddd
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
                <div class="star" style="width:29.5%">star</div>
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

                <!-- <label aria-label="0.5 stars" class="label_star label_star_half" for="rating-05"><i
						class="rating-star ico-star-half"></i></label>
				<input class="input-star" name="rating" id="rating-05" value="0.5" type="radio"> -->

                <label aria-label="1 star" class="label_star" for="rating-10"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-10" value="1" type="radio">

                <!-- <label aria-label="1.5 stars" class="label_star label_star_half" for="rating-15"><i
						class="rating-star ico-star-half"></i></label>
				<input class="input-star" name="rating" id="rating-15" value="1.5" type="radio" checked> -->

                <label aria-label="2 stars" class="label_star" for="rating-20"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-20" value="2" type="radio">

                <!-- <label aria-label="2.5 stars" class="label_star label_star_half" for="rating-25"><i
						class="rating-star ico-star-half"></i></label>
				<input class="input-star" name="rating" id="rating-25" value="2.5" type="radio"> -->

                <label aria-label="3 stars" class="label_star" for="rating-30"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-30" value="3" type="radio">

                <!-- <label aria-label="3.5 stars" class="label_star label_star_half" for="rating-35"><i
						class="rating-star ico-star-half"></i></label>
				<input class="input-star" name="rating" id="rating-35" value="3.5" type="radio"> -->

                <label aria-label="4 stars" class="label_star" for="rating-40"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-40" value="4" type="radio">

                <!-- <label aria-label="4.5 stars" class="label_star label_star_half" for="rating-45"><i
						class="rating-star ico-star-half"></i></label>
				<input class="input-star" name="rating" id="rating-45" value="4.5" type="radio"> -->

                <label aria-label="5 stars" class="label_star" for="rating-50"><i class="rating-star ico-star"></i></label>
                <input class="input-star" name="rating" id="rating-50" value="5" type="radio">
            </div>
        </div>

        <h3 class="page-guide-title2">product list</h3>
        <div class="page-guide-box">
            <h3 class="page-guide-title3">type 1</h3>
            <!-- product-top (s) -->
            <div class="product-top">
                <div class="prd-mode">
                    <span class="count"><em>99</em> items</span>
                </div>
                <div class="prd-type">
                    <div class="chk-box">
                        <input type="checkbox" id="saleChk">
                        <label class="checkbox" for="saleChk"></label>
                        <label for="saleChk">Sale Only</label>
                    </div>
                    <div class="select-type2 js_select">
                        <div class="select-option">What’s new</div>
                        <ul>
                            <li><button>Inroduction</button></li>
                            <li><button>Information Collects</button></li>
                            <li><button disabled="">Your Privacy Controls</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- // product-top (e) -->
            <!-- product-list (s) -->
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
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">High Collar Blouson jackets jackets jackets
                                            jacketsjacketsjacketsjackets</p>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>$245.00</b></strong>
                                        <span class="original"><b>$400.00</b></span>
                                        <em class="sale">10%</em>
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
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">High Collar Blouson</p>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>$245.00</b></strong>
                                        <em class="sale">10%</em>
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
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title"></p>
                                    </div>
                                    <div class="product-price reduce">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
                                        <span class="original"><b>IDR100,487,999.72</b></span>
                                        <em class="sale">10%</em>
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
                    <li class="product-item">
                        <button class="btn-wish">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                        <p class="title">Top Top toptoptoptotp</p>
                                    </div>
                                    <div class="product-price reduce">
                                        <strong class="price"><b>IDR20,279</b></strong>
                                        <span class="original"><b>IDR100,487,999.72</b></span>
                                        <em class="sale">80%</em>
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
                    <!-- 상품 프로모션 배너 영역 -->
                    <li class="product-item product-promotion">
                        <a href="#">
                            <img src="@/assets/images/desktop/temp/@temp_prd_banner.png" alt="">
                        </a>
                    </li>
                    <!-- //상품 프로모션 배너 영역 -->
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
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
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
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
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
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
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
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
                    <li class="product-item">
                        <button class="btn-wish active">
                            <span class="hidden">wish</span>
                        </button>
                        <div class="product-cont">
                            <a href="#">
                                <div class="product-model">
                                    <div class="img-box">
                                        <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                    </div>
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="brand">LEMAIRE</h3>
                                    </div>
                                    <div class="product-price">
                                        <strong class="price"><b>IDR100,279,999.76</b></strong>
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
                </ul>
            </div>
            <!-- // product-list (e) -->
        </div>

        <h3 class="page-guide-title2">cart list</h3>
        <div class="page-guide-box">
            <div class="cart-list">
                <div class="cart-top">
                    <ul>
                        <li>Item</li>
                        <li>Price</li>
                    </ul>
                </div>
                <div class="cart-item">
                    <button type="button" class="btn-del">
                        <span class="hidden">delete</span>
                    </button>
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <a href="#">
                                    <h3 class="brand">BRAND</h3>
                                </a>
                                <a href="#">
                                    <p class="title">Over fit round Dewy Double Jacket Big pocketsn</p>
                                </a>
                            </div>
                            <div class="product-option">
                                <ul class="list-type2">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                                <button type="button" class="btn-edit"
                                    onclick="javascript:WC_UI.layerPopUp({selId:'#pop-edit'})">
                                    Edit
                                </button>
                            </div>
                            <div class="product-noti">
                                <ul class="list-type v2">
                                    <li>Standard (5-11 Business Days)</li>
                                    <li>Estimated Delivery : May 11 - May 23</li>
                                    <li>
                                        <span class="js_tooltip" data-target="tooltip1">
                                            Final Sale
                                            <span class="tooltip-wrap">
                                                <i class="ico-info"></i>
                                                <div class="js_tooltip_box" id="tooltip1">
                                                    Final sale item is available at a discounted price as they are
                                                    limited in quantity and may
                                                    not be in
                                                    perfect
                                                    condition (e.g., no tags, minimal imperfections, etc.).
                                                    Please note that due to the nature of the sale, we will not be
                                                    offering any price matching,
                                                    exchanges,
                                                    cancellations, or return for these items.
                                                </div>
                                            </span>
                                        </span>
                                        <span>: Non-returnable item</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-tag">
                                <span class="tag-type">Exclusive</span>
                                <span class="tag-type">Celeb’s Pick</span>
                            </div>
                            <div class="product-btn">
                                <button type="button" class="btn-wish"><span>Move to
                                        WishList</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="product-price reduce">
                        <div class="price-box">
                            <p class="price"><b>IDR90,815,304.08</b></p>
                            <p class="original"><b>IDR112,597,905.04</b></p>
                            <p class="msg">Coupon Applied</p>
                        </div>
                    </div>
                </div>
                <div class="cart-item soldout v2">
                    <button type="button" class="btn-del">
                        <span class="hidden">delete</span>
                    </button>
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <a href="#">
                                    <h3 class="brand">BRAND</h3>
                                </a>
                                <a href="#">
                                    <p class="title">Over fit round Dewy Double Jacket Big pockets</p>
                                </a>
                            </div>
                            <div class="product-option">
                                <ul class="list-type2">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                                <button type="button" class="btn-edit">
                                    Edit
                                </button>
                            </div>
                            <div class="product-msg">
                                <p>Not available for sale.</p>
                            </div>
                            <div class="product-btn">
                                <button type="button" class="btn-wish"><span>Move to
                                        WishList</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="product-price">

                    </div>
                </div>
                <div class="cart-item soldout">
                    <button type="button" class="btn-del">
                        <span class="hidden">delete</span>
                    </button>
                    <div class="product-type">
                        <div class="product-model">
                            <a href="#">
                                <div class="img-box">
                                    <img src="@/assets/images/desktop/temp/@temp_prd_01.png" alt="">
                                </div>
                            </a>
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <a href="#">
                                    <h3 class="brand">BRAND</h3>
                                </a>
                                <a href="#">
                                    <p class="title">Over fit round Dewy Double Jacket Big pockets
                                        detail with
                                        raglan</p>
                                </a>
                            </div>
                            <div class="product-option">
                                <ul class="list-type2">
                                    <li>Black</li>
                                    <li>One Size(XS~M)</li>
                                    <li>Qty : <b>1</b></li>
                                </ul>
                                <button type="button" class="btn-edit">
                                    Edit
                                </button>
                            </div>
                            <div class="product-msg">
                                <button type="button" class="btn-type4 v3">Restock Notification</button>
                            </div>
                            <div class="product-btn">
                                <button type="button" class="btn-wish"><span>Move to
                                        WishList</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="product-price">
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">payment box</h3>
        <div class="page-guide-box">
            <div class="payment-box">
                <div class="title-wrap v2">
                    <h2 class="title-type5">Payment Summary</h2>
                </div>
                <div class="box-type">
                    <dl>
                        <dt>Subtotal</dt>
                        <dd><span><b>$400.00</b></span></dd>
                    </dl>
                    <dl>
                        <dt>Discount</dt>
                        <dd><span class="focus"><b>- $8.00</b></span></dd>
                    </dl>
                    <dl class="tooltip-wrap">
                        <dt>
                            <span class="js_tooltip" data-target="tooltip2">Tax<i class="ico-info"></i></span>
                            <div class="js_tooltip_box" id="tooltip2">
                                For US customers, sales tax will be applied accordingly to your
                                state of residence. the additional duty charged for orders over
                                $800(price before discount) is responsible to the customer.<br>
                                For overseas customers, tax, duty, and customs fees will be
                                applied on the checkout page.
                            </div>
                        </dt>
                        <dd><span><b>$8.00</b></span></dd>
                    </dl>
                    <dl class="tooltip-wrap">
                        <dt>
                            <span class="js_tooltip" data-target="tooltip3">Shipping Fee<i class="ico-info"></i></span>
                            <div class="js_tooltip_box" id="tooltip3">
                                Free Shipping on All Orders Over $99.00 USD
                            </div>
                        </dt>
                        <dd><span><b>$10.00</b></span></dd>
                    </dl>
                    <dl>
                        <dt>Loyalty Points</dt>
                        <dd><span class="focus"><b>- $20.00</b></span></dd>
                    </dl>
                    <dl class="total">
                        <dt>Order Total</dt>
                        <dd><span><b>$486.00</b></span></dd>
                    </dl>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">address box</h3>
        <div class="page-guide-box">
            <div class="address-list">
                <div class="address-box">
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
                <div class="address-box">
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
            </div>
            <br><br>
            <div class="address-box">
                <strong class="title">VISA ending in 2222<span class="tag-type3">DEFAULT</span></strong>
                <div class="info">
                    <p class="name">Expires : 09/27</p>
                </div>
                <a href="#" class="btn-delete">
                    Delete
                </a>
            </div>
        </div>

        <h3 class="page-guide-title2">page</h3>
        <h3 class="page-guide-title3">error</h3>
        <div class="page-guide-box">
            <div class="error-wrap">
                <i class="ico-attention"><span class="hidden">attention</span></i>
                <div class="text-box">
                    <div class="title-type5">Oops!</div>
                    <p>We can’t seem to find the page you’re looking for.</p>
                </div>
                <div class="btn-wrap">
                    <button type="button" class="btn-type v2">HOME</button>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title3">no-data</h3>
        <div class="page-guide-box">
            <div class="nodata-wrap">
                <p class="title">Sorry,</p>
                <p>No search items are found</p>
            </div>
        </div>

        <h3 class="page-guide-title2">loading</h3>
        <div class="page-guide-box">
            <div class="loading-svg">
                <img class="loading-logo" src="@/assets/images/desktop/loading_logo.svg" alt="">
                <img class="loading-bar" src="@/assets/images/desktop/loading_bar.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';

useHead({
    title: 'HDEzwel PC Guide',
    meta: [
        { name: 'viewport', content: 'width=1460' }
    ]
});



</script>
<style scoped lang="scss">
@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/desktop/guide.scss";
</style>
  








