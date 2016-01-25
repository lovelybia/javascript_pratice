
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



for( var index = 0; index < dinosaurs.length ; index++ ){ 
	if( index%2 == 0){
		console.log(dinosaurs[index]);
	} 
}


var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;

var animals = { 0:"Lion", 1:"Flamingo", 2:"Polar Bear", 3:"Boa Constrictor"};

animals[0];