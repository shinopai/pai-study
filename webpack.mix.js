const mix = require("laravel-mix");

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/style.scss", "public/sass")
  .postCss("resources/css/app.css", "public/css", [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ]);
