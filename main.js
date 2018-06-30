var first_n = 0;
var firstP_n;
var second_n = 0;
var secondP_n;
var add_n;
var sub_n;
var multi_n;
var div_n;
var pow_n;
var sqr_n;
var answer_cal;
var answer_funct;

  answer_cal = prompt("What Calculator Would You Like To Use: (A) = ADVANCED (B)= BASIC");
  String(answer_cal);

if (answer_cal.toUpperCase() == "A")
{
alert("<Selected> ADVANCED Calculator");
answer_funct = prompt("What Function Would You Like To Perform: POW(Num^N) SQRT(SQUARE ROOT) ");

if (answer_funct.toUpperCase() == "POW")
{
  alert("<Selected> n to the POWER")
  firstP_n = prompt("What Is Your First Number: ");
  secondP_n = prompt("What Is Your Second Number: ");
  numPow_n = Math.pow(Number(firstP_n),Number(secondP_n));
  alert(firstP_n + " ^" + secondP_n + " = " + numPow_n);
}
else if (answer_funct.toUpperCase() == "SQRT")
{
  alert("<Selected> SQUARE ROOT")
  firstSQ_n = prompt("What Is Your First Number: ");
  numSQ_n = Math.sqrt(Number(firstSQ_n));
  alert(firstSQ_n + " SQUARE ROOT "+ " = " + numSQ_n);
}

else
{
  alert("<ERROR> Please Enter The Correct Value");
  answer_funct = prompt("What Function Would You Like To Perform: POW(Num^N) SQR(SQUARE ROOT) ");
}
}

else if (answer_cal.toUpperCase() == "B")
{
alert("<Selected> BASIC Calculator");
answer_funct = prompt("What Function Would You Like To Perform: ADD(+) SUB(-) MULTI(*) DIV(/) ");

if (answer_funct.toUpperCase() == "ADD" || "+")
{
  alert("<Selected> ADDITION")
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  add_n = Number(first_n) + Number(second_n);
  alert(first_n + " + " + second_n + " = " + add_n);
}
else if (answer_funct.toUpperCase() == "SUB" || "-")
{
  alert("<Selected> SUBTRACTION")
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  sub_n = Number(first_n) - Number(second_n);
  alert(first_n + " - " + second_n + " = " + sub_n);
}

else if (answer_funct.toUpperCase() == "MULTI" || "*")
{
  alert("<Selected> MULTIPLICATION")
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  multi_n = Number(first_n) * Number(second_n);
  alert(first_n + " x " + second_n + " = " + multi_n);
}

else if (answer_funct.toUpperCase() == "DIV" || "/")
{
  alert("<Selected> DIVISION")
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  div_n = Number(first_n) / Number(second_n);
  alert(first_n + " / " + second_n + " = " + div_n);
}

else
{
  alert("<ERROR> Please Enter The Correct Value");
  answer_funct = prompt("What Function Would You Like To Perform: ADD(+) SUB(-) MULTI(*) DIV(/) ");
}

}

else
{
alert("<ERROR> Please Enter The Correct Value");
answer_cal = prompt("What Calculator Would You Like To Use: (A) = ADVANCED (B)= BASIC");

}
