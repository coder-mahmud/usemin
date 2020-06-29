<?php

function wpskilled_custom_post() {
    
    register_post_type('attorney', array(
        'supports' => array('author', 'thumbnail', 'title', 'editor', 'custom-fields','excerpt'),
        'rewrite' => array('slug' => 'attorneys'),
        'has_archive' => true,
        'public' => true,
        'show_in_rest'=> true,
        'labels' => array(
            'name' => 'Attorney',
            'add_new_item' => 'Add New Attorney',
            'edit_item' => 'Edit Attorney',
            'all_items' => 'All Attorneys',
            'singular_name' => 'Attorney',
            'add_new' => 'Add New Attorney',
        ),
        'menu_icon' => 'dashicons-businessman'
    ));



}

add_action( 'init', 'wpskilled_custom_post' );


function portfolio_taxonomy() {

    register_taxonomy(
        'post-cat',
        'site_posts',
        array(
            'hierarchical'          => true,
            'label'                 => 'Post Category',
            'query_var'             => true,
            'rewrite'               => array(
                'slug'              => 'post-cat', 
                'with_front'        => true
            ),
            'show_admin_column' => TRUE,
            'show_in_rest' => true,


        )
    );

    register_taxonomy(
        'business-category',
        'address_posts',
        array(
            'hierarchical'          => true,
            'label'                 => 'Address Category',
            'query_var'             => true,
            'rewrite'               => array(
                'slug'              => 'business-category', 
                'with_front'        => true
            ),
            'show_admin_column' => TRUE,
            'show_in_rest' => true,


        )
    );




}
//add_action( 'init', 'portfolio_taxonomy'); 