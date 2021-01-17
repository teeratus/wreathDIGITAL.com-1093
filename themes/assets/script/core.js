// z
var navbar_;
$(document).ready(function() {
    initImageInnerZoom();
    initProductFilterBootstrapSelect();
    menuFixedTopOnScroll();
    setActiveSlide();
    setCheckClickRight();
    setNocopyText();
    if (typeof LANG != "undefined" && LANG != null) {
        $.i18n.load(LANG);
    }
    $("div#floating-button").on("click", function() {
        $(".nds").toggle();
        $(".nds").toggleClass('block');
        $(this).toggleClass('block');
    });
    $('input#btnsubscribe').click(function() {
        var url = "apps/index.php?module=members&task=findAddEmailSubscribeWeb";
        $.ajax({
            type: 'POST',
            url: url,
            data: $('#frmsubscribe').serialize(),
            beforeSend: function() {
                if ($('#frmsubscribe').find('input[type="email"]#txtsubscribeWeb').val() == '') {
                    alert('Please put email');
                    return false;
                }
            },
            success: function(data) {
                switch (data) {
                    case '0':
                        alert('Subscribe complete.');
                        return false;
                        break;
                    default:
                        alert(data);
                        return false;
                        break;
                }
            }
        });
    });
    $('button#btnsubscribe').click(function() {
        var url = "apps/index.php?module=members&task=findAddEmailSubscribeWeb";
        $.ajax({
            type: 'POST',
            url: url,
            data: $('#frmsubscribe').serialize(),
            beforeSend: function() {
                if ($('#frmsubscribe').find('input[type="email"]#txtsubscribeWeb').val() == '') {
                    alert('Please put email');
                    return false;
                }
            },
            success: function(data) {
                switch (data) {
                    case '0':
                        alert('Subscribe complete.');
                        return false;
                        break;
                    default:
                        alert(data);
                        return false;
                        break;
                }
            }
        });
    });
    if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l') {

    }
});

function rtrim_func(text, s) {
    if (s == undefined)
        s = '\\s';
    return text.replace(new RegExp("[" + s + "]*$"), '');
}

function ltrim_func(text, s) {
    if (s == undefined)
        s = '\\s';
    return text.replace(new RegExp("^[" + s + "]*"), '');
}

function searchEnter(event) {
    if (event.keyCode == 13) {
        suSetSearchAll();
    }
}

function menuFixedTopOnScroll() {
    if ($(document).find('body').hasClass('menuFixedTopOnScroll')) {
        var nav = $('.su-zone-header').find('.navbar');
        var find_top = $(nav).offset().top;
        $(window).scroll(function() {
            if ($(this).scrollTop() > find_top) {
                if (!$(nav).hasClass("fixed-nav")) {
                    nav.addClass("fixed-nav");
                }
            } else {
                nav.removeClass("fixed-nav");
            }
        });
    } else {

    }
}

function toggleSideMenu() {
    $('.main-content-container').toggleClass('toggle-show-su-side ');
}

function initImageInnerZoom() {
    $(document).find('.ss-image-inner-zoom').each(function(i, v) {
        $(this).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500
        });
    });

}

function initSearchWeb(ui) {

}

function initSubscribeWeb(event) {
    var url = "apps/index.php?module=members&task=findAddEmailSubscribeWeb";
    $.ajax({
        type: 'POST',
        url: url,
        data: $(event).serialize(),
        beforeSend: function() {
            if ($(event).find('input[type="email"]#txtsubscribeWeb').val() == '') {
                alert('Please put email');
                return false;
            }
        },
        success: function(data) {
            switch (data) {
                case '0':
                    alert('Subscribe complete.');
                    return false;
                    break;
                case '99':
                    alert(data.response_text);
                    return false;
                    break;
            }
        }
    });
}

function initMemberLogin(event) {
    var url = "apps/index.php?module=members&task=findWidgetMemberLogin";
    $.ajax({
        type: 'POST',
        url: url,
        data: $(event).serialize(),
        beforeSend: function() {
            if ($(event).find('input[type="email"]').val() == '' || $(event).find('input[type="password"]').val() == '') {
                alert('Please put username and password');
                return false;
            }
        },
        success: function(data) {
            msg = JSON.parse(data);
            switch (msg.response_status) {
                case 0:
                    alert(msg.response_text + 'Email or Password not match');
                    return false;
                    break;
                case 1:
                    window.location.href = msg.link;
                    //window.location.reload();
                    return false;
                    break;
                case 99:
                    alert(data.response_text);
                    return false;
                    break;
            }
        }
    });
}

function initMemberLogin_Order_page(event) {
    var url = "apps/index.php?module=members&task=findWidgetMemberLogin";
    $.ajax({
        type: 'POST',
        url: url,
        data: $(event).serialize(),
        beforeSend: function() {
            if ($(event).find('input[type="email"]').val() == '' || $(event).find('input[type="password"]').val() == '') {
                alert('Please put username and password');
                return false;
            }
        },
        success: function(data) {
            msg = JSON.parse(data);
            switch (msg.response_status) {
                case 0:
                    alert(msg.response_text + 'Email or Password not match');
                    return false;
                    break;
                case 1:
                    window.location.reload();
                    //window.location.reload();
                    return false;
                    break;
                case 99:
                    alert(data.response_text);
                    return false;
                    break;
            }
        }
    });
}

function initMemberLogout_Order_page() {
    var url = "apps/index.php?module=members&task=findMemberLogout";
    $.ajax({
        type: 'POST',
        url: url,
        beforeSend: function() {},
        success: function(data) {
            window.location.reload();
        }
    });
}

function initMemberLogout() {
    var url = "apps/index.php?module=members&task=findMemberLogout";
    $.ajax({
        type: 'POST',
        url: url,
        beforeSend: function() {},
        success: function(data) {
            window.location.reload();
        }
    });
}

