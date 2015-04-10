var wordCount = function(input){

    var input_array = input.split(" ");
    var count = 1;
    var word_object = {};

    // if (input_array.length === 1){
    //     var key = input_array[0];
    //     word_object[key] = count;
    //
    // };
    //
    // if (input_array.length >1){
    //
    //     input_array.forEach(function(one){
    //         var keys_array = Object.keys(word_object);
    //         if (keys_array.length == 0) {
    //             word_object[one] = count;
    //         } else if(keys_array.indexOf(one) !== -1){
    //             var one_count = word_object[one];
    //             one_count = one_count + 1;
    //             word_object[one] = one_count;
    //         } else {
    //             word_object[one] = count;
    //         }
    //  });
    //  };

     for (var i in input_array){
       if (!word_object.hasOwnProperty(input_array[i])){
         word_object[input_array[i]] = 1;
       } else {
         word_object[input_array[i]]++;
       }
     }

     var sorted_words = [];
     for (var word in word_object){
       sorted_words.push([word, word_object[word]]);
     }


     sorted_words.sort(function(word1, word2){
       return word2[1] - word1[1];
     });

     var final = [];
     for (var i in sorted_words){
       final.push(sorted_words[i][0]);
     }

    return sorted_words;

};

jQuery(document).ready(function(event){
  $("#word-order").submit(function(event) {
  var words = $("#words").val();
  var order = wordCount(words);
  $("#order").text(order[0]);

  for (var i in order){
    $("#order").append(", " + order[i]);
  }

  $("#result").show();
  event.preventDefault();
});
});
