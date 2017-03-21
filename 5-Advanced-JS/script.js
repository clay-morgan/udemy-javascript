// Option 1: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function( name, yearOfBirth, job ) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log( 2017 - this.yearOfBirth );
}

var john = new Person( 'John', 1990, 'teacher' );
var jane = new Person( 'Jane', 1969, 'designer' );
var mark = new Person( 'Mark', 1948, 'retired' );
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

// Option 2: Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log( 2017 - this.yearOfBirth );
    }
};

var john = Object.create( personProto );
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create( personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1990},
    job: {value: 'designer'}
});
*/

// function passed as arg (callback)
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc( array, fn ) {
    var arrayResponse = [];
    for( var i = 0; i < array.length; i++ ) {
        arrayResponse.push( fn(array[i]));
    }
    return arrayResponse;
}

function calculateAge( year ) {
    return 2017 - year;
}

function isFullAge( age ) {
    return age >= 18;
}

function maxHeartRate( age ) {
    if( age >= 18 && age <= 81 ) {
        return Math.round( 206.9 - (0.67 * age ) );
    } else {
        return -1;
    }
    
}

var ages = arrayCalc( years, calculateAge );
var fullAges = arrayCalc( ages, isFullAge );
var rates = arrayCalc( ages, maxHeartRate );

console.log( ages );
console.log( fullAges );
console.log( rates );
*/

// functions returning functions
/*
function interviewQuestion( job ) {
    if( job === 'designer' ) {
        return function( name ) {
            console.log( name + ', can you please explain what UX design is?' );
        }
    } else if ( job === 'teacher' ) {
        return function( name ) {
            console.log( 'What subject do you teach, ' + name + '?' );
        }
    } else {
        return function( name ) {
            console.log( 'Hello ' + name + ', who is your daddy and what does he do?' );
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion( 'John' );
teacherQuestion( 'Mark' );

interviewQuestion('teacher')('Clay');
*/

// Immediately invoked function expressions (IIFE)
/*
function game() {
    var score = Math.random() * 10;
    console.log( score >= 5 );
}
game();

( function() {
    var score = Math.random() * 10;
    console.log( score >= 5 );
})();
*/

// Closures
/*
function retirement( retirementAge ) {
    var ageMessage = ' years left until retirement';
    return function( yearOfBirth ) {
        var age = 2017 - yearOfBirth;
        console.log( ( retirementAge - age ) + ageMessage );
    }
}

var retirementUS = retirement( 66 );
retirementUS(1975);
retirement(66)(1975);



function interviewQuestion( job ) {
    if( job === 'designer' ) {
        return function( name ) {
            console.log( name + ', can you please explain what UX design is?' );
        }
    } else if ( job === 'teacher' ) {
        return function( name ) {
            console.log( 'What subject do you teach, ' + name + '?' );
        }
    } else {
        return function( name ) {
            console.log( 'Hello ' + name + ', who is your daddy and what does he do?' );
        }
    }
}
*/

// Bind, Call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function( style, timeOfDay ) {
        if( style === 'formal' ) { 
            console.log( 'Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + 
                        ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
        } else if ( style === 'friendly' ) {
            console.log( 'Hey what up I\'m ' + this.name + '. I\'m a ' + this.job + 
                        ', and I\'m ' + this.age + '. Have a nice ' + timeOfDay + '!');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 22,
    job: 'designer'
};

john.presentation( 'formal', 'morning' );

// call the presentation method of john, for emily (first arg is this variable)
john.presentation.call( emily, 'friendly', 'afternoon' );

// apply the presentation method of john (args as an array) - may not work in some browsers in this case as presentation doesn't
// expect an array
john.presentation.apply( emily, ['friendly', 'afternoon'] );

// bind method is similar to call (allows us to set 'this' explicitly) but doesn't immediately call function.
// instead it creates a copy of the function and stores it for later user
var johnFriendly = john.presentation.bind(john, 'friendly');        // note we don't set time of day here
johnFriendly( 'morning' );
johnFriendly( 'afternoon' );
johnFriendly( 'night' );

var emilyFormal = john.presentation.bind( emily, 'formal' );
emilyFormal( 'morning' );
emilyFormal( 'evening' );


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc( array, fn ) {
    var arrayResponse = [];
    for( var i = 0; i < array.length; i++ ) {
        arrayResponse.push( fn(array[i]));
    }
    return arrayResponse;
}

function calculateAge( year ) {
    return 2017 - year;
}

function isFullAge( countryLimit, age ) {
    return age >= countryLimit;
}

var ages = arrayCalc( years, calculateAge );
var fullAgeJapan = arrayCalc( ages, isFullAge.bind( this, 20 ) );
console.log( ages );
console.log( fullAgeJapan );

