
    // Jquery click event

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


    var average = Num1 + Num2 + Num3 + Num4 + Num5 / 5;


    var output = ' The average of your number is ' + average;
    $('#results5').text(output);




})


