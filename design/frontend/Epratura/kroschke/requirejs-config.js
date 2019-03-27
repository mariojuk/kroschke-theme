/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Core
 * @copyright   Copyright (c) 2016-2018 Mageplaza (http://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        'filter/owl.carousel': 'Kroschke_ProductFilter/owlcarousel/owl.carousel',
        'Mageplaza_Productslider/js/owl.carousel.min': 'Mažgeplaza_Productslider/js/owl.carousel.min',
    },
    shim: {
        "filter/owl.carousel": ["jquery"],
        "Mageplaza_Productslider/js/owl.carousel.min": ["jquery"],
    }
};
