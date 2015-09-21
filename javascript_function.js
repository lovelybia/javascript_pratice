
var get_sum = function(m){
	var total  = 0 ;
	for(var index = 0  ; index <= m ;  index++ ){
		total = total + index;
	}
	return total;
}

var get_factorial_and_sum = function(m){
	var total = 1;
	for(var index = 1 ; index <= m; index++){
		total = total * index;
	} 
	return total + get_sum(m);
}

function sum_recursive(m){
	if(m <= 1 )
		return 1;
	return m + sum_recursive(m-1);
}

FirstletterUppercase.slice(0,1).toUpperCase() + FirstletterUppercase.slice(1).toLowerCase();

