/* Quadratic Generator */

/****************************************************************************************************************/
/* Author: Ammar Aldaoud																						*/
/* Date: 11/01/2018																								*/
/* Rev 0																										*/
/* Quadratic generator contains three functions:																*/
/* getQuadraticMinusMinus(idStringName,n1,n2)																	*/
/* getQuadraticMinusPlus(idStringName,n1,n2)																	*/
/* getQuadraticPlusPlus(idStringName,n1,n2)																		*/
/* Quadratic generator creates a quadratic at the HTML id specified by idStringName using MathJax				*/
/* n1 and n2 are random seed limits for the quadratic. The two quadratic roots will not be greater in magnitude */
/* n1 and n2																									*/
/* functions return document.getElementById(idStringName).innerHTML=<the requisite MathJax string>				*/
/****************************************************************************************************************/
var counter = 1;

imgClickAndChange.onclick = function(){
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/6pgcahu.png";
        counter++;
    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/bDwqPYD.png";
        counter++;
    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/ouA2BLO.png";
        counter++;
    }
	    else if(counter == 3){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/j86zA2Q.png";
        counter++;
    }
	    else if(counter == 4){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/frt1K9T.png";
        counter++;
    }

		    else if(counter == 5){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/Dgwa95U.png";
        counter++;
    }
		    else if(counter == 6){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/Lnt2cAg.png";
        counter++;
    }
		    else if(counter == 7){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/dEa50Q7.png";
        counter++;
    }
		    else if(counter == 8){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/a60MxwM.png";
        counter++;
    }
		    else if(counter == 9){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/nSENTNT.png";
        counter++;
    }
		    else if(counter == 10){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/YWyxRm0.png";
        counter++;
    }
			    else if(counter == 11){
        document.getElementById("imgClickAndChange").src = "https://imgur.com/JjfrRwg.png"
        counter = 0;
    }
};
/****************************************************************************************************************/
/* 											Begin function here 												*/
/****************************************************************************************************************/
var i = 0;

/* this for loop finds all the elements with the ID HideShow and hides them initially */
var hideShowHolder = document.getElementById("HideShow");
var hideShowHolder2 = document.getElementById("HideShow2");
var hideShowHolder3 = document.getElementById("HideShow3");
hideShowHolder.style.display = "none";
hideShowHolder2.style.display = "none";
hideShowHolder3.style.display = "none";

/* end for loop finds all the elements with the ID HideShow and hides them initially  */


/* this for loop finds all the elements with the class name answer and hides them initially */
var answerClassHolder = document.getElementsByClassName("answer");
for (i = 0; i < answerClassHolder.length; i++){
answerClassHolder[i].style.display = "none";
}
/* end for loop that finds all the elements with the class name answer and hides them initially */

function getQuadraticMinusMinus(idStringName,idStringNameAnswer,n1,n2){
/* begin creation of two negative roots to quadratic */
/*Specify limit of numbers that can be used as roots to generate quadratic */
/*idStringName is the id string matching the HTML element */
/* signs can be pp, pm, mm, (plus plus), (plus minus), (minus minus) and determines the sign of the roots */
let b = 0, c = 0;



/* generate roots here */
var prevGenFlag = 0;

while ( (b == 0) || (c == 0) || prevGenFlag ){
var x1 = Math.floor(Math.random() * n1)+1; 
var x2 = Math.floor(Math.random() * n2)+1; 

/* Expand into standard form */
b = x1+x2;
c = x1*x2;
/* end the creation of two negative roots to quadratic */
}
/* end while loop */




/*Create latex string based on generated roots */
if ( x2 == x1 ){
	document.getElementById(idStringNameAnswer).innerHTML="\\(=(x+"+x1+")^2\\)";
} else {
	document.getElementById(idStringNameAnswer).innerHTML="\\(=(x+"+x1+")(x+"+x2+")\\)";
}
document.getElementById(idStringName).innerHTML="\\(x^2+"+b+"x+"+c+"\\)";
}
/****************************************************************************************************************/
/* 											End function here 													*/
/****************************************************************************************************************/


/****************************************************************************************************************/
/* 											Begin function here 												*/
/****************************************************************************************************************/
function getQuadraticMinusPlus(idStringName,idStringNameAnswer,n1,n2){
/* begin creation of a positive and negative root to quadratic */
/*Specify limit of numbers that can be used as roots to generate quadratic */

/*idStringName is the id string matching the HTML element */
/* signs can be pp, pm, mm, (plus plus), (plus minus), (minus minus) and determines the sign of the roots */
/* Set roots to monic quadratic trinomial with integer solutions */
let b = 0, c = 0;
while ( (b == 0) || (c == 0) ){
var x1 = Math.floor(Math.random() * n1)+1; 
var x2 = Math.floor(Math.random() * n2)+1; 
x1 = -1*x1;

/* Expand into standard form */
b = x1+x2;
c = x1*x2;
}
/* end the creation of two negative roots to quadratic */

document.getElementById(idStringNameAnswer).innerHTML="\\(=(x"+x1+")(x+"+x2+")\\)";
/* Set signs in expression according to signs of b and c */
/*Create latex string based on generated roots */
let expression = "";
expression ="\\(x^2"+b+"x+"+c+"\\)";
if ( (b < 0) && (c < 0) ){
	expression = "\\(x^2"+b+"x"+c+"\\)";
}
if ( (b > 0) && (c < 0) ){
	expression = "\\(x^2+"+b+"x"+c+"\\)";
}
if ( (b < 0) && (c > 0) ){
	expression = "\\(x^2"+b+"x+"+c+"\\)";
}
if ( (b > 0) && (c > 0) ){
	expression = "\\(x^2+"+b+"x+"+c+"\\)";
}

if ( (b < 0) && (c < 0) && (b == -1) ){
	expression = "\\(x^2-x"+c+"\\)";
}
if ( (b > 0) && (c < 0) && (b == 1) ){
	expression = "\\(x^2+x"+c+"\\)";
}
if ( (b < 0) && (c > 0) && (b == -1) ){
	expression = "\\(x^2-x+"+c+"\\)";
}
if ( (b > 0) && (c > 0) && (b == 1) ){
	expression = "\\(x^2+x+"+c+"\\)";
}
/* Unusual conditions where the coefficient is one or zero*/

/* assign expression to place in HTML */
document.getElementById(idStringName).innerHTML = expression;

}
/****************************************************************************************************************/
/* 											End function here 													*/
/****************************************************************************************************************/

