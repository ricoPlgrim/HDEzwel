<template>
    <GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">FORM</h2>

        <h3 class="page-guide-title2">text</h3>
        <div class="page-guide-box form-wrap">

            <div class="form-item">
                <label class="input-label">Name<span class="required">*</span></label>
                <div class="input-text">
                    <div class="input-text">
                        <input type="text" name="" id="name" value="sally">
                        <div class="form-btns">
                            <button type="button" class="btn-clear">
                                <span class="hidden">Clear</span>
                            </button>
                        </div>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item error">
                <label class="input-label">Name<span class="required">*</span></label>
                <div class="input-text">
                    <input type="text" name="" id="name2" value="sall^^^^y!">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item">
                <label class="input-label">
                    Email Address<span class="required">*</span>
                </label>
                <div class="input-text">
                    <input type="email" name="" id="email" value="" placeholder="email" required="">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item">
                <label class="input-label">
                    Name<span class="required">*</span>
                </label>
                <div class="input-text">
                    <input type="text" name="" id="name3" value="No coupons available" disabled="">
                </div>
            </div>

            <div class="form-item">
                <label class="input-label">
                    Name<span class="required">*</span>
                </label>
                <div class="input-text">
                    <input type="text" name="" id="name4" value="sally" placeholder="Name">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item error">
                <label class="input-label">
                    Password
                </label>
                <div class="input-text">
                    <input type="password" name="" id="password" value="123456789!" placeholder="Password">
                    <div class="form-btns">
                        <button type="button" class="btn-clear" style="display:inline-block">
                            <span class="hidden">Clear</span>
                        </button>
                        <button type="button" class="btn-eye" style="display:inline-block">
                            <span class="hidden">Eye</span>
                        </button>
                    </div>
                </div>
                <ul class="msg list-type">
                    <li>Include at least 3 classes : uppercase, lowercase, digits, special characters</li>
                    <li>8-20 characters</li>
                    <li>No spaces</li>
                </ul>
            </div>

            <div class="form-item">
                <label class="input-label">
                    Password
                </label>
                <div class="input-text">
                    <input type="password" name="" id="password2" value="123456789!" placeholder="Password">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                        <button type="button" class="btn-eye">
                            <span class="hidden">Eye</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item">
                <label class="input-label js_tooltip" data-target="tooltip1">
                    Phone Number<em class="required">*</em>
                    <span class="tooltip-wrap">
                        <i class="ico-info"></i>
                        <div class="js_tooltip_box" id="tooltip1">
                            For delivery questions. In case we need to contact you about your order
                        </div>
                    </span>
                </label>
                <div class="input-text phone">
                    <span class="country-code">+1</span>
                    <input type="number" name="" id="name5" placeholder="US Phone Number ONLY">
                    <div class="form-btns">
                        <button type="button" class="btn-clear" style="display: none;">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item date">
                <label class="input-label">
                    DATE
                </label>
                <div class="input-text">
                    <input type="date" name="" id="date" value="" placeholder="yyyy-mm-dd" lang="en-us" required="">
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item">
                <div class="textarea-type">
                    <div class="textarea-scroll">
                        <textarea cols="30" rows="5" id="textarea" maxlength="500" placeholder="Leave a comment"></textarea>
                    </div>
                    <span class="count">(<em class="current">0</em>/<span class="maximum">500</span>)</span>
                </div>
            </div>
            <div class="form-item">
                <div class="textarea-type">
                    <div class="textarea-scroll">
                        <textarea cols="30" rows="5" id="textarea" maxlength="500"
                            placeholder="Leave a comment">It's very good, it's cool~ It's a good fit, and I want to give it to my friends as a gift.</textarea>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">text group</h3>
        <div class="page-guide-box form-wrap">
            <h4>col form</h4>
            <div class="form-item">
                <label class="input-label">
                    Name
                </label>
                <div class="col input-text">
                    <input type="text" name="name" id="name10" value="" placeholder="First Name" required="">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <div class="col input-text">
                    <input type="text" name="name2" id="name11" value="" placeholder="Last Name" required="">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item error">
                <div class="col input-text">
                    <input type="text" name="name" id="name12" value="" placeholder="First Name" required="">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <div class="col input-text">
                    <input type="text" name="name2" id="name13" value="" placeholder="Last Name" required="">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <p class="msg">error msg</p>
            </div>

            <div class="form-item">
                <div class="col v2 input-text">
                    <input type="text" name="name" id="name14" value="form-item > col v2" placeholder="fffffffff">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                </div>
                <button class="btn-type2 v3">Apply</button>
                <p class="msg">error msg</p>
            </div>
        </div>

        <h3 class="page-guide-title2">select</h3>
        <div class="page-guide-box">
            <h4>type 1</h4>
            <div class="select-type js_select">
                <div class="select-option">Newst</div>
                <div class="select-cont">
                    <ul class="custom-scroll">
                        <li><button>Newst</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button>Oldest</button></li>
                        <li><button disabled="">disabled</button></li>
                    </ul>
                </div>
            </div>
            <br>
            <div class="select-type disabled js_select">
                <div class="select-option">Newst</div>
                <div class="select-cont">
                    <ul>
                        <li><button>Newst</button></li>
                        <li><button>Oldest</button></li>
                    </ul>
                </div>
            </div>
            <br><br>
            <h4>type 2</h4>
            <div class="select-type2 js_select">
                <div class="select-option">Newst</div>
                <ul>
                    <li><button>Newst</button></li>
                    <li><button>Oldest</button></li>
                    <li><button disabled="">disabled</button></li>
                </ul>
            </div>

        </div>

        <h3 class="page-guide-title2">check box</h3>
        <div class="page-guide-box">
            <div class="chk-box">
                <input type="checkbox" id="test2">
                <label class="checkbox" for="test2"></label>
                <label for="test2">ckeck1</label>
            </div>
            <div class="chk-box selected">
                <input type="checkbox" id="test" checked="">
                <label class="checkbox" for="test"></label>
                <label for="test">ckeck2</label>
            </div>
            <div class="chk-box">
                <input type="checkbox" id="test3" disabled="">
                <label class="checkbox" for="test3"></label>
                <label for="test3">disabled ckeck</label>
            </div>
            <br><br>
            <div class="chk-box2">
                <input type="checkbox" id="test4">
                <label class="checkbox" for="test4"></label>
                <label for="test4">ckeck4</label>
            </div>
            <div class="chk-box2 selected">
                <input type="checkbox" id="test5" checked="">
                <label class="checkbox" for="test5"></label>
                <label for="test5">ckeck5</label>
            </div>
        </div>

        <h3 class="page-guide-title2">group check box</h3>
        <div class="page-guide-box">
            <div class="chk-group">
                <div class="chk-box chk-all">
                    <input type="checkbox" id="all">
                    <label class="checkbox" for="all"></label>
                    <label for="all">all ckeck</label>
                </div>

                <div class="chk-group-box">
                    <div class="chk-box">
                        <input type="checkbox" id="chk1">
                        <label class="checkbox chk" for="chk1"></label>
                        <label for="chk1">ckeck1</label>
                    </div>

                    <div class="chk-box">
                        <input type="checkbox" id="chk2">
                        <label class="checkbox chk" for="chk2"></label>
                        <label for="chk2">ckeck2</label>
                    </div>

                    <div class="chk-box">
                        <input type="checkbox" id="chk3">
                        <label class="checkbox chk" for="chk3"></label>
                        <label for="chk3">ckeck3</label>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">radio</h3>
        <div class="page-guide-box">
            <div class="chk-box">
                <input type="radio" id="radio" name="radio">
                <label class="checkbox" for="radio"></label>
                <label for="radio">radio1</label>
            </div>
            <div class="chk-box selected">
                <input type="radio" id="radio2" name="radio" checked="">
                <label class="checkbox" for="radio2"></label>
                <label for="radio2">radio2</label>
            </div>
            <div class="chk-box">
                <input type="radio" id="radio3" name="radio" disabled="">
                <label class="checkbox" for="radio3"></label>
                <label for="radio3">disabled radio</label>
            </div>
        </div>

        <h3 class="page-guide-title2">switch</h3>
        <div class="page-guide-box">
            <div class="switch-box">
                <input type="checkbox" id="switch">
                <label class="checkbox" for="switch"></label>
            </div>
        </div>
        <div class="page-guide-box">
            <div class="switch-box2">
                <input type="checkbox" id="switch2">
                <label class="checkbox" for="switch2"></label>
            </div>
        </div>

        <h3 class="page-guide-title2">quantity</h3>
        <div class="form-item quantity">
            <button type="button" class="btn-minus">
                <i class="ico-minus"></i><span class="hidden">수량 감소</span>
            </button>
            <input type="text" class="num" value="1" minlength="1">
            <button type="button" class="btn-plus">
                <i class="ico-plus v3"></i><span class="hidden">수량 증가</span>
            </button>
        </div>
        <div class="form-item quantity">
            <button type="button" class="btn-minus disabled">
                <i class="ico-minus"></i><span class="hidden">수량 감소</span>
            </button>
            <input type="text" class="num" value="1" minlength="1">
            <button type="button" class="btn-plus">
                <i class="ico-plus v3"></i><span class="hidden">수량 증가</span>
            </button>
        </div>
        <div class="form-item quantity disabled">
            <button type="button" class="btn-minus">
                <i class="ico-minus"></i><span class="hidden">수량 감소</span>
            </button>
            <input type="text" class="num" value="1" minlength="1">
            <button type="button" class="btn-plus">
                <i class="ico-plus v3"></i><span class="hidden">수량 증가</span>
            </button>
        </div>
        <div class="form-item quantity full">
            <button type="button" class="btn-minus">
                <i class="ico-minus"></i><span class="hidden">수량 감소</span>
            </button>
            <input type="text" class="num" value="1" minlength="1">
            <button type="button" class="btn-plus">
                <i class="ico-plus v3"></i><span class="hidden">수량 증가</span>
            </button>
        </div>

        <h3 class="page-guide-title2">file upload</h3>
        <div class="page-guide-box">
            <div class="file-type img">
                <div class="img-box"></div>
                <label for="input-file" class="btn-upload"></label>
                <input type="file" id="input-file" multiple="">
            </div>
        </div>

        <h3 class="page-guide-title2">search</h3>
        <div class="page-guide-box">
            <div class="search-form form-item">
                <div class="input-text">
                    <input type="text" name="" id="sch" value="" placeholder="Search">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                        <button type="button" class="btn-search">
                            <span class="hidden">Search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="search-form form-item v2">
                <div class="input-text">
                    <input type="text" name="" id="sch2" value="" placeholder="Search">
                    <div class="form-btns">
                        <button type="button" class="btn-clear">
                            <span class="hidden">Clear</span>
                        </button>
                    </div>
                    <button type="button" class="btn-search">
                        <span class="hidden">Search</span>
                    </button>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">datepicker</h3>
        <div class="page-guide-box">
            <div class="form-item datepicker">
                <input id="datepicker" type="text" class="hasDatepicker">
                <button class="btn-type2 v3">Apply</button>
            </div>
            <div class="form-item datepicker-term">
                <input id="datepicker2" type="text" class="hasDatepicker">
                <span>~</span>
                <input id="datepicker3" type="text" class="hasDatepicker">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import menuItems from '~/data/desktop/menuItems';

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
  








