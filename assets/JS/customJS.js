﻿
// Math wizzard calculations

$('#GoMath').click(function () {
    //Sum
    var Num1 = Number($('#math1').val());
    var Num2 = Number($('#math2').val());
    var Num3 = Number($('#math3').val());
    var Num4 = Number($('#math4').val());
    var Num5 = Number($('#math5').val());


    var sum = Num1 + Num2 + Num3 + Num4 + Num5;


    var output = ' The total sum of all the numbers ' + sum;
    $('#results1').text(output);

    //Product
    var Num1 = Number($('#math1').val());
    var Num2 = Number($('#math2').val());
    var Num3 = Number($('#math3').val());
    var Num4 = Number($('#math4').val());
    var Num5 = Number($('#math5').val());


    var product = Num1 * Num2 * Num3 * Num4 * Num5;


    var output = ' The total product of all the numbers ' + product;
    $('#results2').text(output);

    //Smallest Number
    var Num1 = Number($('#math1').val());
    var Num2 = Number($('#math2').val());
    var Num3 = Number($('#math3').val());
    var Num4 = Number($('#math4').val());
    var Num5 = Number($('#math5').val());


    var smallest = Math.min(Num1, Num2, Num3, Num4, Num5);


    var output = ' Your smallest number ' + smallest;
    $('#results3').text(output);


    //Biggest Number
    var Num1 = Number($('#math1').val());
    var Num2 = Number($('#math2').val());
    var Num3 = Number($('#math3').val());
    var Num4 = Number($('#math4').val());
    var Num5 = Number($('#math5').val());


    var biggest = Math.max(Num1, Num2, Num3, Num4, Num5);


    var output = ' Your biggest number ' + biggest;
    $('#results4').text(output);

    //Average Number
    var Num1 = Number($('#math1').val());
    var Num2 = Number($('#math2').val());
    var Num3 = Number($('#math3').val());
    var Num4 = Number($('#math4').val());
    var Num5 = Number($('#math5').val());


    var average = sum / 5;

    var output = ' The average of your number is ' + average;
    $('#results5').text(output);
})
//Hide Code
$("#MathTog").hide();

//Clear Math wizzard button
$("#ClearMath").click(function () {
    $("#math1,#math2,#math3,#math4,#math5").val("");
    $("#results1,#results2,#results3,#results4,#results5").text("");
})

//Show math code
$("#ShowMath").click(function () {
$("#MathTog").toggle();
})



//Click/Launch 
$("#PalCal").click(function () {

    //Collecting user input

    var userInput = $("#palInput").val();

    //Process input

    var message = palindrome(userInput);

    //Output results
    $("#PalRes").text(message);
})
//Palindrone Exercise
function palindrome(word) {
    var message = /[\W_]/g;
    var lowCaseStrip = word.toLowerCase().replace(message, "");
    var lowRevJoin = lowCaseStrip.split("").reverse().join(""); 

    if (lowCaseStrip === lowRevJoin) { $("#PalRes").text("Looks like  " + word + " is a palindrome! ") }
    else { $("#PalRes").text("Looks like the sequence entered is not a palindrome. ") }
        
}
//Palindrome clear
$("#clearPal").click(function () {
    $("#palInput").val('');
    $("#PalRes").text('');
})
$("#PalTog").hide();
$("#PalShow").click(function () {
    $("#PalTog").toggle();
})



//FizBuzz Launch
$("#fbGo").click(function () {
    var num1 = Number($('#FizNum1').val());
    var num2 = Number($('#FizNum2').val());
    var i;
    var result = "";

    for (i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 == 0) { result += ' FizzBuzz '; }
        else if (i % num1 == 0) { result += ' Fizz '; }
        else if (i % num2 == 0) { result += ' Buzz '; }
        else { result += i+'  '; }
    }

    $('#fbRes').text(result);
});
$("#fbClr").click(function () {
    $("#FizNum1,#FizNum2").val('');
    $("#fbRes").text('');
})
$("#fbTog").hide();
$("#fbShow").click(function () {
    $("#fbTog").toggle();
})