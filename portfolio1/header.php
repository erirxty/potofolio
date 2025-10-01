<?php
/**
 * The header for our theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head(); ?> 
</head>

<body <?php body_class(); ?>>

<section class="noren-section" id="noren">
    <div class="noren">
        <h1>Web職人の小料理屋 </h1>
        <p class="catchphrase">美しいWebデザインと実装をお届けします</p>
        
        <button class="enter-btn" onclick="enterShop()">のれんをくぐる</button>
    </div>
</section>