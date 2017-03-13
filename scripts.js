var a = 1;
var b = prompt('Wpisz dowolną cyfrę'); 
var value = (a * a) + (2 * a * b) - (b * b);
console.log('Sprawdź wynik działania');
	if ( value > 0 ){
    console.log('wynik dodatni');
	} else if (value < 0){
	console.log('wynik ujemny');
} else { console.log('wynik jest równy zero');
}