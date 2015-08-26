// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
  $(".dropdown .dropdown-overlay").hide();
  $(".dropdown .dropdown-menu").hide();

  $(".dropdown .dropdown-overlay").click(function(e){
    e.preventDefault();
    $(e.target).hide();
    $(e.target).siblings(".dropdown-menu").hide();
  });

  $(".dropdown button").click(function(e){
    e.preventDefault();
    $(e.target).siblings(".dropdown-menu").toggle();
    $(e.target).siblings(".dropdown-overlay").toggle();
  });
});
