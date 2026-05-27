<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));

  wp_localize_script('ourmainjs', 'rcsTheme', array(
    'logoUrl' => get_theme_mod('rcs_logo_url', ''),
  ));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// ── Customizer: campo de logo ────────────────────────────────────────────────
function rcs_customizer_settings($wp_customize) {
  $wp_customize->add_setting('rcs_logo_url', array(
    'default'           => '',
    'sanitize_callback' => 'esc_url_raw',
  ));

  $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'rcs_logo_url', array(
    'label'   => 'Logo del sitio',
    'section' => 'title_tagline',  // sección "Identidad del sitio"
    'settings'=> 'rcs_logo_url',
  )));
}

add_action('customize_register', 'rcs_customizer_settings');