
var first_n = 0;
var firstP_n;
var second_n = 0;
var secondP_n;
var result;
var weight_b;
var height_b;
var answer_cal = 0;
var answer_funct;
var answer_Bmi;

answer_cal = prompt("What Calculator Would You Like To Use: (A) = ADVANCED (B)= BASIC");
String(answer_cal);

if (answer_cal.toUpperCase() == "A")
{
  alert("<Selected> ADVANCED Calculator");
  answer_funct = prompt("What Function Would You Like To Perform: POW(Num^N) SQRT(SQUARE ROOT) BMI ");
  if (answer_funct.toUpperCase() == "POW")
  {
    alert("<Selected> n to the POWER");
    firstP_n = prompt("What Is Your First Number: ");
    secondP_n = prompt("What Is Your Second Number: ");
    result = Math.pow(Number(firstP_n),Number(secondP_n));
    alert(firstP_n + " ^" + secondP_n + " = " + result);
  }
  else if (answer_funct.toUpperCase() == "SQRT")
  {
    alert("<Selected> SQUARE ROOT");
    firstSQ_n = prompt("What Is Your First Number: ");
    result = Math.sqrt(Number(firstSQ_n));
    alert(firstSQ_n + " SQUARE ROOT "+ " = " + result);
  }

  else if (answer_funct.toUpperCase() == "BMI")
  {
    alert("<Selected> BMI");
    answer_Bmi = prompt("What Version Would You Like: IMP-(Imperial) MET-(Metric)  ");
    if (answer_Bmi.toUpperCase() == "IMP")
    {
      alert("<Selected> BMI Imperial");
      weight_b = prompt("What Is Your Weight(lb): ");
      //80lb -> 36kilo
      height_b = prompt("What Is Your Height(INCH) Ensure Answer is Decimal: ");

    result = (Number(weight_b)/(Number(height_b)*Number(height_b))) * 703;
      alert("Your BMI(metric) Is: "+ result);
    }

    else if (answer_Bmi.toUpperCase() == "MET")
    {
      alert("<Selected> BMI Metric");
      weight_b = prompt("What Is Your Weight(kg): ");
      height_b = prompt("What Is Your Height(M): ");
      result = (Number(weight_b)/(Number(height_b)*Number(height_b)));
      alert("Your BMI(metric) Is: "+ result);
    }

    else
    {alert("<ERROR> Please Enter The Correct Value");}

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

  if (answer_funct.toUpperCase() == "ADD" || answer_cal == "+")
  {
    alert("<Selected> ADDITION")
    first_n = prompt("What Is Your First Number: ");
    second_n = prompt("What Is Your Second Number: ");
    result = Number(first_n) + Number(second_n);
    alert(first_n + " + " + second_n + " = " + result);
  }
  else if (answer_funct.toUpperCase() == "SUB" || answer_cal == "-")
  {
    alert("<Selected> SUBTRACTION")
    first_n = prompt("What Is Your First Number: ");
    second_n = prompt("What Is Your Second Number: ");
    result = Number(first_n) - Number(second_n);
    alert(first_n + " - " + second_n + " = " + result);
  }

  else if (answer_funct.toUpperCase() == "MULTI" || answer_cal == "*")
  {
    alert("<Selected> MULTIPLICATION")
    first_n = prompt("What Is Your First Number: ");
    second_n = prompt("What Is Your Second Number: ");
    result = Number(first_n) * Number(second_n);
    alert(first_n + " x " + second_n + " = " + result);
  }

  else if (answer_funct.toUpperCase() == "DIV" || answer_cal == "/")
  {
    alert("<Selected> DIVISION")
    first_n = prompt("What Is Your First Number: ");
    second_n = prompt("What Is Your Second Number: ");
    result = Number(first_n) / Number(second_n);
    alert(first_n + " / " + second_n + " = " + result);
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
    String(answer_cal);
}
