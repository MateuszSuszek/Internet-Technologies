$(document).ready(function(){

    $.get("https://cors-anywhere.herokuapp.com/https://tvn24.pl/najnowsze.xml", function(data) {

        var titles = data.getElementsByTagName("title");
        var contents = data.getElementsByTagName("description");
        var hyperlinks = data.getElementsByTagName("link");

        for(var i = 1; i <= 5; i++){
            $("#main_list").append("<li>Title: " + titles[i].childNodes[0].nodeValue + "<br> Content: " +
                                                   contents[i].childNodes[1].nodeValue + "<br> Hyperlink: " + 
                                                   hyperlinks[i].childNodes[0].nodeValue + "</li>");
        }
        

    });

  });

