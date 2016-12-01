(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

    var employment = $('#employmentList');
    var skills = $('#skillList');

    $.ajax({
        url: 'https://jkjavier.github.io/data/experience.json',
        //url: './data/experience.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(resp){
            	employment.append('<li><b>'+this.position+'</b> / '+this.company+
        		'<br/><span class="workDuration"> '+ this.startDate +
        		' - '+ this.endDate + '</span> '+
        		' <span class="companyInfo">'+ this.address + '</span>'+
                '<br/><div class="jobDescription"><span >'+ this.description + '</span></div>'+
                '<br/></li>');
            });
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/skills.json',
        //url: './data/skills.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(res){
            	skills.append(this.softwareDevelopment);
            });
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/personal.json',
        //url: './data/personal.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response);
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/education.json',
        //url: './data/education.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response);
        }
    });

}));
