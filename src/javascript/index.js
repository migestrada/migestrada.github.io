$(function() {
  $('body').on('click', '.open-data-url', function() {
    const url = $(this).data('url')
    window.open(url).focus()
  })

  $('body').on('click', '.toggle-nav-btn', function() {
    $('#nav-content').toggleClass('active')
  })

  $('body').on('click', 'nav li', function() {
    $('#nav-content').removeClass('active')
  })
});