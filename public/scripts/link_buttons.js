const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Mailing List - Signup
const mail_list_email_input = document.getElementById('mailing-input')
const mail_list_signup_btn = document.getElementById('mailing-submit')

mail_list_signup_btn.addEventListener('click', (e) => {
  if (
    mail_list_email_input.value &&
    email_regex.test(mail_list_email_input.value)
  ) {
    window.alert(
      `This is not a real band.\n${mail_list_email_input.value} has NOT been added to any mailing list.`
    )
  } else {
    window.alert(`Please enter a valid email adress.`)
  }
})

// Headlines - Watch Now
const watch_now = document.getElementById('watch-now')

watch_now.addEventListener('click', (e) => {
  window.alert('This is fake.  All of this is fake.')
})

// Store - Button
const store_btn = document.getElementById('store-button')

store_btn.addEventListener('click', (e) => {
  window.alert('This is fake.  All of this is fake.')
})

// Tunes - Buy and Follow
const buy_album = document.getElementById('buy-album')
const follow_on_bandcamp = document.getElementById('follow-on-bandcamp')

buy_album.addEventListener('click', (e) => {
  window.alert('This is fake.  All of this is fake.')
})

follow_on_bandcamp.addEventListener('click', (e) => {
  window.alert('This is fake.  All of this is fake.')
})

// Footer - All Links
const footerLinks = document.querySelectorAll('.footer_links-link')

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    window.alert('This is fake.  All of this is fake.')
  })
})
