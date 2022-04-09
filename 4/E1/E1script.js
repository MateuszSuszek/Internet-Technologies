$(function(){

    $("[name='items'] li").each(function() {

        $(this).html("<span style='color: lightgrey;'>" + $(this).text().toLowerCase().trim() + "</span>");
   
    });

    $("[name='searchphrase']").change(function(){

        var searchphrase = this.value.toLowerCase().trim();

        if(searchphrase.length >= 3){

            $("[name='items'] li").each(function() {

                var pos = $(this).text().toLowerCase().trim().indexOf(searchphrase);
                var d_text = $(this).text().toLowerCase().trim();

                if(pos >= 0){

                    var i, prefix = "", match ="", suffix = "";

                    for(i = 0; i < pos; i++){
                        prefix += d_text[i];
                    }

                    for(i = pos; i < pos + searchphrase.length; i++){
                        match += d_text[i];
                    }

                    for(i = pos + searchphrase.length; i < d_text.length; i++){
                        suffix += d_text[i];
                    }

                    //alert(prefix + suffix);

                    $(this).html("<span style='color: black;'>" + prefix + "</span>" +
                                 "<span style='color: yellow;'>"    + match  + "</span>" +
                                 "<span style='color: black;'>" + suffix + "</span>");
                    
                }else{

                    $(this).html("<span style='color: lightgrey;'>" + d_text + "</span>");

                }
            });

        }else{


            $("[name='items'] li").each(function() {

                $(this).html("<span style='color: lightgrey;'>" + $(this).text().toLowerCase().trim() + "</span>");
           
            });

        }
        
    });
   
  });