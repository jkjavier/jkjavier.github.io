(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

    $.ajax({
        url: './data/resume.json',
        dataType: 'json',
        type: 'post',
        success: function(response){
            console.log(response);
        }
    });
    
}));