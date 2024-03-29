function custome_addcart(e, t, o) {
  data = {
    quantity: o,
    id: t,
  };
  var a = $(e).html();
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    dataType: 'json',
    data: data,
    beforeSend: function() {
      $(e).attr('disabled', !0),
        $(e).html(
          '<span id="r_AddToCartText">Adding...<img src="https://cdn.shopify.com/s/files/1/3096/8844/t/65/assets/ajax-loader.gif" class="addcartloader"></span>'
        );
    },
    success: function(t) {
      $(e).removeAttr('disabled'),
        setTimeout(function() {
          $('.custome_close_r').trigger('click');
        }, 1500),
        $(e).html(a),
        where_to_go(),
        jQuery.getJSON('/cart.js', function(e, t) {
          var o = e.item_count;
          $('#related_cart_sucsses_msg').html(
            '<div class="alert alert-success alert-dismissable fade in"><a href="#" class="close custome_close_r" data-dismiss="alert" aria-label="close">&times;</a>Total ' +
              o +
              ' Items in cart.</div>'
          ),
            jQuery('#CartCount').text(o),
            $('#CartCost').html(
              theme.Currency.formatMoney(e.total_price, theme.moneyFormat)
            ),
            currency_dropdown && convertCurrencies();
        });
    },
  });
}
function related_poup() {
  1 == $('#check_collection_emty').val()
    ? ($('#related_popup_upsell').modal('show'),
      $('#comment_child_like').html(
        '<img src="https://cdn.shopify.com/s/files/1/3096/8844/t/65/assets/ajax-loader.gif" class="loder_black"  >'
      ),
      $('#comment_child_like').load(
        location.href + ' #comment_parent_like',
        function() {}
      ),
      setTimeout(function() {
        $('body').addClass('modal-open');
      }, 1500),
      setTimeout(function() {
        currency_dropdown && convertCurrencies();
      }, 2500))
    : where_to_go();
}
function where_to_go() {
  thankmsg
    ? setTimeout(function() {
        $('.close').trigger('click');
      }, 1500)
    : drchkout
    ? $('.custome_checkout').trigger('click')
    : (window.location.href = '/cart');
}
if (
  ($(document).on('hide.bs.modal', '#related_popup_upsell', function() {
    where_to_go();
  }),
  eblstcky)
) {
  $('#mst-stiky-box').addClass('fix-search'),
    $('.stiky_button').on('click', function() {
      $('#AddToCartForm')
        .find('button[type="submit"]')
        .trigger('click');
    });
  var myFuncsticky = function() {
    document.body.clientWidth <= 749 &&
      $(document).scroll(function() {
        $(this).scrollTop() >
        $('#mst-stiky-box')
          .parents('.template-product')
          .find('#shopify-section-footer')
          .offset().top -
          400
          ? ($('.mst-stiky-div').fadeOut('fast'),
            $('#mst-stiky-box')
              .removeClass('fix-search')
              .hide(),
            ebl_pay_but && $('.shopify-payment-button').fadeOut('fast'))
          : ($('.mst-stiky-div').fadeIn('fast'),
            $('#mst-stiky-box')
              .addClass('fix-search')
              .show(),
            ebl_pay_but && $('.shopify-payment-button').fadeIn('fast'));
      });
  };
  myFuncsticky(), jQuery(window).bind('resize orientationchange', myFuncsticky);
}
if (
  (livestock
    ? setTimeout(function() {
        var e = $('.timer_time').val() - 4,
          t = $('#stock_left_num').val(),
          o = e / t,
          a = 1e3 * o,
          n = 0;
        setTimeout(function e() {
          var t = Number($('#counter_left').text());
          t > n
            ? ($('#counter_left').text(t), setTimeout(e, a))
            : $('#counter_left').text(0);
        }, a),
          $('.progress-striped').each(function() {
            !(function e(a, n, r) {
              r.width();
              var i = 2.7 * t;
              r
                .find('div')
                .animate(
                  {
                    width: i,
                  },
                  0
                )
                .html(a),
                a > o &&
                  setTimeout(function() {
                    e(a - o, n, r);
                  }, n);
            })(e, e, $(this)),
              $(this).removeClass('progress-bar-success');
          });
      }, 2e3)
    : (setTimeout(function() {
        var e = $('.timer_time').val() - 4,
          t = $('#stock_left_num').val(),
          o = ($('#stock_final_num').val(), e / t),
          a = 1e3 * o,
          n = 1;
        setTimeout(function e() {
          var t = Number($('#counter_left').text());
          t > n &&
            ($('#counter_left').text(--t),
            progress_bar_random && stk_lft(),
            setTimeout(e, a));
        }, a),
          $('.progress-striped').each(function() {
            !(function e(t, n, r) {
              var i = (t * r.width()) / n;
              r
                .find('div')
                .animate(
                  {
                    width: i,
                  },
                  100
                )
                .html(t),
                t > o &&
                  setTimeout(function() {
                    e(t - o, n, r);
                  }, a);
            })(e, e, $(this)),
              $(this).removeClass('progress-bar-success');
          });
      }, 2e3),
      setTimeout(function() {
        var e = $('.timer_time').val() - 4,
          t = $('#stock_left_num1').val(),
          o = ($('#stock_final_num1').val(), e / t),
          a = 1e3 * o,
          n = 1;
        setTimeout(function e() {
          var t = Number($('#counter_left1').text());
          t > n
            ? ($('#counter_left1').text(--t),
              progress_bar_random && mob_stk_lft(),
              setTimeout(e, a))
            : $('#counter_left1').text(0);
        }, a),
          $('.progress-striped').each(function() {
            !(function e(t, n, r) {
              var i = (t * r.width()) / n;
              r
                .find('div')
                .animate(
                  {
                    width: i,
                  },
                  100
                )
                .html(t),
                t > o &&
                  setTimeout(function() {
                    e(t - o, n, r);
                  }, a);
            })(e, e, $(this)),
              $(this).removeClass('progress-bar-success');
          });
      }, 2e3)),
  enable_defaul_variant)
) {
  function pickasize() {
    if ('undefined' != typeof productOptions)
      for (i = 0; i < productOptions.length; i++)
        $('.single-option-selector:eq(' + i + ')')
          .filter(function() {
            return $(this).find('option').length > 0;
          })
          .prepend(
            '<option value="">' +
              picka_text +
              '&nbsp;' +
              productOptions[i][i] +
              '</option>'
          )
          .val('')
          .trigger('change');
  }
  $(document).ready(function() {
    pickasize();
  }),
    $(document).on('shopify:section:select', function(e) {
      pickasize();
    }),
    $(document).on('shopify:section:deselect', function(e) {
      pickasize();
    });
}
if (read_mor) {
  function readmore() {
    $(function() {
      $('.product-description').readmore({
        collapsedHeight: 153,
        heightMargin: 16,
        moreLink:
          '<a href="javascript:void(0)" class="more_load read--btn">' +
          read_more +
          '</a>',
        lessLink:
          '<a href="javascript:void(0)" class="more_load read--less-btn">' +
          read_less +
          '</a>',
      });
    });
  }
  $(document).ready(function(e) {
    setTimeout(function() {
      readmore();
    }, 1e3);
  }),
    $(document).on('shopify:section:select', function(e) {
      readmore();
    }),
    $(document).on('shopify:section:deselect', function(e) {
      readmore();
    });
}
function swatch() {
  jQuery('.swatch :radio').change(function() {
    var e = jQuery(this)
        .closest('.swatch')
        .attr('data-option-index'),
      t = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(e)
      .val(t)
      .trigger('change');
  });
}
(Shopify.AjaxifyCart = (function($) {
  var _config = {
      addToCartBtnLabel: addToCartBtnLabel_1,
      addedToCartBtnLabel: addedToCartBtnLabe_1,
      addingToCartBtnLabel: addingToCartBtnLabel_1,
      soldOutBtnLabel: soldOutBtnLabel_1,
      howLongTillBtnReturnsToNormal: 700,
      cartCountSelector:
        '.cart-count, #CartCount span, #gocart p a, #cart .checkout em, .item-count',
      cartTotalSelector: '#cart-price, #CartCost',
      itemsManage: '.items_manage',
      feedbackPosition: 'nextButton',
      addToCartBtnSelector: '[type="submit"]',
      addToCartFormSelector: 'form[action*="/cart/add"]',
      shopifyAjaxAddURL: '/cart/add.js',
      shopifyAjaxCartURL: '/cart.js',
    },
    _showFeedback = function(t, e, o) {
      $('.ajaxified-cart-feedback').remove();
      var a = '<p class="ajaxified-cart-feedback ' + t + '">' + e + '</p>';
      switch (_config.feedbackPosition) {
        case 'aboveForm':
          o.before(a);
          break;
        case 'belowForm':
          o.after(a);
          break;
        case 'nextButton':
        default:
          o.find(_config.addToCartBtnSelector).after(a),
            $('.stiky_button').after(a);
      }
      $('.ajaxified-cart-feedback')
        .fadeIn('fast')
        .delay(4e3)
        .fadeOut('slow');
    },
    _setText = function(t, e) {
      t.children().length
        ? t.children().each(function() {
            '' !== $.trim($(this).text()) && $(this).text(e);
          })
        : t.val(e).text(e);
    },
    _init = function() {
      $(document).ready(function() {
        var data = continue_shopping;
        var arr = data.split('|t');
        var sap = ' ' + arr[0] + ' ';
        if (data.indexOf('|t') != -1) {
          continue_shopping = arr[1];
        } else {
          sap = ' ';
        }
        $(_config.addToCartFormSelector).submit(function(e) {
          e.preventDefault();
          var $addToCartForm = $(this),
            $addToCartBtn = $addToCartForm.find(_config.addToCartBtnSelector),
            $addToCartBtn_stck = $('.stiky_button');
          _setText($addToCartBtn, _config.addingToCartBtnLabel),
            $addToCartBtn.addClass('disabled').prop('disabled', !0);
          var success_callback = function(t) {
              void 0 !== window.BOLD &&
                void 0 !== window.BOLD.common &&
                void 0 !== window.BOLD.common.cartDoctor &&
                (t = window.BOLD.common.cartDoctor.fixItem(t)),
                $('#Quantity').val('1'),
                setTimeout(function() {
                  $('.one-time').slick({
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: !0,
                    prevArrow: '.thumbnails-slider__prev',
                    nextArrow: '.thumbnails-slider__next',
                  });
                }, 2500),
                $('.close').on('click', function() {
                  buyitnowaction && (window.location.href = '/cart');
                }),
                relatedupsellenable && custome_addcart(),
                relatedupsellmodal && related_poup(),
                $addToCartBtn.addClass('inverted'),
                _setText($addToCartBtn, _config.addedToCartBtnLabel),
                _showFeedback(
                  'success',
                  '<i class="fa fa-check"></i>' +
                    added_to_cart +
                    ' <a href="/cart">' +
                    view_cart +
                    '</a>' +
                    sap +
                    '<a href="/collections/all">' +
                    continue_shopping +
                    '</a>.',
                  $addToCartForm
                ),
                window.setTimeout(function() {
                  $addToCartBtn
                    .prop('disabled', !1)
                    .removeClass('disabled')
                    .removeClass('inverted'),
                    _setText($addToCartBtn, _config.addToCartBtnLabel);
                }, _config.howLongTillBtnReturnsToNormal),
                $.getJSON(_config.shopifyAjaxCartURL, function(t) {
                  if (
                    _config.cartCountSelector &&
                    $(_config.cartCountSelector).size()
                  ) {
                    var e = $(_config.cartCountSelector).html() || '0';
                    $(_config.cartCountSelector)
                      .html(e.replace(/[0-9]+/, t.item_count))
                      .removeClass('hidden-count'),
                      t.item_count <= 1
                        ? $('.items_manage').html(items_count_one)
                        : $('.items_manage').html(items_count_other);
                  }
                  _config.cartTotalSelector &&
                    $(_config.cartTotalSelector).size() &&
                    ('undefined' != typeof Currency && Currency.moneyFormats,
                    $(_config.cartTotalSelector).html(
                      theme.Currency.formatMoney(
                        t.total_price,
                        theme.moneyFormat
                      )
                    ),
                    currency_dropdown && convertCurrencies());
                });
            },
            error_callback = function(XMLHttpRequest) {
              var response = eval('(' + XMLHttpRequest.responseText + ')');
              (response = response.description),
                'All ' === response.slice(0, 4)
                  ? (_showFeedback(
                      'error',
                      response.replace('All 1 ', 'All '),
                      $addToCartForm
                    ),
                    $addToCartBtn.prop('disabled', !1),
                    $addToCartBtn_stck.prop('disabled', !1),
                    _setText($addToCartBtn, _config.soldOutBtnLabel),
                    _setText($addToCartBtn_stck, _config.soldOutBtnLabel),
                    $addToCartBtn.prop('disabled', !0),
                    $addToCartBtn_stck.prop('disabled', !0))
                  : (_showFeedback(
                      'error',
                      '<i class="fas fa-warning"></i>' + response,
                      $addToCartForm
                    ),
                    $addToCartBtn.prop('disabled', !1).removeClass('disabled'),
                    _setText($addToCartBtn, _config.addToCartBtnLabel));
            };
          return (
            'object' == typeof BOLD &&
            BOLD.helpers &&
            'function' == typeof BOLD.helpers.addItemFromForm
              ? BOLD.helpers.addItemFromForm(
                  $addToCartForm,
                  success_callback,
                  error_callback,
                  {
                    endpoint: '/cart/add.js',
                  }
                )
              : $.ajax({
                  url: _config.shopifyAjaxAddURL,
                  dataType: 'json',
                  type: 'post',
                  data: $addToCartForm.serialize(),
                  success: success_callback,
                  error: error_callback,
                }),
            !1
          );
        });
      });
    };
  return {
    init: function(t) {
      (t = t || {}),
        $.extend(_config, t),
        $(function() {
          _init();
        });
    },
    getConfig: function() {
      return _config;
    },
  };
})(jQuery)),
  Shopify.AjaxifyCart.init({
    moneyFormat: '${{amount}}',
  }),
  visitorcountr &&
    jQuery(function(e) {
      var t = e('#min_max_number').val();
      min_max1 = t.split('-');
      var o = parseInt(min_max1[0]),
        a = parseInt(min_max1[1]);
      (min = Math.ceil(o)),
        (max = Math.floor(a)),
        setInterval(function() {
          var e = Math.floor(Math.random() * (max - min + 1) + min);
          if (e >= o && e <= a) {
            for (var t = ('' + e).split(''), n = '', r = 0; r < t.length; r++)
              n += '<span>' + t[r] + '</span>';
            $('.fake_counter_b').each(function() {
              $(this)
                .find('#dynamic_counter1')
                .html(n);
            });
          }
        }, 5e3);
    });
