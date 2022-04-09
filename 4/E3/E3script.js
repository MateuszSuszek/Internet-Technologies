$(function(){

    $(".square").each(function(){

        $(this).data("marked", false);
        $(this).data("in_log", false);

        $(this).addClass("unmarked");
   
    });

    $(".square").click(function(){

        if($(this).data("marked")){

            $(this).data("marked", false);
            $(this).removeClass("marked");
            $(this).addClass("unmarked");
        
        }else{

            $(this).data("marked", true);
            $(this).removeClass("unmarked");
            $(this).addClass("marked");

        }
    });

    $("#mark_button").click(function(){

        $(".square").each(function(){

            if(!$(this).data("marked")){

                $(this).data("marked", true);
                $(this).removeClass("unmarked");
                $(this).addClass("marked");

            }
       
        });
    });

    $("#clear_button").click(function(){

        $(".square").each(function(){

            if($(this).data("marked")){

                $(this).data("marked", false);
                $(this).removeClass("marked");
                $(this).addClass("unmarked");
                
            }
       
        });
    });

    $("#add_button").click(function(){

        $(".square").each(function(){

            if($(this).data("marked") && !$(this).data("in_log")){

                $(this).data("in_log", true);
                $("#log").append("<span>" + $(this).attr('id') + "</span> ");;
                
            }
       
        });
    });
   
  });