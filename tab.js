var panels = $('.board section');
var tabs = $('.tab a');
// var panels = $('.board section');
// var tabs = $('.tab a');

tabs.click(function(e){
// tabs.click(function(e){
// 	e.preventDefault();
// 	panels.removeClass('board-act');
// 	$(this).parent().parent().addClass('board-act');
// });

var tabs = $('.tab-list [role="tab"]');

tabs.on('click', function(e){
	e.preventDefault();
	panels.removeClass('board-act');
	$(this).parent().parent().addClass('board-act');
	$(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
	var selectedId = '#' + $(this).attr('aria-controls');
	$(selectedId).addClass('section-act').siblings().removeClass('section-act');
});