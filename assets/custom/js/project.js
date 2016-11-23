(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

var firstBtn = $('#firstBtn');
var prevBtn = $('#prevBtn');
var nextBtn = $('#nextBtn');
var lastBtn = $('#lastBtn');

firstBtn.click(function(){
	console.log('Go to first.');
});

prevBtn.click(function(){
	console.log('Go up one step.');
});

nextBtn.click(function(){
	console.log('Go down one step.');
});

lastBtn.click(function(){
	console.log('Go to the last');
});

}));
