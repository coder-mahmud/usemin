<?php

// Register Nav menu
function wpj_register_menu() {

    if (function_exists('register_nav_menu')) {

        register_nav_menu( 'main-menu', __( 'Main Menu') );

    }

}

add_action('init', 'wpj_register_menu');

//woocommerce functions
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );