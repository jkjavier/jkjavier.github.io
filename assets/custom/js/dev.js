(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

    var employmentList = $('#employmentList');

    $.ajax({
        url: 'https://jkjavier.github.io/data/experience.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response);
            $.each(response, function(resp){
                employmentList.append('<li>'+this.position+'</li>');
            });

        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/skills.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(res){
              console.log(res);
            });
            console.log(response);
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/personal.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response);
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/education.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response);
        }
    });

}));
