<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <!-- Navbar React mount point -->
    <div id="render-navbar-here"></div>

    <!-- Spacer dinámico: compensa navbar fixed + admin bar de WordPress -->
    <div id="navbar-spacer" style="height: 140px;"></div>

    <script>
      (function () {
        var spacer = document.getElementById('navbar-spacer');

        function getAdminBarH() {
          var bar = document.getElementById('wpadminbar');
          return bar ? bar.offsetHeight : 0;
        }

        function update() {
          var scrolled  = window.scrollY > 48;
          var adminBarH = getAdminBarH();
          var navH      = scrolled ? 108 : 152;
          spacer.style.height = (adminBarH + navH) + 'px';
        }

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
      })();
    </script>