function initProductFilterBootstrapSelect() {
    $('.sys-products-filter').find('select.selectpicker').each(function() {
        $(this).selectpicker();
    });
    $('.sys-products-filter').find('.slider-range').each(function() {
        var min = $(this).data('min');
        var max = $(this).data('max');
        var value_min = $(this).data('value-min');
        var value_max = $(this).data('value-max');
        var show_range_id = $(this).data('show-range');
        var value_range_min_id = $(this).data('value-range-min');
        var value_range_max_id = $(this).data('value-range-max');
        var pre_range = $(this).data('pre-range');
        var sub_range = $(this).data('sub-range');
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function(event, ui) {
                $("#" + value_range_min_id).val(ui.values[0]);
                $("#" + value_range_max_id).val(ui.values[1]);
                $("#" + show_range_id).html(pre_range + ui.values[0] + sub_range + " - " + pre_range + ui.values[1] + sub_range);
            }
        });
    });

}

function selectCurrency(currency, currency_lang, day) {
    var d = new Date();
    d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = currency + "=" + currency_lang + "; " + expires;
    window.location.reload();
}

/////////// drop call back ////////////////
function dropCallBack(ele_is, ele_id) {
    switch (ele_is) {
        case "widgets-calendar":
            getGoogleCalendarApi(ele_id, '../../');
            break;
        case "widgets-likebox":
            initFacebookLikebox();
            break;
    }
}
//widget calender
function getGoogleCalendarApi(id, pre_path) {
    var url = pre_path + "apps/index.php?module=events&task=findWidgetCalendar";
    $.getJSON(url, function(res) {
        if (res != "" && res != null && res.response_status == 1) {
            if (res.data.google_api_key != null && res.data.google_api_key != "" && res.data.google_calendar_id != null && res.data.google_calendar_id != "") {
                loadgooglecalendar(id, res.data);
            }
        }
    });
}

function loadgooglecalendar(id, api_data) {
    var google_calendar_api_key = api_data.google_api_key
    var google_calendar_id = api_data.google_calendar_id;
    var b = new Date();
    var e = b.getDate();
    var a = b.getMonth();
    var f = b.getFullYear();
    var start_data;
    var end_data;
    var c = {};
    if ($("#" + id + " .body-calendar").width() <= 400) {
        c = { left: "title", center: "", right: "prev,next" }
    } else {
        c = { left: "", center: "title", right: "month,agendaWeek,agendaDay,prev,next" }
    }
    $("#" + id + " .body-calendar").fullCalendar({
        googleCalendarApiKey: google_calendar_api_key,
        events: google_calendar_id,
        header: c,
        eventClick: function(event) {
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        }
    })
}

