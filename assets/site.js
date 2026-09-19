$(function () {
  var citations = $('[data-toggle="popover"]');

  citations.popover({
    container: 'body',
    html: true,
    animation: false,
    content: function () {
      return $($(this).attr('data-popover-content')).children('.popover-body').html();
    }
  }).on('show.bs.popover', function () {
    citations.not(this).popover('hide');
    $(this).attr('aria-expanded', 'true');
  }).on('hidden.bs.popover', function () {
    $(this).attr('aria-expanded', 'false');
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('[data-toggle="popover"], .popover').length) {
      citations.popover('hide');
    }
  }).on('keydown', function (event) {
    if (event.key === 'Escape') {
      var activeCitation = citations.filter('[aria-expanded="true"]');
      activeCitation.popover('hide');
      activeCitation.trigger('focus');
    }
  }).on('focusin', function (event) {
    if (!$(event.target).closest('[data-toggle="popover"], .popover').length) {
      citations.popover('hide');
    }
  });
});
