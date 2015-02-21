/* Database Functions */

function DoDBSwitch(db){ 
	$.ajax({
		url: "ajax.php?M=DBAuth&DoDBSwitch=" + encodeURIComponent(db),
		context: document.body
	}).done(function(e) {
		if(e.indexOf("Login Success") > -1){
			// return;
			// window.location = 'index.php'; 
			$.notific8("Database connection switched to: " + db, {
				heading: "EOC",
				theme: "ruby",
				life: 3000
			});
		} 
	});
}

/* General Functions */

function Notific8(title, msg, time){ 
	$.notific8(msg, { heading: title, theme: "ruby", life: time });
}

// general settings
$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = 
  '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' +
	'<div class="progress progress-striped active">' +
	  '<div class="progress-bar" style="width: 100%;"></div>' +
	'</div>' +
  '</div>';

$.fn.modalmanager.defaults.resize = true;
$.fn.modalmanager.defaults.modalOverflow = false;

//dynamic demo:
$('.dynamic .demo').click(function(){
  var tmpl = [
	// tabindex is required for focus
	'<div class="modal hide fade" tabindex="-1">',
	  '<div class="modal-header">',
		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
		'<h4 class="modal-title">Modal header</h4>', 
	  '</div>',
	  '<div class="modal-body">',
		'<p>Test</p>',
	  '</div>',
	  '<div class="modal-footer">',
		'<a href="#" data-dismiss="modal" class="btn btn-default">Close</a>',
		'<a href="#" class="btn btn-primary">Save changes</a>',
	  '</div>',
	'</div>'
  ].join('');
  
  $(tmpl).modal();
});

//ajax demo:
var $modal = $('#ajax-modal');

$('.ajax-modal').on('click', function(){
	// create the backdrop and wait for next modal to be triggered
	$('body').modalmanager('loading'); 
	$modal.load($(this).attr('modalurl'), '', function(){
		$modal.modal();
	});
});

$modal.on('click', '.update', function(){
  $modal.modal('loading');
  setTimeout(function(){
	$modal
	  .modal('loading')
	  .find('.modal-body')
		.prepend('<div class="alert alert-info fade in">' +
		  'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' +
		'</div>');
  }, 1000);
});

function DoModal(url){
	$('body').modalmanager('loading'); 
	$modal.load(url, '', function(){
		$modal.modal();
	});
}

function ToggleUIStyle(v){
	$.ajax({
		url: "global.php?ToggleUIStyle=" + v,
		context: document.body
	}).done(function(e) {
		location.reload();
	});
}