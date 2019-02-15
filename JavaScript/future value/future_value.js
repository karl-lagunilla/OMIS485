"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
	return futureValue;
}
var processEntries = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
    var errorMessage = "";

    if ((investment < 0) || (investment > 100000)) {
      errorMessage = "Investment is a number that's greater than zero and less than or equal to 100,000";
      $("investment").focus();
    }

    else if ((rate < 0) || (rate > 15)) {
      errorMessage = "Interest rate is a number that's greater than zero and less than or equal to 15";
      $("rate").focus();
    }

    else if ((years < 0) || (years > 50)) {
      errorMessage = "Years is a number that's greater than zero and less than or equal to 50";
      $("years").focus();
    }

    if (errorMessage == "") {
      $("future_value").value	= calculateFV(investment,rate,years);
    }
    else {
      alert(errorMessage);
    }
}

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();
}
