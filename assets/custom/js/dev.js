(function(code){
    code(window.jQuery, window, document);
}(function($, window, document){

    var employment = $('#employmentList');
    var skills = $('#skillList');
    var education = $('#education');
    var org = $('#affiliations');
    var personal = $('#personal');
    
    var infoMobile = $('#infoMobile');
    var infoEmail = $('#infoEmail');
    var infoWebsite = $('#infoWebsite');
    var infoFB = $('#infoFB');
    var infoTW = $('#infoTW');
    var infoIG = $('#infoIG');
    var infoGit = $('#infoGit');

    $.ajax({
        //url: 'https://jkjavier.github.io/data/experience.json',
        url: './data/experience.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(resp){
                employment.append('<li><b>'+this.position+'</b> '+
                '/ '+this.company+'<br/><span class="workDuration"> '+ this.startDate +
                ' - '+ this.endDate + '</span> ('+ this.duration +')'+
                ' <a class="links" href="'+this.companySite+'">'+ this.companySite + '</a>'+
                '<br/><div class="jobDescription"><span >'+ this.description + '</span></div>'+
                '<br/></li>');
            });
        }
    });

    $.ajax({
        //url: 'https://jkjavier.github.io/data/skills2.json',
        url: './data/skills2.json',
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
            skills.append('<li class="skillsList"><span class="skillsHeader">Others : </span><span class="skillsContent">'+response.others+'</li>');
        }
    });

    $.ajax({
        //url: 'https://jkjavier.github.io/data/personal.json',
        url: './data/personal.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            infoMobile.append(response.mobile);
            infoEmail.append(response.email);
            infoWebsite.append('<a href="'+responese.website+'">'+response.website+'</a>');
            infoFB.append(response.fb);
            infoTW.append(response.tw);
            infoIG.append(response.ig);
            infoGit.append(response.git);
        }
    });
    
    $.ajax({
        //url: 'https://jkjavier.github.io/data/affiliation.json',
        url: './data/affiliation.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(content){
                org.append('<li><b>'+this.position+
                '</b> / '+this.startDate+' - '+this.endDate+
                '</br>'+this.organization+
                '</br>'+this.description+
                '</li></br>');
            });
        }
    });

    $.ajax({
        //url: 'https://jkjavier.github.io/data/education.json',
        url: './data/education.json',
        dataType: 'json',
        type: 'get',
        success: function(response){
            $.each(response, function(content){
                education.append('<li><b>'+this.course+
                '</b> / '+this.startDate+
                ' - '+this.endDate+
                '</br>'+this.university+
                '</br><b>Dissertation</b>: '+this.dissertation+
                '</li></br>');
            });
        }
    });

}));
