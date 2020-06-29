<?php

/**
Plugin Name:Usemin Core Functionalities
Description: Core functions to run with Oxygen Builder
Author: win2wininc.com
Author Uri: https://win2wininc.com
**/

// Exit if accessed directly


if(!defined('ABSPATH')){
	exit;
}

// Adding Scripts

function cwp_fc_scripts(){
  
  	wp_enqueue_style('vendor-style', plugin_dir_url( __FILE__ ).'assets/css/vendors.css');
  	wp_enqueue_style('main-style', plugin_dir_url( __FILE__ ).'assets/css/styles.css');
  	wp_enqueue_script('vendor_script',plugin_dir_url( __FILE__ ).'assets/js/vendors.js',array('jquery'),'',true);
  	wp_enqueue_script('main_script', plugin_dir_url( __FILE__ ).'assets/js/app.js',array('jquery'),'',true);

  	wp_localize_script( 'main_script', 'RestVars', array( 
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'endpoint' => esc_url_raw( rest_url( '/wp/v2/' ) ),
        'nonce'    => wp_create_nonce( 'wp_rest' ),
    ));



}
add_action('wp_enqueue_scripts','cwp_fc_scripts');






//Includes
require_once(plugin_dir_path(__FILE__).'/inc/custom-post.php');
require_once(plugin_dir_path(__FILE__).'/inc/shortcodes.php');
require_once(plugin_dir_path(__FILE__).'/inc/shortcodes-slider.php');
require_once(plugin_dir_path(__FILE__).'/inc/functions.php');

