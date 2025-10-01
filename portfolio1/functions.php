<?php
// CSSとJavaScriptを登録・読み込みする関数
function portfolio_enqueue_scripts() {
    // CSSとJSを読み込みます
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/style.css', array(), '1.0.0' );
    wp_enqueue_script( 'main-script', get_template_directory_uri() . '/main.js', array(), '1.0.0', true );
}
// WordPressに上記の関数を実行するよう伝えます
add_action( 'wp_enqueue_scripts', 'portfolio_enqueue_scripts' );


// title-tagサポートを追加
add_action( 'after_setup_theme', 'my_theme_setup' );
function my_theme_setup() {
    // <title>タグの出力をWordPressに任せます
    add_theme_support( 'title-tag' ); 
}