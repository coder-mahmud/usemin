<?php

//Register Meta
$object_type = 'post';
$args1 = array(
    'type' => 'string', 
    'description' => 'My Meta Key Description',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'area', $args1 );


$args2 = array(
    'type' => 'string', 
    'description' => 'My Meta Key 2 Description',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'salary', $args2 );


$args3 = array(
    'type' => 'string', 
    'description' => '',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'wage', $args3 );

$args4 = array(
    'type' => 'string', 
    'description' => '',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'image_1', $args4 );

$args5 = array(
    'type' => 'string', 
    'description' => '',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'image_2', $args5 );


$args6 = array(
    'type' => 'string', 
    'description' => '',
    'single' => true,
    'show_in_rest' => true,
);
register_meta( $object_type, 'image_3', $args6 );


add_action('wp_ajax_my_tax_action', 'set_taxonomy');
add_action('wp_ajax_nopriv_my_tax_action', 'set_taxonomy');

function set_taxonomy(){
    $pid = $_POST['id'];
    $taxonomy = (int)$_POST['taxonomy'];
    wp_set_object_terms( $pid,$taxonomy,'post-cat');
    echo $taxonomy;
    die();
}