function initFacebookLikebox() {
    // (function(d, s, id) {
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) return;
    //    js = d.createElement(s); js.id = id;
    //    js.src = "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&amp;version=v2.5";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));
    window.fbAsyncInit = function() {
        FB.init({
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.2'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/th_TH/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

function setCustomSearch() {
    var text = $('body').find('input[name="widget_search_form"]').val();
    var url = "apps/index.php?module=views&task=setlinksearch";
    $.ajax({
        type: 'POST',
        url: url,
        data: { 'text_search': text },
        beforeSend: function() {},
        success: function(data) {
            data = JSON.parse(data);
            window.location.href = data.link;
        }
    });
}

function suSetSearchAll() {
    var search_key = $('input#sh_search_keyword').val();
    var search_url = $('input#sh_search_keyword').attr('data-search-route').replace('searchkey.html', encodeURI(search_key)) + ".html";
    window.location.replace(search_url);
    return false;
}

function suSetSearchAllSide() {
    var search_key = $('input#sh_search_keyword_side').val();
    var search_url = $('input#sh_search_keyword_side').attr('data-search-route').replace('searchkey.html', encodeURI(search_key)) + ".html";
    window.location.replace(search_url);
    return false;
}

function suSetSearchAllTop() { // set Search Top for POLO Theme,
    var e = window.event;
    if (e.which == 13) {
        e.preventDefault();
        var search_key = $('#sh_search_top').val();
        var search_url = $('#sh_search_top').attr('data-search-route').replace('searchkey.html', encodeURI(search_key)) + ".html";
        window.location.replace(search_url);
        return false;
    }
}

function suSetSearchAllButton() { // set Search Top for POLO Theme,
    var search_key = $('#sh_search_top').val();
    var search_url = $('#sh_search_top').attr('data-search-route').replace('searchkey.html', encodeURI(search_key)) + ".html";
    window.location.replace(search_url);
    return false;
}

function setChangeFrontLanguage(lang) {
    var d = new Date();
    var url = "apps/index.php?module=views&task=setChangeLanguage&lang=" + lang + "&d" + d.getTime();
    $.get(url, function(data) {
        var urlStr = document.URL;
        var urlStr = urlStr.replace('#', '');
        // window.location.href = removeURLParameter(urlStr,'lang');
        window.location.reload();
    });
}

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}

function setChangeFrontCurrency(currency) {
    var d = new Date();
    var url = "apps/index.php?module=views&task=setChangeCurrency&currency=" + currency + "&d" + d.getTime();
    $.get(url, function(data) {
        window.location.reload(true);
    });
}

function setChangeFrontCurrencySaleCart(currency) {
    var d = new Date();
    var url = "apps/index.php?module=views&task=setChangeCurrency&currency=" + currency + "&d" + d.getTime();
    $.get(url, function(data) {
        //window.location.reload(true);
        var d = new Date();
        var url = "apps/index.php?module=orders&task=AddProductToCartDemo&d" + d.getTime();
        $.get(url, function(data) {
            window.location.reload(true);
        });
    });
}

function setActiveSlide() {
    if ($('body').attr('data-header-slide-interval') != null && $('body').attr('data-header-slide-interval') != "" && typeof $('body').attr('data-header-slide-interval') == 'undefined') {
        var interval = parseInt($('body').attr('data-header-slide-interval'));
    } else {
        var interval = 7000;
    }
    if ($(document).find('.carousel').length > 0) {
        $('.carousel').carousel({
            interval: interval
        });
    }
}

function setCheckClickRight() {
    var _CLICKRIGHT_STATUS = getCookie('_CLICKRIGHT_STATUS');
    if (parseInt(_CLICKRIGHT_STATUS) == 1) {
        $(document).ready(function() {
            $(document).bind('contextmenu', function(e) {
                alert(decodeURIComponent(getCookie('_CLICKRIGHT_TEXT')).replace(/\+/g, " "));
                return false;
            });
        });
    }
}

function setNocopyText() {
    var _COPYTEXT_STATUS = getCookie('_COPYTEXT_STATUS');
    if (parseInt(_COPYTEXT_STATUS) == 1 && ADMIN_CUSTOMIZE_PAGE == false) {
        $.fn.disableSelection = function() {
            return this.each(function() {
                $(this).css({
                    '-moz-user-select': '-moz-none',
                    '-moz-user-select': 'none',
                    '-o-user-select': 'none',
                    '-khtml-user-select': 'none',
                    /* you could also put this in a class */
                    '-webkit-user-select': 'none',
                    /* and add the CSS class here instead */
                    '-ms-user-select': 'none',
                    'user-select': 'none'
                }).each(function() {
                    this.onselectstart = function() {
                        return false;
                    };
                });
            });
        };
        $('body').disableSelection();
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}
// core newdesign and customize // add to cart
function productSetAddToCart_Core(product_id) {
    var subproduct_id = $('#hActiveSubproduct_' + product_id).val();
    var quantity = $('#txtActiveQuantity_' + product_id).val();
    var url = "apps/index.php?module=orders&task=AddProductToCart";
    $.ajax({
        type: 'POST',
        url: url,
        data: { 'product_id': product_id, 'subproduct_id': subproduct_id, 'quantity': quantity },
        beforeSend: function() {},
        success: function(data) {
            var resp = JSON.parse(data);
            var add_msg = '';
            if (parseInt(resp.success) == 1) {
                setShowAddToCartResult_Core(1, product_id, add_msg);
            } else {
                switch (parseInt(resp.error)) {
                    case 0:
                        setShowAddToCartResult_Core(0, product_id, add_msg);
                        break;
                    case 3:
                        add_msg = $.i18n._("product_instock") + resp.instock + $.i18n._("product_unit");
                        setShowAddToCartResult_Core(3, product_id, add_msg);
                        break;
                    case 4:
                        setShowAddToCartResult_Core(4, product_id, add_msg);
                        break;
                    case 5:
                        alert($.i18n._("product_qty_min_cennot_add_to_cart"));
                        break;
                    case 6:
                        alert($.i18n._("product_member_only_cennot_add_to_cart"));
                        break;
                    case 7:
                        alert($.i18n._("product_buy_only_one_product_cennot_add_to_cart"));
                        break;
                    default:
                        setShowAddToCartResult_Core(0, product_id, add_msg);
                        break;
                }
            }
        }
    });
}

function setShowAddToCartResult_Core(status, product_id, add_msg) {
    var product_name = $('#title_products_' + product_id).html();
    var pre_add_text = $.i18n._("product_added");
    var sub_add_text = $.i18n._("add_completed");
    switch (status) {
        case 1:
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1;
            if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || isAndroid) {
                window.location.replace("shoppingcart.html?#breadcrumb");
            }
            $('#shopping-cart-footerbar-detail').html(pre_add_text + product_name + sub_add_text);
            $('#shopping-cart-footerbar').fadeIn(1000);
            calculate_reset_number_quality();
            setTimeout(hideFooterCart_Core, 3000);
            break;
        case 3:
            alert($.i18n._("product_outofstock") + add_msg);
            break;
        case 4:
            alert($.i18n._("add_product_tocart_error") + add_msg);
            break;
    }
}

function productSetQuantity_Core(value, product_id, ui) {
    $(ui).parent().find('#txtActiveQuantity_' + product_id).each(function() {
        var val = parseInt(value) + parseInt($(this).val()); //var val = parseInt(value)+parseInt($('#txtActiveQuantity_'+product_id).val());
        if (val < 1) {
            val = 1;
        }
        $(this).val(val);
    });
}

function hideFooterCart_Core() {
    $('#shopping-cart-footerbar').fadeOut(2000);
}

function calculate_reset_number_quality() {
    if ($('.block_quality_count').length > 0) {
        var d = new Date();
        var url = "apps/index.php?module=views&task=getSessionQuality&d" + d.getTime();
        $.get(url, function(data) {
            $('.block_quality_count').html(data);
        });
    }
}

function productFacebookPageSetAddToCart(product_id, subproduct_id, quantity) {
    // var subproduct_id = $('#hActiveSubproduct_'+product_id).val();
    // var quantity = $('#txtActiveQuantity_'+product_id).val();
    var url = "apps/index.php?module=orders&task=AddProductToCart";
    $.ajax({
        type: 'POST',
        url: url,
        data: { 'product_id': product_id, 'subproduct_id': subproduct_id, 'quantity': quantity },
        beforeSend: function() {},
        success: function(data) {
            var resp = JSON.parse(data);
            var add_msg = '';
            if (parseInt(resp.success) == 1) {
                setFacebookPageShowAddToCartResult(1, product_id, add_msg);
            } else {
                switch (parseInt(resp.error)) {
                    case 0:
                        setFacebookPageShowAddToCartResult(0, product_id, add_msg);
                        break;
                    case 3:
                        add_msg = $.i18n._("product_instock") + resp.instock + $.i18n._("product_unit");
                        setFacebookPageShowAddToCartResult(3, product_id, add_msg);
                        break;
                    case 4:
                        setFacebookPageShowAddToCartResult(4, product_id, add_msg);
                        break;
                    default:
                        setFacebookPageShowAddToCartResult(0, product_id, add_msg);
                        break;
                }
            }
        }
    });
}

function setFacebookPageShowAddToCartResult(status, product_id, add_msg) {
    // var product_name = $('#list-product-'+product_id).find('.title h2,.title h4,.beauty_title h1').html();
    // var pre_add_text = $.i18n._("product_added") ; //' à¹€à¸žà¸´à¹ˆà¸¡à¸ªà¸´à¸™à¸„à¹‰à¸² ';
    // var sub_add_text = $.i18n._("add_completed") ; // ' à¹€à¸‚à¹‰à¸²à¸•à¸°à¸à¸£à¹‰à¸² à¸ªà¸³à¹€à¸£à¹‡à¸ˆ ';
    switch (status) {
        case 1:
            openNav();
            //$('div#mySidenav').find('div.block_cart').html('Add Product_ To Cart Complete');
            // $('#shopping-cart-footerbar-detail').html(pre_add_text+product_name+sub_add_text);
            // $('#shopping-cart-footerbar').fadeIn(1000);
            // setTimeout(hideFooterCart,3000);
            // var ua = navigator.userAgent.toLowerCase();
            // var isAndroid = ua.indexOf("android") > -1;
            // if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || isAndroid ){
            // 	window.location.replace("shopping_cart.html?#breadcrumb");
            // }
            // calculate_reset_number_quality();
            break;
        case 3:
            alert($.i18n._("product_outofstock") + add_msg);
            break;
        case 4:
            alert($.i18n._("add_product_tocart_error") + add_msg);
            break;
    }
}
// function hideFacebookPageFooterCart(){
// 	$('#shopping-cart-footerbar').fadeOut(2000);
// }
//
//
//
//
// members new v2 FacebookRegister
function initM2_FacebookRegister() {
    FB.login(function(response) {
        if (typeof response === 'object' && response.authResponse.userID !== null) {
            var user_id = response.authResponse.userID;
            initM2_FacebookCheckMember(user_id);
        }
    }, { scope: 'email,public_profile,user_friends' });
}
// members new v2 FacebookCheckMember
function initM2_FacebookCheckMember(user_id) {
    var d = new Date();
    var url = "apps/index.php?module=members&task=checkIsFacebookBeforeRegisterLogin&user_id=" + user_id + "&d" + d.getTime();
    $.ajax({
        url: url,
        type: "GET",
        async: true,
        cache: true,
        dataType: 'json',
        success: function(data) {
            if (data === null) {
                initM2_setFacebookRegister();
            } else {
                bootbox.dialog({
                    closeButton: false,
                    message: $.i18n._('member_facebook_is_register'),
                    title: $.i18n._('member_facebook_notification'),
                    buttons: {
                        homepage: {
                            label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-homepage",
                            callback: function() {
                                // go to home page
                                window.location.href = 'http://' + window.location.hostname;
                            }
                        },
                        login: {
                            label: $.i18n._('member_facebook_bootbox_go_to_login'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-login",
                            callback: function() {
                                // go to auto login
                                initM2_setFacebookLogin();
                            }
                        }
                    }
                });
            }
        }
    });
}
// members new v2 setFacebookRegister
function initM2_setFacebookRegister() {
    FB.api('/me', 'GET', { "fields": "id,name" }, function(response) {
        var user_id = response.id;
        if (typeof response === 'object' && user_id !== null) {
            var name = response.name;
            var d = new Date();
            var url = "apps/index.php?module=members&task=setFacebookRegister&user_id=" + user_id + "&name=" + name + "&d" + d.getTime();
            $.ajax({
                url: url,
                type: "GET",
                async: true,
                cache: true,
                success: function(data) {
                    if (data === '1') {
                        bootbox.dialog({
                            closeButton: false,
                            message: $.i18n._('member_facebook_register_complete'),
                            title: $.i18n._('member_facebook_notification'),
                            buttons: {
                                homepage: {
                                    label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                                    className: "btn btn-org btn-primary default btn-custom-color btn-go-to-homepage",
                                    callback: function() {
                                        // go to home page
                                        window.location.href = 'http://' + window.location.hostname;
                                    }
                                },
                                login: {
                                    label: $.i18n._('member_facebook_bootbox_go_to_login'),
                                    className: "btn btn-org btn-primary default btn-custom-color btn-go-to-login",
                                    callback: function() {
                                        // go to auto login
                                        initM2_setFacebookLogin();
                                    }
                                }
                            }
                        });
                    } else if (data === '101') {
                        bootbox.dialog({
                            message: $.i18n._('member_facebook_is_register'),
                            title: $.i18n._('member_facebook_notification')
                        });
                    }
                }
            });
        }
    });
}
// members new v2 setFacebookRegister
function initM2_setFacebookLogin() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            if (typeof response === 'object' && response.authResponse.userID !== null) {
                var uid = response.authResponse.userID;
                initM2_setLoadcheckIsFacebookLogin(uid);
            }
        } else if (response.status === 'not_authorized') {

        } else {
            FB.login(function(response) {
                if (typeof response === 'object' && response.authResponse.userID !== null) {
                    var user_id = response.authResponse.userID;
                    initM2_setLoadcheckIsFacebookLogin(user_id);
                }
            }, { scope: 'email,public_profile,user_friends' });
        }
    });
}

