var b = "BASIC";
var a = "ADVANCED";

answer = prompt("What Calculator Would You Like To Use: (A) = ADVANCED OR (B)= BASIC");
String(answer);

if (answer.toUpperCase() == "A")
{
alert("<Selected> ADVANCED Calculator");
answer = prompt("What Function Would You Like To Perform: ADD(+) SUB(-) MULTI(*) DIV(/) ");

if (answer == "ADD" || "+")
{
  alert("<Selected> ADDITION")
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  add_n = first_n + second_n;
  alert("<ADDITION> ", first_n + " + " + second_n, " = ", add_n);
  answer = prompt("Would You Like To Go Back To The (Menu): Yes OR No");
if (answer.toUpperCase() == "YES"){answer = prompt("What Function Would You Like To Perform: ADD(+) SUB(-) MULTI(*) DIV(/) ");}
else if (answer.toUpperCase() == "NO")
{
  first_n = prompt("What Is Your First Number: ");
  second_n = prompt("What Is Your Second Number: ");
  add_n = first_n + second_n;
  alert("<ADDITION> ", first_n + " + " + second_n, " = ", add_n);
  answer = prompt("Would You Like To Go Back To The (Menu): Yes OR No");
 }

}

}
else if (answer.toUpperCase() == "B")
{
alert("BASIC Calculator <Selected>");
}
else
{
alert("Please Select (A) = ADVANCED OR (B)= BASIC");
answer = prompt("What Calculator Would You Like To Use: (A) = ADVANCED OR (B)= BASIC");
}