/****************************************************************************************************************/
/* 											Begin function here 												*/
/****************************************************************************************************************/
function getQuadraticPlusPlus(idStringName,idStringNameAnswer,n1,n2){
/* begin creation of two negative roots to quadratic */
/*Specify limit of numbers that can be used as roots to generate quadratic */


/*idStringName is the id string matching the HTML element */
/* signs can be pp, pm, mm, (plus plus), (plus minus), (minus minus) and determines the sign of the roots */
/* Set roots to monic quadratic trinomial with integer solutions */
let b = 0, c = 0;
while ( (b == 0) || (c == 0) ){
var x1 = Math.floor(Math.random() * n1)+1; 
var x2 = Math.floor(Math.random() * n2)+1; 

/* Expand into standard form */
b = x1+x2;
c = x1*x2;
}
b = -1*b;
/* end the creation of two negative roots to quadratic */
document.getElementById(idStringNameAnswer).innerHTML="\\(=(x-"+x1+")(x-"+x2+")\\)";
/*Create latex string based on generated roots */

document.getElementById(idStringName).innerHTML="\\(x^2"+b+"x+"+c+"\\)";
}
/****************************************************************************************************************/
/* 											End function here 													*/
/****************************************************************************************************************/

getQuadraticMinusMinus("Q1a","Q1aA",3,5);
getQuadraticMinusMinus("Q1b","Q1bA",7,6);
getQuadraticMinusMinus("Q1c","Q1cA",10,6);
getQuadraticMinusMinus("Q1d","Q1dA",14,15);
getQuadraticMinusPlus("Q2a","Q2aA",3,5);
getQuadraticMinusPlus("Q2b","Q2bA",7,6);
getQuadraticMinusPlus("Q2c","Q2cA",10,6);
getQuadraticMinusPlus("Q2d","Q2dA",14,15);
getQuadraticPlusPlus("Q3a","Q3aA",3,5);
getQuadraticPlusPlus("Q3b","Q3bA",7,6);
getQuadraticPlusPlus("Q3c","Q3cA",10,6);
getQuadraticPlusPlus("Q3d","Q3dA",14,15);
getQuadraticMinusPlus("Q4a","Q4aA",13,5);
getQuadraticMinusPlus("Q4b","Q4bA",17,16);
getQuadraticPlusPlus("Q4c","Q4cA",20,16);
getQuadraticMinusMinus("Q4d","Q4dA",25,21);

/* Check Entry task answer */
function CheckAnswer() {
	/*assign random integers between 2 and 9 to the number of animals there are */
	/* Gather student input about how many animals they think there are */
    var theAnswer = document.getElementById("AnswerInput").value;
	var AnswerHolder = "";
	/* Output correct or incorrect depending on student answer */
	if ( theAnswer == (("(x+12)(x+6)")||("(x+6)(x+12)")||("(x + 6)(x + 12)")||(" ( x + 6 ) ( x + 12 )"  ))) {
		AnswerHolder = "Correct!";
		hideShowHolder.style.display = "block";
	}
	else {
		AnswerHolder = "Try again";
	}
		document.getElementById("DisplayAnswerMarkingOne").innerHTML = AnswerHolder;
}
/* End check entry task 
/* Check Entry task answer */
function CheckAnswer2() {
	/*assign random integers between 2 and 9 to the number of animals there are */
	/* Gather student input about how many animals they think there are */
    var theAnswer2 = document.getElementById("AnswerInput2").value;
	var AnswerHolder2 = "";
	/* Output correct or incorrect depending on student answer */
	if ( theAnswer2 == (("(x-12)(x-6)")||("(x-6)(x-12)")||("(x - 6)(x - 12)")||(" ( x - 6 ) ( x - 12 )"  ))) {
		AnswerHolder2 = "Correct!";
		hideShowHolder2.style.display = "block";
	}
	else {
		AnswerHolder2 = "Try again";
	}
		document.getElementById("DisplayAnswerMarkingTwo").innerHTML = AnswerHolder2;
}
/* End check entry task answer */
/* Check Entry task answer */
function CheckAnswer3() {
	/*assign random integers between 2 and 9 to the number of animals there are */
	/* Gather student input about how many animals they think there are */
    var theAnswer3 = document.getElementById("AnswerInput3").value;
	var AnswerHolder3 = "";
	/* Output correct or incorrect depending on student answer */
	if ( theAnswer3 == (("(x-13)(x-12)"))) {
		AnswerHolder3 = "Correct!";
		hideShowHolder3.style.display = "block";
	}
	else {
		AnswerHolder3 = "Try again";
	}
		document.getElementById("DisplayAnswerMarkingThree").innerHTML = AnswerHolder3;
}
/* End check entry task answer */
/* Show answer takes the id when a letter is clicked and displays the answer */
function showAnswer(id){
if (id.style.display == "none"){
	id.style.display = "block";
} else {
	id.style.display = "none";
}
}


