function initM2_setLoadcheckIsFacebookLogin(user_id) {
    var d = new Date();
    var url = "apps/index.php?module=members&task=checkIsFacebookLogin&user_id=" + user_id + "&d" + d.getTime();
    $.ajax({
        url: url,
        type: "GET",
        async: true,
        cache: true,
        dataType: 'json',
        success: function(data) {
            if (typeof data === 'object' && data !== null && data !== 'null') {
                bootbox.dialog({
                    closeButton: false,
                    message: $.i18n._('member_facebook_member_login_complete'),
                    title: $.i18n._('member_facebook_notification'),
                    buttons: {
                        homepage: {
                            label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-homepage",
                            callback: function() {
                                // Go to home page
                                window.location.href = 'http://' + window.location.hostname;
                            }
                        },
                        memberdata: {
                            label: $.i18n._('member_facebook_bootbox_go_to_member_data'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-member-page",
                            callback: function() {
                                // Go to member detail
                                window.location.href = data.link_profile;
                                //window.location.reload(true);
                            }
                        }
                    }
                });
            } else {
                alert('à¸„à¸¸à¸“à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸ªà¸¡à¸±à¸„à¸£à¸ªà¸¡à¸²à¸Šà¸´à¸ à¹à¸™à¸°à¸™à¸³à¹ƒà¸«à¹‰à¸ªà¸¡à¸±à¸„à¸£à¸ªà¸¡à¸²à¸Šà¸´à¸à¸ªà¸³à¸«à¸£à¸±à¸šà¸ªà¸±à¹ˆà¸‡à¸Šà¸·à¹‰à¸­à¸ªà¸´à¸™à¸„à¹‰à¸²');
            }
        }
    });
}

function initM2_setFacebookLoginConfirmPayment() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            if (typeof response === 'object' && response.authResponse.userID !== null) {
                var uid = response.authResponse.userID;
                initM2_setLoadcheckIsFacebookLoginConfirmPayment(uid);
            }
        } else if (response.status === 'not_authorized') {

        } else {
            FB.login(function(response) {
                if (typeof response === 'object' && response.authResponse.userID !== null) {
                    var user_id = response.authResponse.userID;
                    initM2_setLoadcheckIsFacebookLoginConfirmPayment(user_id);
                }
            }, { scope: 'email,public_profile,user_friends' });
        }
    });
}

