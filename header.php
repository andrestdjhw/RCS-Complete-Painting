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

    <!-- Offset para el header fixed:
         ~108px con topbar visible / ~68px solo nav.
         El JS ajusta dinámicamente según scroll. -->
    <div id="navbar-spacer" style="height: 140px;"></div>

    <script>
      (function () {
        var spacer   = document.getElementById('navbar-spacer');
        var lastState = 'topbar';

        function update() {
          var scrolled = window.scrollY > 48;
          var state    = scrolled ? 'nav' : 'topbar';
          if (state === lastState) return;
          lastState       = state;
          spacer.style.height = scrolled ? '96px' : '140px';
        }

        window.addEventListener('scroll', update, { passive: true });
        update();
      })();
    </script>