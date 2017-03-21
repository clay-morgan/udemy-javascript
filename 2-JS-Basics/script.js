var years = [1975, 1990, 2010, 1963];
var years2 = [1985, 1995, 2005, 2015];
var emptyArray = new Array();
for( var i = 0; i < years.length; i++ ){
    emptyArray.push( years[i] );
}

function isFullAge( age ) {
    if( ( 2017 - age ) >= 18 ){ 
        return true;
    } else {
        return false;
    }
}

for( var i = 0; i < years.length; i++ ){
    console.log( 'age ' + years[i] );
    if( isFullAge( years[i] ) ) {
        console.log( '(full age)' );
    }
}

function printFullAge( yearsArray ) {
    var isFullArray = new Array();
    for( var i = 0; i < yearsArray.length; i ++ ){
        isFullArray[i] = isFullAge( yearsArray[i] );
    }
    return isFullArray;
}

fullAge1 = printFullAge( years );
fullAge2 = printFullAge( years2 );
console.log( years );
console.log( fullAge1 );
console.log( years2 );
console.log( fullAge2 );