function initM2_setLoadcheckIsFacebookLoginConfirmPayment(user_id) {
    var d = new Date();
    var url = "apps/index.php?module=members&task=checkIsFacebookLogin&user_id=" + user_id + "&d" + d.getTime();
    $.ajax({
        url: url,
        type: "GET",
        async: true,
        cache: true,
        dataType: 'json',
        success: function(data) {
            if (typeof data === 'object' && data !== null && data !== 'null') {
                window.location.reload(true);
            } else {
                alert('à¸„à¸¸à¸“à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸ªà¸¡à¸±à¸„à¸£à¸ªà¸¡à¸²à¸Šà¸´à¸ à¹à¸™à¸°à¸™à¸³à¹ƒà¸«à¹‰à¸ªà¸¡à¸±à¸„à¸£à¸ªà¸¡à¸²à¸Šà¸´à¸à¸ªà¸³à¸«à¸£à¸±à¸šà¸ªà¸±à¹ˆà¸‡à¸Šà¸·à¹‰à¸­à¸ªà¸´à¸™à¸„à¹‰à¸²');
            }
        }
    });
}

function initM2_setLoadcheckIsMemberLoginConfirmPayment(event) {
    var url = "apps/index.php?module=members&task=findWidgetMemberLogin";
    $.ajax({
        type: 'POST',
        url: url,
        data: $(event).serialize(),
        beforeSend: function() {
            if ($(event).find('input[type="email"]').val() == '' || $(event).find('input[type="password"]').val() == '') {
                alert('Please put username and password');
                return false;
            }
        },
        success: function(data) {
            msg = JSON.parse(data);
            switch (msg.response_status) {
                case 0:
                    alert(msg.response_text + 'Email or Password not match');
                    return false;
                    break;
                case 1:
                    window.location.reload(true);
                    return false;
                    break;
                case 99:
                    alert(data.response_text);
                    return false;
                    break;
            }
        }
    });
}

function initM2_setMemberLogout() {
    var d = new Date();
    var url = "apps/index.php?module=members&task=findMemberLogout&d" + d.getTime();
    $.get(url, function() {
        window.location.reload(true);
    });
}

function initM2_NormalRegister() {
    var url = "apps/index.php?module=members&task=setMemberNormalRegister";
    $.ajax({
        type: 'POST',
        url: url,
        data: $('#frmmembersregister').serialize(),
        beforeSend: function() {
            $("#frmmembersregister").validate();
            if ($("#frmmembersregister").valid()) {
                return $("#frmmembersregister").valid();
            } else {
                $('label.error:first').focus();
                return $("#frmmembersregister").valid();
            }
        },
        success: function(data) {
            data = JSON.parse(data);
            if (data['result'] == '1') {
                bootbox.dialog({
                    closeButton: false,
                    message: $.i18n._('member_register_complete'),
                    title: $.i18n._('member_facebook_notification'),
                    buttons: {
                        homepage: {
                            label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-homepage",
                            callback: function() {
                                // Go to home page
                                window.location.href = 'http://' + window.location.hostname;
                            }
                        },
                        memberdata: {
                            label: $.i18n._('member_facebook_bootbox_go_to_login'),
                            className: "btn btn-org btn-primary default btn-custom-color btn-go-to-member-page",
                            callback: function() {
                                // Go to member detail
                                window.location.href = data.link;
                            }
                        }
                    }
                });
                // bootbox.dialog({
                //   message: $.i18n._('member_register_complete'),
                //   title: $.i18n._('member_notification'),
                //   buttons:{
                //     main:{
                //       label: $.i18n._('member_btn_off_bootbox'),
                //       className:"btn",
                //       callback:function(){
                //         window.location.href = data.link;
                //       }
                //     }
                //   }
                // });
            } else if (data['result'] == '2') {
                bootbox.dialog({
                    message: $.i18n._('member_register_complete_case2'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                            callback: function() {
                                window.location.href = data.link;
                            }
                        }
                    }
                });
            } else if (data['result'] == '3') {
                bootbox.dialog({
                    message: $.i18n._('member_register_complete_case3'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                            callback: function() {
                                window.location.href = data.link;
                            }
                        }
                    }
                });
            } else if (data['result'] == '405') {
                bootbox.dialog({
                    message: $.i18n._('member_email_not_empty_user'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                        }
                    }
                });
            } else if (data['result'] == '406') {
                bootbox.dialog({
                    message: $.i18n._('member_password_not_match'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                        }
                    }
                });
            } else if (data['result'] == '407') {
                bootbox.dialog({
                    message: $.i18n._('member_captcha_worng'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                        }
                    }
                });
            } else {
                bootbox.dialog({
                    message: $.i18n._('member_register_not_complete'),
                    title: $.i18n._('member_notification'),
                    buttons: {
                        main: {
                            label: $.i18n._('member_btn_off_bootbox'),
                            className: "btn",
                        }
                    }
                });
            }
        }
    });
}

