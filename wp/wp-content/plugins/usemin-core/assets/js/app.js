/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp/wp-content/plugins/usemin-core/assets/js/scripts/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp/wp-content/plugins/usemin-core/assets/js/scripts/scripts.js":
/*!************************************************************************!*\
  !*** ./wp/wp-content/plugins/usemin-core/assets/js/scripts/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n  // Swiper slider\n  var swiper = new Swiper('.swiper-container', {\n    direction: 'vertical',\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    },\n    parallax: true,\n    effect: \"slide\",\n    speed: 1000,\n    autoplay: {\n      delay: 3500\n    },\n    loop: true\n  }); // End swiper slier\n  // Oxygen Toggle\n  // Close all other opened toogle when opeing a sibling\n\n  var title = $('.t-auto-close'),\n      icon = $('.oxy-expand-collapse-icon'),\n      expanded = $('.t-auto-close').attr('data-oxy-toggle-active-class'),\n      content = $('.t-auto-close').next();\n  title.click(function (e) {\n    e.stopPropagation();\n    content.not($(this).next(content)).hide();\n    $(this).next(content).toggle();\n    icon.not($(this).find(icon)).addClass('oxy-eci-collapsed');\n    $(this).find(icon).toggleClass('oxy-eci-collapsed');\n    title.not($(this)).removeClass(expanded);\n    $(this).toggleClass(expanded);\n  }); // End Close all other opened toogle when opeing a sibling\n\n  /*\n  // for counter\n  $('.counter').each(function() {\n      var $this = $(this),\n          countTo = $this.attr('data-count');\n  \n      $({ countNum: $this.text()}).animate({\n        countNum: countTo\n      },\n  \n      {\n  \n        duration: 3000,\n        easing:'linear',\n        step: function() {\n          $this.text(Math.floor(this.countNum));\n        },\n        complete: function() {\n          $this.text(this.countNum);\n        }\n      });\n  });\n  \n  */\n  // Slick Slider\n\n  $(\".regular\").slick({\n    dots: true,\n    infinite: true,\n    speed: 1000,\n    fade: true,\n    cssEase: 'linear',\n    autoplay: true,\n    autoplaySpeed: 5000,\n    arrows: false,\n    pauseOnHover: false\n  });\n  $('.regular').on('beforeChange', function (event, slick, currentSlide, nextSlide) {//console.log(nextSlide);\n    //nextSlide.addClass('check');\n  });\n  $(\".slick-current .text\").addClass('text-animation');\n  setTimeout(function () {\n    $(\".slick-current img\").addClass('img-animation');\n  }, 500);\n  $('.regular').on('afterChange', function (event, slick, currentSlide, nextSlide) {\n    $(\".slick-slide .text\").removeClass('text-animation');\n    $(\".slick-slide img\").removeClass('img-animation');\n    $(\".slick-current .text\").addClass('text-animation');\n    setTimeout(function () {\n      $(\".slick-current img\").addClass('img-animation');\n    }, 1500);\n  });\n  $('.regular').on('beforeChange', function (e, s, c, n) {\n    $('body').addClass('change');\n  });\n  $('.regular').on('afterChange', function (e, s, c) {\n    setTimeout(function () {\n      $('body').removeClass('change');\n    }, 2000);\n  }); // End Slick Slider\n\n  $('.with_dot').append('<span class=\"dot\"></span>'); // FlexNav\n\n  $(\".flexnav\").flexNav(); // Navigation Icon at mobile menu\n\n  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {\n    $(this).toggleClass('open');\n  });\n  $('.menu-item-has-children .touch-button').append('<i class=\"fas fa-chevron-down\"></i>'); // End Navigation\n  // Attorney Pop up\n\n  $('.attorney_content').click(function () {\n    //console.log($(this).parent());\n    $(this).parent().find('.attorney_popup').addClass('visible');\n    $('body').addClass('popup_open');\n  });\n  $('.closer').click(function () {\n    $(this).parent().removeClass('visible');\n    $('body').removeClass('popup_open');\n  }); // New Menu \n\n  $('.new_menu > li > a').click(function (e) {\n    e.preventDefault(); //$('.new_menu > li > ul').css('display', 'none');\n\n    var parent = $(this).parent();\n    console.log(parent);\n    parent.find('>ul').slideToggle(500);\n    parent.siblings().find('>ul').css('display', 'none');\n  });\n  $('.new_menu > li.menu-item-has-children > a ').append('<i class=\"fas fa-chevron-down\"></i>');\n  $('.menu-button').click(function () {\n    $('.new_menu').slideToggle(500);\n  });\n}); // Document ready\n\n//# sourceURL=webpack:///./wp/wp-content/plugins/usemin-core/assets/js/scripts/scripts.js?");

/***/ })

/******/ });