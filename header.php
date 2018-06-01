<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php
        if (isset($archive_page) && $archive_page) {
            echo "<meta name='robots' content='noindex, nofollow'>";
        }
    ?>

    <?php wp_head(); ?>

  </head>

  <body <?php body_class(); ?> >
    <header class="header" id="header">
      <button class="header__trigger u-abs-c btn--un" id="header_nav_trigger" onClick="toggleMobNav();">
        <span class="header__bars"></span>
      </button>
      <div class="header__bg u-abs-c"></div>

      <!-- nav -->
      <?php 
        $navClass = 'header';
        include 'includes/_navigation.php';
        unset($navClass); ?>
      <!-- end nav -->

    </header>
    <section class="cover u-flex">
      <div class="cover__bg u-abs-c u-flex" style="background-image: url(<?php header_image(); ?>)" />
      <div class="cover__t-c u-flex u-flex--c">
        <a href="<?php bloginfo('url'); ?>" class="cover__t">
          <h1 class="cover__h1"><?php echo get_bloginfo( 'name' ); ?></h1>
          <p class="cover__p h4"><?php echo get_bloginfo( 'description' ); ?></p>
        </a>
      </div>
      <div class="cover__nav-b" />
    </section>

    <!-- nav -->
    <?php 
      $navClass = 'body';
      include 'includes/_navigation.php'; ?>
    <!-- end nav -->