function initM2_NormalLogin() {
    var d = new Date();
    var url = "apps/index.php?module=members&task=findWidgetMemberLoginFacebook&d" + d.getTime();
    $.ajax({
        type: 'POST',
        url: url,
        data: $('#frmDataM2Normal').serialize(),
        beforeSend: function() {
            $("#frmDataM2Normal").validate();
            if ($("#frmDataM2Normal").valid()) {
                return $("#frmDataM2Normal").valid();
            } else {
                $('label.error:first').focus();
                return $("#frmDataM2Normal").valid();
            }
        },
        success: function(data) {
            data = JSON.parse(data);
            switch (data.response_status) {
                case 1:
                    bootbox.dialog({
                        closeButton: false,
                        message: $.i18n._('member_facebook_member_login_complete'),
                        title: $.i18n._('member_facebook_notification'),
                        buttons: {
                            homepage: {
                                label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                                className: "btn btn-org btn-primary default btn-custom-color btn-go-to-homepage",
                                callback: function() {
                                    // Go to home page
                                    window.location.href = 'http://' + window.location.hostname;
                                }
                            },
                            memberdata: {
                                label: $.i18n._('member_facebook_bootbox_go_to_member_data'),
                                className: "btn btn-org btn-primary default btn-custom-color btn-go-to-member-page",
                                callback: function() {
                                    // Go to member detail
                                    window.location.href = data.link;
                                }
                            }
                        }
                    });
                    break;
                default:
                    bootbox.dialog({
                        message: $.i18n._('member_facebook_member_login_not_facebook_no_complete'),
                        title: $.i18n._('member_facebook_notification'),
                        buttons: {
                            login: {
                                label: $.i18n._('member_facebook_bootbox_close'),
                                className: "btn btn-org btn-primary default btn-custom-color"
                            }
                        }
                    });
                    break;
            }
        }
    });
}

function initM2_ForgetPassword() {
    var html = '<br /><br /><input name="ForgetInputEmail" id="ForgetInputEmail" placeholder="youremail@domain.com" class="form-control required email" type="text" />';
    bootbox.dialog({
        closeButton: false,
        message: $.i18n._('member_facebook_forget_password') + html,
        title: $.i18n._('member_facebook_notification'),
        buttons: {
            forgetpassword: {
                label: $.i18n._('member_facebook_bootbox_send_require_forget'),
                className: "btn btn-primary default btn-custom-color btn-go-to-forget-password",
                callback: function() {
                    var d = new Date();
                    var url = "apps/index.php?module=members&task=findMemberForgetPassword&d" + d.getTime();
                    $.ajax({
                        type: 'POST',
                        url: url,
                        data: "email=" + $('input#ForgetInputEmail').val(),
                        beforeSend: function() {

                        },
                        success: function(data) {
                            data = JSON.parse(data);
                            switch (data.result) {
                                case 1:
                                    bootbox.dialog({
                                        closeButton: false,
                                        message: $.i18n._('member_facebook_forget_password_complate'),
                                        title: $.i18n._('member_facebook_notification'),
                                        buttons: {
                                            homepage: {
                                                label: $.i18n._('member_facebook_bootbox_close'),
                                                className: "btn btn-org btn-primary default btn-custom-color btn-go-to-close"
                                            }
                                        }
                                    });
                                    break;
                                default:
                                    bootbox.dialog({
                                        message: $.i18n._('member_facebook_contact_connot_send_mail_no_complete'),
                                        title: $.i18n._('member_facebook_notification')
                                    });
                                    break;
                            }
                        }
                    });
                }
            },
            close: {
                label: $.i18n._('member_facebook_bootbox_close'),
                className: "btn btn-org btn-primary default btn-custom-color btn-go-to-close",
                callback: function() {

                }
            }
        }
    });
}

function initM2_UpdateFacebookMemberData() {
    var d = new Date();
    var url = "apps/index.php?module=members&task=setUpdateMemberFacebookDetail&d" + d.getTime();
    $.ajax({
        type: 'POST',
        url: url,
        data: $('#frmData').serialize(),
        beforeSend: function() {
            $("#frmData").validate();
            if ($("#frmData").valid()) {
                return $("#frmData").valid();
            } else {
                $('label.error:first').focus();
                return $("#frmData").valid();
            }
        },
        success: function(data) {
            switch (data) {
                case '1':
                    window.location.reload(true);
                    // bootbox.dialog({
                    // 	message: $.i18n._('member_facebook_update_data_member_complete'),
                    // 	title: $.i18n._('member_facebook_notification'),
                    // 	buttons: {
                    // 		homepage: {
                    // 			label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                    // 			className: "btn btn-primary default btn-custom-color btn-go-to-homepage",
                    // 			callback: function() {
                    // 			  	//reloadSignBar();
                    // 			  	//getFacebookDataHomepage();
                    // 			}
                    // 		}
                    // 	}
                    // });
                    break;
                default:
                    bootbox.dialog({
                        message: $.i18n._('member_facebook_update_data_member_not_complete'),
                        title: $.i18n._('member_facebook_notification')
                    });
                    break;
            }
        }
    });
}

function initM2_UpdateMemberData() {
    var d = new Date();
    var url = "apps/index.php?module=members&task=setUpdateMemberDetail&d" + d.getTime();
    $.ajax({
        type: 'POST',
        url: url,
        data: $('#frmData').serialize(),
        beforeSend: function() {
            $("#frmData").validate();
            if ($("#frmData").valid()) {
                return $("#frmData").valid();
            } else {
                $('label.error:first').focus();
                return $("#frmData").valid();
            }
        },
        success: function(data) {
            switch (data) {
                case '1':
                    window.location.reload(true);
                    // bootbox.dialog({
                    // 	message: $.i18n._('member_facebook_update_data_member_complete'),
                    // 	title: $.i18n._('member_facebook_notification'),
                    // 	buttons: {
                    // 		success: {
                    // 		  	label: $.i18n._('member_facebook_bootbox_go_to_homepage'),
                    // 		  	className: "btn btn-primary btn-custom-color btn-go-to-homepage",
                    // 		  	callback: function() {

                    // 		  	}
                    // 		},
                    // 		danger: {
                    // 		  	label: $.i18n._('member_facebook_bootbox_close'),
                    // 		  	className: "btn btn-default btn-custom-color btn-go-to-close"
                    // 		}
                    // 	}
                    // });
                    break;
                default:
                    bootbox.dialog({
                        message: $.i18n._('member_facebook_update_data_member_not_complete'),
                        title: $.i18n._('member_facebook_notification')
                    });
                    break;
            }
        }
    });
}

