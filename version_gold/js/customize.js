// 自行加入的JS請寫在這裡
$(function () {
  //sticky sidebar
  if ($('.stickySidebar').length > 0) {
    var stickySidebar = new StickySidebar('.stickySidebar', {
      containerSelector: '.main',
      topSpacing: 93,
      bottomSpacing: 0,
      minWidth: 768,
      resizeSensor: true,
    });
  }
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  // 跑馬燈
  if ($('.marquee').length > 0) {
    $('.marquee ul').slick({
      dots: false,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      speed: 300,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true, //滑鼠移過後暫停自動撥放
      focusOnSelect: true,
    });
  }

  //mpleft_block
  var _lefttitle = $('.leftlinkblock .leftlink_list .title');
  _lefttitle.click(function () {
    $(this).siblings('ul').stop().slideToggle();
    $(this).toggleClass('open');
  });

  //  mp左欄 左右收合
  $('.leftlink_btn>a').click(function () {
    $('.mpleft_block').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });

  //內頁左欄
  var _leftnodemenu = $('.left_block .leftblock_nodemenu ul');
  _leftnodemenu.find('li').has('ul').addClass('hasChild');
  _leftnodemenu
    .children('li')
    .children('a')
    .click(function () {
      $(this).next('ul').stop().slideToggle();
      $(this).parent('li').stop().toggleClass('open');
    });

  //  內頁左欄 左右收合
  $('.nodemenu_btn>a').click(function () {
    $('.left_block').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });

  // 條件查詢
  $('.conditional_searchbtn').click(function () {
    $('.conditional_searchblock').slideToggle();
  });

  // 會員登入
  $('.login_lightbox').hide();
  $('.member_login_btn button').click(function () {
    $('.member_login_select').slideToggle('');
  });

  // FIDO登入
  $('.login_lightbox').hide();
  $('.member_login_btn .fido').click(function () {
    $('.login_lightbox').fadeIn('');
    $('body').addClass('fixed');
  });
  $('.login_lightbox .close a').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fixed');
  });
  $('.login_lightbox .overlay').click(function () {
    $('.login_lightbox').fadeOut();
    $('body').removeClass('fixed');
  });

  $(document).on('touchend click', function (e) {
    var container = $('.header .member_login_btn'); //點這些以外的區塊
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.header .member_login_btn .member_login_select').slideUp(); //要被收起來的區塊
    }
  });
});
// 彈出訊息
$(function () {
  var popupStatus = false;
  if ($('body').find('.pop_up_block').length > 0) {
    popupStatus = true;
  }
  if (popupStatus == true) {
    $('body').addClass('fixed');
    $('.pop_up_block').addClass('goin');
    $('.pop_up_block .closebtn').click(function () {
      $('.pop_up_block').fadeOut();
      $('body').removeClass('fixed');
    });
    $('.pop_up_block .overlay').click(function () {
      $('.pop_up_block').fadeOut();
      $('body').removeClass('fixed');
    });
    $('body').keydown(function (e) {
      if (e.keyCode == 27) {
        $('.pop_up_block').fadeOut();
        $('body').removeClass('fixed');
      }
    });
  }
});
