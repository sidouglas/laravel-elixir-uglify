var elixir = require("laravel-elixir");
var uglify = require("gulp-uglifycss");
require("./index.js");


elixir(function(mix){
    mix.uglify(['./test.css'],'./public');
});