// Business Side

var guesser = function(input1, input2, input3) {
  if (input1 + input2 <= input3 || input2 + input3 <= input1 || input3 + input1 <= input2) {
    return "Not a triangle";
  } else if (input1 === input2 && input2 === input3) {
    return "Equilateral";
  } else if (input1 === input2 || input2 === input3 || input3 === input1) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}



// User Side

$(document).ready(function(){
  $("#sides").submit(function(event){
    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());

    $(".result").text(guesser(side1Input,side2Input,side3Input));
    event.preventDefault();

  });
});


//
//
// input1 + input2 >= input3 || input2 + input3 >= input1 || input3 + input1 >= input2)


// (input1 === input2 && || input2 === input3 || input3 === input1) && (input1 + input2 <= input3 || input2 + input3 <= input1 || input3 + input1 <= input2)
//
// input1 + input2 <= input3 || input2 + input3 <= input1 || input3 + input1 <= input2
//
// input1 != input2 && input2 != input3 && input3 != input1
