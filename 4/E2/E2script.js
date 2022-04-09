$(function(){

    let size = 2, words_generated = 0;

    let generated = new Array(size); 
    let word1 = new Array('appropriately', 'assertively');
    let word2 = new Array('actualize', 'administrate');
    let word3 = new Array('accurate', 'adaptive');
    let word4 = new Array('action items', 'adoption');


    // Initialize the 4-dimensional array used to remember already used combinations of words - 0 means that the combination is ok to be generated
    var n, m, o;
    for(n = 0; n < size; n++){
        generated[n] = new Array(size);
        for(m = 0; m < size; m++){
            generated[n][m] = new Array(size);
            for(o = 0; o < size; o++){
                generated[n][m][o] = new Array(size);
            }
        }
    }
    
    var i, j, k, l;
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            for(k = 0; k < size; k++){
                for(l = 0; l < size; l++){
                    generated[i][j][k][l] = 0;
                }            
            }
        }
    }



    $("#main_button").click(function(){

        if(words_generated == size*size*size*size){
            $("#word_list").append("<li> All the possible combinations of words have been generated! </li>");
            return;
        }

        var w1 = 0, w2 = 0, w3 = 0, w4 = 0; 

        do{ 
            w1 = Math.floor(Math.random() * size);  // Math.random() = [0; 1)
            w2 = Math.floor(Math.random() * size);  // Math.floor(Math.random() * size) = [0, 1, 2, ..., size-1]
            w3 = Math.floor(Math.random() * size);   
            w4 = Math.floor(Math.random() * size);

        }while(generated[w1][w2][w3][w4] == 1);

        generated[w1][w2][w3][w4] = 1;

        let new_entry = word1[w1] + ' ' + word2[w2] + ' ' + word3[w3] + ' ' + word4[w4]; 
        words_generated++;

        $("#word_list").append("<li>" + new_entry + "</li>");
    });
   
  });