"use strict";

var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Mailing List - Signup

var mail_list_email_input = document.getElementById('mailing-input');
var mail_list_signup_btn = document.getElementById('mailing-submit');
mail_list_signup_btn.addEventListener('click', function (e) {
  if (mail_list_email_input.value && email_regex.test(mail_list_email_input.value)) {
    window.alert("This is not a real band.\n".concat(mail_list_email_input.value, " has NOT been added to any mailing list."));
  } else {
    window.alert("Please enter a valid email adress.");
  }
}); // Headlines - Watch Now

var watch_now = document.getElementById('watch-now');
watch_now.addEventListener('click', function (e) {
  window.alert('This is fake.  All of this is fake.');
}); // Store - Button

var store_btn = document.getElementById('store-button');
store_btn.addEventListener('click', function (e) {
  window.alert('This is fake.  All of this is fake.');
}); // Tunes - Buy and Follow

var buy_album = document.getElementById('buy-album');
var follow_on_bandcamp = document.getElementById('follow-on-bandcamp');
buy_album.addEventListener('click', function (e) {
  window.alert('This is fake.  All of this is fake.');
});
follow_on_bandcamp.addEventListener('click', function (e) {
  window.alert('This is fake.  All of this is fake.');
}); // Footer - All Links

var footerLinks = document.querySelectorAll('.footer_links-link');
footerLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    window.alert('This is fake.  All of this is fake.');
  });
});