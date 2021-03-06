﻿// Need to shrink down
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


//Rebuild 
//Click/Launch 
$("#PalCal").click(function () {

    //Collecting user input

    var userInput = $("#palInput").val();

    //Process input

    var message = palindrome(userInput);

    //Output results
    $("#PalRes").text(message);
})
//Palindrome Exercise
function palindrome(word) {
    var message = /[\W_]/g; //Strips all unwanted characters from input.
    var lowCaseStrip = word.toLowerCase().replace(message, ""); //Changes the input word to lowercase and replaces the variable message with the lowercase version of the input.
    var lowRevJoin = lowCaseStrip.split("").reverse().join(""); //Takes the string value of lowCaseStrip and splits the string into an array afterwards reversing that string  and mashing them back together.

    if (lowCaseStrip === lowRevJoin) { $("#PalRes").text("Looks like  " + word + " is a palindrome! ") } // If both strings are equal in value and type the results of word are ouput to the results box.
    else { $("#PalRes").text("Looks like the sequence entered is not a palindrome. ") } //If they are not equal there is a generic ouput.

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


//Rebuild
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
        else { result += i + '  '; }
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

//Factorial

$("#facGo").click(function () {

    //User input value is received
    var fac1 = Number($('#facNum').val());
    //Variable for output value
    var result = fac1;
    // If user inputs values 0 or 1 return the value of 1 to the input box
    if (fac1 === 0 || fac1 === 1) {
        $("#facRes").text('1');
    } else {
        //Else the user adds a number above 1 run the while loop and take the input number and decrement it by 1 as long as the value is greater than zero. 
        while (fac1 > 1) {
            fac1--;
            result = result * fac1;
        }
        // Output results 
        $("#facRes").text(result);
    }

});
$("#facClr").click(function () {
    $("#facNum").val('');
    $("#facRes").text('');
})
$("#facTog").hide()
$("#facShow").click(function () {
    $("#facTog").toggle();
})