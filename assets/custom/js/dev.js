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
                ' - '+ this.endDate + '</span>'+
                '<br/><span class="companyInfo">'+ this.address + '</span>'+
                '<br/><div class="jobDescription"><span >'+ this.description + '</span></div>'+
                '<br/></li>');
            });
        }
    });

    $.ajax({
        url: 'https://jkjavier.github.io/data/skills.json',
        //url: './data/skills2.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            console.log(response.softwareDevelopment);
            
            skills.append('<li class="skillsList"><span class="skillsHeader">Software Development : </span><span class="skillsContent">'+response.softwareDevelopment+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Web Development : </span><span class="skillsContent">'+response.webDevelopment+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Databases : </span><span class="skillsContent">'+response.databases+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Frameworks : </span><span class="skillsContent">'+response.frameworks+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Build Tools : </span><span class="skillsContent">'+response.buildTools+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">APIs : </span><span class="skillsContent">'+response.apis+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Platforms : </span><span class="skillsContent">'+response.platforms+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Version Control : </span><span class="skillsContent">'+response.versionControl+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Unit Tests : </span><span class="skillsContent">'+response.unitTests+'</li><br/>');
            skills.append('<li class="skillsList"><span class="skillsHeader">Others : </span><span class="skillsContent">'+response.others+'</li><br/>');
//            $.each(response, function(res){
//                console.log(res);
//                console.log(res);
//                $.each(res, function(content){
//                    console.log(this);
//                });
//            });
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