function initM2_UpdateMemberData_New() {
    var d = new Date();
    var url = "apps/index.php?module=members&task=setUpdateMemberDetail_new&d" + d.getTime();
    $.ajax({
        type: 'POST',
        url: url,
        data: $('#frmData').serialize(),
        beforeSend: function() {
            $("#frmData").validate();
            if ($("#frmData").valid()) {
                return $("#frmData").valid();
            } else {
                $('label.error:first').focus();
                return $("#frmData").valid();
            }
        },
        success: function(data) {
            switch (data) {
                case '1':
                    window.location.reload(true);
                    break;
                default:
                    bootbox.dialog({
                        message: $.i18n._('member_facebook_update_data_member_not_complete'),
                        title: $.i18n._('member_facebook_notification')
                    });
                    break;
            }
        }
    });
}

function initM2_goToMemberDetail() {

}

function initM2_goTo() {

}

function setQuickOmisePayment(product_id) {
    // var subproduct_id = $('#hActiveSubproduct_'+product_id).val();
    // var quantity = $('#txtActiveQuantity_'+product_id).val();
    // var d = new Date();
    // var url = "apps/index.php?module=orders&task=AddProductToCart";
    // $.ajax({
    // 	type: 'POST',
    // 	url: url,
    // 	data:{'product_id':product_id,'subproduct_id':subproduct_id,'quantity':quantity},
    // 	beforeSend: function() {},
    // 	success: function(data1){
    // 		var data1 = JSON.parse(data1);
    // 		var add_msg = '';
    // 		if(parseInt(data1.success)==1){
    var d = new Date();
    var url = "apps/index.php?module=orders&task=getInitOrder&d" + d.getTime();
    $.getJSON(url, function(data2) {
        var html = '';
        html += '<div class="col-md-12 blockquickproductpayment">';
        if (typeof data2.show_order === 'object') {
            html += '<div class="content"><div class="table table-condensed table-striped table-responsive m-b-0">';
            html += '<table class="table m-b-0" style="background-color: transparent;"><thead><tr><th class="cart-thumbnail">à¸£à¸²à¸¢à¸à¸²à¸£à¸ªà¸´à¸™à¸„à¹‰à¸²</th><th class="cart-quantity">à¸ˆà¸³à¸™à¸§à¸™</th><th class="cart-subtotal">à¸£à¸§à¸¡</th><th class="cart-remove"></th></tr></thead><tbody>';
            $.each(data2.show_order, function(k, v) {
                html += '<tr class="cart-product-detail">';
                html += '<td class="cart-thumbnail" style="text-align:left;"><div class="cart-thumbnail-name">' + v.title + '</div></td>';
                html += '<td class="cart-quantity" style="vertical-align: middle;">';
                html += '<div class="quantity">';
                html += '<input type="button" style="margin: 0 4px;" class="minus" value="-" onclick="updateQuantityOnQuickPayment(' + v.product_id + ',\'remove\',' + v.subproduct_id + ');">';
                html += '<input onchange="updateQuantityOnblurQuickPayment(' + v.product_id + ',this.value,' + v.subproduct_id + ');" type="" id="productItem_' + v.product_id + '" class="qty" value="' + v.quantity + '" name="quantity">';
                html += '<input type="button" style="margin: 0 4px;" class="plus" value="+" onclick="updateQuantityOnQuickPayment(' + v.product_id + ',\'add\',' + v.subproduct_id + ');">';
                html += '</div>';
                html += '</td>';
                html += '<td class="cart-subtotal" style="vertical-align: middle;">';
                html += '<span class="amount">' + numberWithCommas(v.sum_sub_price.toFixed(2)) + '</span></td>';
                html += '<td class="cart-remove" style="vertical-align: middle;"><button class="btn btn-default" onclick="setDeleteItemInOrderQuickPayment(' + v.subproduct_id + ');"><i class="fa fa-trash"></i></button></td>';
                html += '</tr>';
            });
            html += '</tbody></table></div></div>';
        }
        html += '</div>';
        html += '<br />';
        if (typeof data2.member === 'object' && data2.member.member_status == 1) {
            html += '<div class="col-md-12">';
            html += '<input name="name" id="name" placeholder="Your Name" class="form-control required" type="text" value="' + data2.member.name + '" />';
            html += '<br />';
            html += '<input name="email" id="email" placeholder="youremail@domain.com" class="form-control required email" type="text" value="' + data2.member.email + '" />';
            html += '</div>';
        } else {
            html += '<div class="col-md-12">';
            html += '<input name="name" id="name" placeholder="Your Name" class="form-control required" type="text" />';
            html += '<br />';
            html += '<input name="email" id="email" placeholder="youremail@domain.com" class="form-control required email" type="text" />';
            // html += '<br />';
            // html += 'à¸«à¸£à¸·à¸­';
            // html += '<br />';
            // html += '<a href="http://services.shopup2.com/facebook_login_z/login/getFacebookAuthQuickRegister/'+data2._DOMAIN_ENCRYPT+'">'
            // html += '<button class="button facebook" type="button" style="color: #fff;padding: 8px 24px;font-size: 20px;border-color: #4267b2;background: #4267b2;"><i class="fa fa-facebook"></i> à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¸”à¹‰à¸§à¸¢ Facebook</span></button>';
            // html += '</a>';
            html += '</div>';
        }
        html += '<div class="col-md-12"><br />';
        html += 'Shipper :';
        $.each(data2.shipper, function(k, v) {
            html += '<label class="radio-inline">';
            html += '<input type="radio" name="shipper" id="shipper_' + k + '" value="' + k + '" checked="checked">&nbsp;' + v.shipper_name;
            html += '</label>';
        });
        html += '</div>';
        html += '<div style="clear:both;"></div>';
        bootbox.dialog({
            message: html,
            title: $.i18n._('member_facebook_notification'),
            buttons: {
                close: {
                    label: $.i18n._('member_facebook_bootbox_close'),
                    className: "btn btn-org btn-primary default btn-custom-color btn-go-to-close"
                },
                confirm: {
                    label: $.i18n._('à¸ªà¸±à¹ˆà¸‡à¸Šà¸·à¹‰à¸­à¸ªà¸´à¸™à¸„à¹‰à¸²'),
                    className: "btn btn-org btn-primary default",
                    callback: function() {
                        var d = new Date();
                        var shipper = $("input[type='radio'][name='shipper']:checked").val();
                        var url = "apps/index.php?module=orders&task=setUpdateQuick_FinalTempOrder_Step&shipper=" + shipper;
                        $.getJSON(url, function(resp) {
                            if (resp.success == 1) {
                                var url = "apps/index.php?module=orders&task=setQuickConfirmOrder&temp_order_id=" + resp.temp_order_id;
                                $.ajax({
                                    type: 'POST',
                                    url: url,
                                    enctype: 'multipart/form-data',
                                    data: "name=" + $('input#name').val() + "&email=" + $('input#email').val(),
                                    beforeSend: function() {},
                                    success: function(data3) {
                                        var data3 = $.parseJSON(data3);
                                        window.location.href = data3.url;
                                    }
                                });
                            }
                        });
                    }
                }
            }
        });
    });
    // 		}else{

    // 		}
    // 	}
    // });
}

