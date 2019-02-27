<?php 

/*
add support for post thumbnails
*/
add_theme_support('post-thumbnails');

/*
Include your scripts for your theme
*/
function load_stylesheets(){
    /*
    custom css
    */
    wp_register_style('stylesheet', get_template_directory_uri() . '/style.css', array(), false, 'all');
    wp_enqueue_style('stylesheet');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

/*
Include your scripts for your theme
*/
function load_js(){
    /*
    Custom script
    */
    wp_register_script('script', get_template_directory_uri() . '/script.js', array ( 'jquery' ), 1.1, true);
    wp_enqueue_script('script');
}
add_action('wp_enqueue_scripts', 'load_js');

?>