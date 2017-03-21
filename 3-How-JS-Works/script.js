///////////////////////////////////////
// Lecture: Hoisting

/*
// functions 
calculateAge( 1975 ); 
function calculateAge( yearOfBirth ) {
    console.log( 2017 - yearOfBirth )
}
calculateAge( 1990 );

//retirement( 1965 );
var retirement = function(yearOfBirth) {
    console.log( 65 - ( 2016 - yearOfBirth ) );
}
retirement( 1975 );

// variables
console.log( 'age ' + age );
var age = 23;
console.log( 'age ' + age );

function foo() {
    var age = 65;
    console.log( 'age in function ' + age );
}
foo();
console.log( 'age ' + age );
*/










///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
calculateAge( 1985 );

function calculateAge( year ) {
    console.log( 2017 - year );
    console.log( this );
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log( this );
        console.log( 'age ' + ( 2017 - this.yearOfBirth ) );
        
        function innerFunction() {
            console.log( this );
        }
        innerFunction();
    }
}

john.calculateAge();