var instagram = {
  loadContent: function(e) {
    if (e.clientID) {
      var t =
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
        e.clientID;
      $.ajax({
        type: 'GET',
        url: t,
        dataType: 'jsonp',
        success: function(t) {
          if (200 === t.meta.code && t.data.length) {
            t = t.data;
            var o = 0,
              a = e.el.data('limit');
            e.el.empty();
            for (var n = 0; n < t.length; n++) {
              var r,
                i,
                c = t[n];
              if (
                (c.images.low_resolution.url.includes('null') ||
                  ((r =
                    '<img class="il-photo__img" src="' +
                    c.images.low_resolution.url +
                    '" data-filter="' +
                    c.filter +
                    '" />'),
                  (r =
                    '<a href="' + c.link + '" target="_blank">' + r + '</a>')),
                c.videos)
              )
                c.videos.standard_resolution
                  ? (i = c.videos.standard_resolution.url)
                  : c.videos.low_resolution
                  ? (i = c.videos.low_resolution.url)
                  : c.videos.low_bandwidth && (i = c.videos.low_bandwidth.url),
                  (r =
                    '<video poster="' +
                    c.images.low_resolution.url +
                    '" controls>'),
                  (r += '<source src="' + i + '" type="video/mp4;"></source>'),
                  (r += '</video>');
              if (
                (r &&
                  (r =
                    4 == a
                      ? '<div class="grid__item medium-up--one-quarter small--one-half inst_image">' +
                        r +
                        '</div>'
                      : 6 == a
                      ? '<div class="grid__item medium-up--one-sixth small--one-half inst_image">' +
                        r +
                        '</div>'
                      : '<div class="grid__item medium-up--one-eighth small--one-half inst_image">' +
                        r +
                        '</div>'),
                '' !== r && (e.el.append(r), o++),
                o == e.limit)
              )
                break;
            }
          }
        },
        error: function() {},
      });
    }
  },
};
$(function() {
  $('.social-feeds-wrap').each(function(e, t) {
    var o = $(this).find('.js-instafeed');
    instagram.loadContent({
      el: o,
      clientID: o.data('client-id'),
      limit: o.data('count'),
    });
  });
}),
  $(document).ready(function(e) {
    swatch();
  }),
  $(document).on('shopify:section:select', function(e) {
    swatch();
  }),
  $(document).on('shopify:section:deselect', function(e) {
    swatch();
  }),
  $(document).on('shopify:section:load', function(e) {
    $('#shopify-section-' + e.detail.sectionId).hasClass(
      'social-feeds-section'
    ) &&
      $('.social-feeds-wrap').each(function(e, t) {
        var o = $(this).find('.js-instafeed');
        instagram.loadContent({
          el: o,
          clientID: o.data('client-id'),
          limit: o.data('count'),
        });
      });
  }),
  $(document).ready(function() {
    $('ul.tabs').each(function() {
      var e,
        t,
        o = $(this).find('a');
      (e = o.first().addClass('active')),
        (t = $(e.attr('href'))),
        o.not(':first').each(function() {
          $($(this).attr('href')).hide();
        }),
        $(this)
          .find('a')
          .click(function(o) {
            return (
              e.removeClass('active'),
              t.hide(),
              (e = $(this)),
              (t = $($(this).attr('href'))),
              e.addClass('active'),
              t.show(),
              !1
            );
          });
    });
  }),
  $(document).ready(function() {
    $('.newsletter .contact-form').each(function() {
      var e = $(this);
      e.on('submit', function(t) {
        'true' !== $('input[name="challenge"]', e).val() &&
          ($.ajax({
            type: e.attr('method'),
            url: e.attr('action'),
            data: e.serialize(),
            success: function(t) {
              e.fadeOut('slow', function() {
                e.prev('.message').html(y);
              });
            },
            error: function(t) {
              $('input[name="challenge"]', e).val('true'), e.submit();
            },
          }),
          t.preventDefault());
      });
    }),
      $('.site-nav--has-dropdown').on('touchstart', function(e) {
        'use strict';
        var t = $(this);
        return (
          !!t.hasClass('hover') ||
          (t.addClass('hover'),
          $('.site-nav--has-dropdown')
            .not(this)
            .removeClass('hover'),
          e.preventDefault(),
          !1)
        );
      });
    var e = function() {
      var e = document.body.clientWidth;
      if (e > 1024) {
        var t = $('.logo_part').outerHeight(),
          length_li = $('ul.site-nav > li').length;
        if (t > 80 && length_li < 6) {
          var o = (t - $('.site-nav__link--main').height()) / 2;
          $('.site-nav__link--main').css({
            'padding-top': o + 'px',
            'padding-bottom': o + 'px',
          });
        }
      }
      e > 749
        ? $('.prod_qty_mobile').remove()
        : $('.prod_qty_desktop').remove();
    };
    e(), jQuery(window).bind('resize orientationchange', e);
  }),
  $(document).ready(function() {
    if (currency_dropdown && auto_curncy) {
      var c = getCookie('_shopify_country_code'),
        e = {
          BD: 'BDT',
          BE: 'EUR',
          BF: 'XOF',
          BG: 'BGN',
          BA: 'BAM',
          BB: 'BBD',
          WF: 'XPF',
          BL: 'EUR',
          BM: 'BMD',
          BN: 'BND',
          BO: 'BOB',
          BH: 'BHD',
          BI: 'BIF',
          BJ: 'XOF',
          BT: 'BTN',
          JM: 'JMD',
          BV: 'NOK',
          BW: 'BWP',
          WS: 'WST',
          BQ: 'USD',
          BR: 'BRL',
          BS: 'BSD',
          JE: 'GBP',
          BY: 'BYR',
          BZ: 'BZD',
          RU: 'RUB',
          RW: 'RWF',
          RS: 'RSD',
          TL: 'USD',
          RE: 'EUR',
          TM: 'TMT',
          TJ: 'TJS',
          RO: 'RON',
          TK: 'NZD',
          GW: 'XOF',
          GU: 'USD',
          GT: 'GTQ',
          GS: 'GBP',
          GR: 'EUR',
          GQ: 'XAF',
          GP: 'EUR',
          JP: 'JPY',
          GY: 'GYD',
          GG: 'GBP',
          GF: 'EUR',
          GE: 'GEL',
          GD: 'XCD',
          GB: 'GBP',
          GA: 'XAF',
          SV: 'USD',
          GN: 'GNF',
          GM: 'GMD',
          GL: 'DKK',
          GI: 'GIP',
          GH: 'GHS',
          OM: 'OMR',
          TN: 'TND',
          JO: 'JOD',
          HR: 'HRK',
          HT: 'HTG',
          HU: 'HUF',
          HK: 'HKD',
          HN: 'HNL',
          HM: 'AUD',
          VE: 'VEF',
          PR: 'USD',
          PS: 'ILS',
          PW: 'USD',
          PT: 'EUR',
          SJ: 'NOK',
          PY: 'PYG',
          IQ: 'IQD',
          PA: 'PAB',
          PF: 'XPF',
          PG: 'PGK',
          PE: 'PEN',
          PK: 'PKR',
          PH: 'PHP',
          PN: 'NZD',
          PL: 'PLN',
          PM: 'EUR',
          ZM: 'ZMK',
          EH: 'MAD',
          EE: 'EUR',
          EG: 'EGP',
          ZA: 'ZAR',
          EC: 'USD',
          IT: 'EUR',
          VN: 'VND',
          SB: 'SBD',
          ET: 'ETB',
          SO: 'SOS',
          ZW: 'ZWL',
          SA: 'SAR',
          ES: 'EUR',
          ER: 'ERN',
          ME: 'EUR',
          MD: 'MDL',
          MG: 'MGA',
          MF: 'EUR',
          MA: 'MAD',
          MC: 'EUR',
          UZ: 'UZS',
          MM: 'MMK',
          ML: 'XOF',
          MO: 'MOP',
          MN: 'MNT',
          MH: 'USD',
          MK: 'MKD',
          MU: 'MUR',
          MT: 'EUR',
          MW: 'MWK',
          MV: 'MVR',
          MQ: 'EUR',
          MP: 'USD',
          MS: 'XCD',
          MR: 'MRO',
          IM: 'GBP',
          UG: 'UGX',
          TZ: 'TZS',
          MY: 'MYR',
          MX: 'MXN',
          IL: 'ILS',
          FR: 'EUR',
          IO: 'USD',
          SH: 'SHP',
          FI: 'EUR',
          FJ: 'FJD',
          FK: 'FKP',
          FM: 'USD',
          FO: 'DKK',
          NI: 'NIO',
          NL: 'EUR',
          NO: 'NOK',
          NA: 'NAD',
          VU: 'VUV',
          NC: 'XPF',
          NE: 'XOF',
          NF: 'AUD',
          NG: 'NGN',
          NZ: 'NZD',
          NP: 'NPR',
          NR: 'AUD',
          NU: 'NZD',
          CK: 'NZD',
          XK: 'EUR',
          CI: 'XOF',
          CH: 'CHF',
          CO: 'COP',
          CN: 'CNY',
          CM: 'XAF',
          CL: 'CLP',
          CC: 'AUD',
          CA: 'CAD',
          CG: 'XAF',
          CF: 'XAF',
          CD: 'CDF',
          CZ: 'CZK',
          CY: 'EUR',
          CX: 'AUD',
          CR: 'CRC',
          CW: 'ANG',
          CV: 'CVE',
          CU: 'CUP',
          SZ: 'SZL',
          SY: 'SYP',
          SX: 'ANG',
          KG: 'KGS',
          KE: 'KES',
          SS: 'SSP',
          SR: 'SRD',
          KI: 'AUD',
          KH: 'KHR',
          KN: 'XCD',
          KM: 'KMF',
          ST: 'STD',
          SK: 'EUR',
          KR: 'KRW',
          SI: 'EUR',
          KP: 'KPW',
          KW: 'KWD',
          SN: 'XOF',
          SM: 'EUR',
          SL: 'SLL',
          SC: 'SCR',
          KZ: 'KZT',
          KY: 'KYD',
          SG: 'SGD',
          SE: 'SEK',
          SD: 'SDG',
          DO: 'DOP',
          DM: 'XCD',
          DJ: 'DJF',
          DK: 'DKK',
          VG: 'USD',
          DE: 'EUR',
          YE: 'YER',
          DZ: 'DZD',
          US: 'USD',
          UY: 'UYU',
          YT: 'EUR',
          UM: 'USD',
          LB: 'LBP',
          LC: 'XCD',
          LA: 'LAK',
          TV: 'AUD',
          TW: 'TWD',
          TT: 'TTD',
          TR: 'TRY',
          LK: 'LKR',
          LI: 'CHF',
          LV: 'EUR',
          TO: 'TOP',
          LT: 'LTL',
          LU: 'EUR',
          LR: 'LRD',
          LS: 'LSL',
          TH: 'THB',
          TF: 'EUR',
          TG: 'XOF',
          TD: 'XAF',
          TC: 'USD',
          LY: 'LYD',
          VA: 'EUR',
          VC: 'XCD',
          AE: 'AED',
          AD: 'EUR',
          AG: 'XCD',
          AF: 'AFN',
          AI: 'XCD',
          VI: 'USD',
          IS: 'ISK',
          IR: 'IRR',
          AM: 'AMD',
          AL: 'ALL',
          AO: 'AOA',
          AQ: '',
          AS: 'USD',
          AR: 'ARS',
          AU: 'AUD',
          AT: 'EUR',
          AW: 'AWG',
          IN: 'INR',
          AX: 'EUR',
          AZ: 'AZN',
          IE: 'EUR',
          ID: 'IDR',
          UA: 'UAH',
          QA: 'QAR',
          MZ: 'MZN',
        };
      if ('' == c)
        jQuery.getJSON('https://extreme-ip-lookup.com/json/', function(c) {
          console.log(c.countryCode);
          if (c.countryCode) {
            var r = e[c.countryCode];
            if (((document.cookie = '_shopify_country_code=' + r), r)) {
              $('#desktop_currency .currency-picker').val(r),
                $('#desktop_currency .currency-picker').change();
              r.toUpperCase();
              jQuery('#desktop_currency .currency_code')
                .find('span.flags')
                .attr('class', 'flags flags-' + r),
                jQuery('#desktop_currency .currency_code')
                  .find('span.country_cod')
                  .html(r),
                $('.mobile_currency .currency-picker').val(r),
                $('.mobile_currency .currency-picker').change();
              r.toUpperCase();
              jQuery('.mobile_currency .currency_code')
                .find('span.flags')
                .attr('class', 'flags flags-' + r),
                jQuery('.mobile_currency .currency_code')
                  .find('span.country_cod')
                  .html(r);
            }
          }
        });
      else {
        var r = c;
        if (r) {
          $('#desktop_currency .currency-picker').val(r),
            $('#desktop_currency .currency-picker').change();
          r.toUpperCase();
          jQuery('#desktop_currency .currency_code')
            .find('span.flags')
            .attr('class', 'flags flags-' + r),
            jQuery('#desktop_currency .currency_code')
              .find('span.country_cod')
              .html(r),
            $('.mobile_currency .currency-picker').val(r),
            $('.mobile_currency .currency-picker').change();
          r.toUpperCase();
          jQuery('.mobile_currency .currency_code')
            .find('span.flags')
            .attr('class', 'flags flags-' + r),
            jQuery('.mobile_currency .currency_code')
              .find('span.country_cod')
              .html(r);
        }
      }
    }
    if (1024 <= $(window).width()) var n = $('#desktop_currency');
    else n = $('.mobile_currency');
    n.find('.currency-block').click(),
      n.find('.currencies li').on('click', function() {
        n.find('.currencies li').removeClass('active'),
          jQuery(this).addClass('active');
        var c = jQuery(this)
          .find('input[type=hidden]')
          .val();
        n.find('.currency-picker option').attr('selected', !1),
          n
            .find('.currency-picker option[value=' + c + ']')
            .attr('selected', !0),
          Currency.convertAll(Currency.currentCurrency, c);
        var r = $(this).data('value');
        n
          .find('.currency_code')
          .find('span.flags')
          .attr('class', 'flags flags-' + r),
          n
            .find('.currency_code')
            .find('span.country_cod')
            .html(r);
      }),
      n
        .find('.currencies')
        .find('li')
        .each(function() {
          if ($(this).data('value') == cookieCurrency) {
            var c = $(this).data('value');
            n
              .find('.currency_code')
              .find('span.flags')
              .attr('class', 'flags flags-' + c),
              n
                .find('.currency_code')
                .find('span.country_cod')
                .html(c),
              n.find('.currency-picker').val(c),
              n.find('.currency-picker').change();
          }
          cookieCurrency;
        });
  });
