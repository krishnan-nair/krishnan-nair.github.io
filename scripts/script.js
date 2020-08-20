//Dictionary used that matches the link's ID to the file name or link
linkDict = {
    "resume":"downloads/Krishnan Nair Resume Tech.pdf",
    "gitHub":"https://github.com/krishnan-nair",
    "gmail":"mailto:krishnannair12@gmail.com",
    "linkedin":"https://linkedin.com/in/krishnannair12/",
    "design":"downloads/Team 15 Final Report.pdf",
    "hiv":"downloads/HIV Model Report.pdf",
    "mem":"downloads/Memory Diagram.pdf",
    "uml":"downloads/uml.png",
    "ug":"downloads/User Guide for Student Interview Database.pdf"
}

$(document).ready(function(){
    //Function that opens the link in a new tab when clicked
    $(".preview").on("click", function() {
        var targetId = event.target.id;
        $.each(linkDict, function( key, value ) {
            if(targetId===key){
                window.open(value);
            }
          });          
     });
});



