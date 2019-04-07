<!DOCTYPE html>
<html>
<head>
    <!-- Wordpress head -->
    <?php wp_head(); ?>
    <!-- standard html -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <!-- Most important SEO tag -->
    <title><?php wp_title(''); ?></title>
    <!-- Other SEO friendly tags -->
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="copyright" content="">
    <meta name="HandheldFriendly" content="true">
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php wp_title(''); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:url" content="">
    <!--<meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />-->
    <meta property="og:site_name" content="<?php wp_title(''); ?>">
</head>
<body>
<div class="main">