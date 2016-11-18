(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

    var employmentList = $('#employmentList');
    
    $.ajax({
        url: './data/experience.json',
        dataType: 'json',
        type: 'post',
        success: function(response){
            console.log(response);
            $.each(response, function(resp){
                employmentList.append('<li>'+this.address+'</li>');
            });
            
        }
    });
    
    $.ajax({
        url: './data/skills.json',
        dataType: 'json',
        type: 'post',
        success: function(response){
            $.each(response, function(res){
//               console.log(res); 
            });
            console.log(response);
        }
    });
    
    $.ajax({
        url: './data/personal.json',
        dataType: 'json',
        type: 'post',
        success: function(response){
            console.log(response);
        }
    });
    
    $.ajax({
        url: './data/education.json',
        dataType: 'json',
        type: 'post',
        success: function(response){
            console.log(response);
        }
    });
    
}));