function reloadProductInQuickPayment() {
    var d = new Date();
    var url = "apps/index.php?module=orders&task=getInitOrder&d" + d.getTime();
    $.getJSON(url, function(data2) {
        var html = '';
        // html += '<div class="col-md-12">';
        if (typeof data2.show_order === 'object') {
            html += '<div class="content"><div class="table table-condensed table-striped table-responsive m-b-0">';
            html += '<table class="table m-b-0" style="background-color: transparent;"><thead><tr><th class="cart-thumbnail">à¸£à¸²à¸¢à¸à¸²à¸£à¸ªà¸´à¸™à¸„à¹‰à¸²</th><th class="cart-quantity">à¸ˆà¸³à¸™à¸§à¸™</th><th class="cart-subtotal">à¸£à¸§à¸¡</th><th class="cart-remove"></th></tr></thead><tbody>';
            $.each(data2.show_order, function(k, v) {
                html += '<tr class="cart-product-detail">';
                html += '<td class="cart-thumbnail" style="text-align:left;"><div class="cart-thumbnail-name">' + v.title + '</div></td>';
                html += '<td class="cart-quantity" style="vertical-align: middle;">';
                html += '<div class="quantity">';
                html += '<input type="button" style="margin: 0 4px;" class="minus" value="-" onclick="updateQuantityOnQuickPayment(' + v.product_id + ',\'remove\',' + v.subproduct_id + ');">';
                html += '<input onchange="updateQuantityOnblurQuickPayment(' + v.product_id + ',this.value,' + v.subproduct_id + ');" type="" id="productItem_' + v.product_id + '" class="qty" value="' + v.quantity + '" name="quantity">';
                html += '<input type="button" style="margin: 0 4px;" class="plus" value="+" onclick="updateQuantityOnQuickPayment(' + v.product_id + ',\'add\',' + v.subproduct_id + ');">';
                html += '</div>';
                html += '</td>';
                html += '<td class="cart-subtotal" style="vertical-align: middle;">';
                html += '<span class="amount">' + numberWithCommas(v.sum_sub_price.toFixed(2)) + '</span></td>';
                html += '<td class="cart-remove" style="vertical-align: middle;"><button class="btn btn-default" onclick="setDeleteItemInOrderQuickPayment(' + v.subproduct_id + ');"><i class="fa fa-trash"></i></button></td>';
                html += '</tr>';
            });
            html += '</tbody></table></div></div>';
        }
        // html += '</div>';
        $('div.blockquickproductpayment').html(html);
    });
}
// function createOrderCustomer () {
// 	var d = new Date();
// 	var url = "apps/index.php?module=orders&task=setQuickConfirmOrder";
// 	$.ajax({
// 		type: 'POST',
// 		url: url,
// 		data:{'product_id':product_id,'subproduct_id':subproduct_id,'quantity':quantity},
// 		beforeSend: function() {},
// 		success: function(data){
// 			var resp = JSON.parse(data);
// 			var add_msg = '';
// 			if(parseInt(resp.success)==1){

// 				// setShowAddToCartResult_Core(1,product_id,add_msg);
// 			}else{

// 			}
// 		}
// 	});
// }
function product_history_delete_cookie() {
    document.cookie = 'products_history=;-1; path=/';
    $('div.item-product-history').html('<p style="text-align:center;font-size:30px;">' + $.i18n._('product_history_no_item') + '</p>');
}

function thailandpost_track(el) {
    var uuid = $(el).data('uuid');
    var track = $(el).data('track');
    var d = new Date();
    var url = "apps/index.php?module=members&task=checkThaipostTrack&uuid=" + uuid + "&track=" + track + "&d" + d.getTime();
    $.getJSON(url, function(data) {
        console.log(data);
        if (data.message == 'successful') {
            var html = '';
            if (typeof data.response.items[track] === 'object') {
                $.each(data.response.items[track], function(k, v) {
                    html += '<div class="row" style="border-bottom:1px solid #757575;padding:5px 0;">';

                    html += '<div class="col-md-4">';
                    html += v.status_date;
                    html += '</div>';

                    html += '<div class="col-md-4">';
                    html += v.location;
                    html += '</div>';

                    html += '<div class="col-md-4">';
                    html += v.status_description;
                    html += '</div>';

                    html += '</div>';
                });
                console.log(html);
                if (html == '') {
                    html = 'Tracking code not found';
                }
            } else {
                html = 'Tracking code not found';
            }
            bootbox.dialog({
                message: html,
                title: $.i18n._('member_facebook_notification'),
            });
        }
    });
}