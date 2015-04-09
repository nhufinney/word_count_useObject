var wordCount = function(input){

    var input_array = input.split(" ");
    var count = 1;
    var word_object = {};

    if (input_array.length === 1){
        var key = input_array[0];
        word_object[key] = count;

    };

    if (input_array.length >1){

        input_array.forEach(function(one){
            var keys_array = Object.keys(word_object);
            if (keys_array.length == 0) {
                word_object[one] = count;
            } else if(keys_array.indexOf(one) !== -1){
                var one_count = word_object[one];
                one_count = one_count + 1;
                word_object[one] = one_count;
            } else {
                word_object[one] = count;
            }
     });
     };









    return word_object;

};
