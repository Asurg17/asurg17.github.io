

// ---------------------------------------
let maxSize = 6;
let num = 0;

function checkWindowSize(){

	var w = window.innerWidth;

	if(w <= 1550){
		
		maxSize = 5;
		
		document.getElementById("sport").style.display="none";

	}else{

		document.getElementById("sport").style.display="flex";

	}

	w = window.innerWidth;

	if(w <= 1350){
		
		maxSize = 4;

		document.getElementById("retro").style.display="none";

	}else{

		document.getElementById("retro").style.display="flex";

	}

	w = window.innerWidth;

	if(w <= 1150){
		
		maxSize = 3;

		document.getElementById("car").style.display="none";

	}else{

		document.getElementById("car").style.display="flex";

	}

	w = window.innerWidth;

	if(w <= 1000){
		
		maxSize = 2;

		document.getElementById("suv").style.display="none";

	}else{

		document.getElementById("suv").style.display="flex";

	}

	w = window.innerWidth;

	if(w <= 650){
		
		maxSize = 1;

		document.getElementById("minivan").style.display="none";

	}else{

		document.getElementById("minivan").style.display="flex";

	}

	w = window.innerWidth;

	//######################## 

	if(w > 650){
		maxSize = 2;
	}
	if(w > 1000){
		maxSize = 3;
	}
	if(w > 1150){
		maxSize = 4;
	}
	if(w > 1350){
		maxSize = 5;
	}
	if(w > 1550){
		maxSize = 6;
	}

}


// --------------------------------------------------------------------------------------
// Slider


function slideLeft() {

	let arr = document.querySelectorAll(".browse_cars_style");
	let size = arr.length;

	arr[(num)%size].style.display = "none";

	for (i=0; i<maxSize; i++){
		arr[(num + 1 + i)%size].style.order = i+1;
		arr[(num + 1 + i)%size].style.display = "flex";
	}

	num = num + 1;
}

function slideRight() {

	let arr = document.querySelectorAll(".browse_cars_style");
	let size = arr.length;

	index = (num+(maxSize-1))%size;

	arr[index].style.display = "none";

	index = index - maxSize;

	if(index < 0){
		index = size + index;
	}

	for (i=0; i<maxSize; i++){
		arr[(index+i)%size].style.order = i+1;
		arr[(index+i)%size].style.display = "flex";
	}	
	if(num == 0){
		num = size - 1;
	}else{
		num = num - 1;
	}

}

// --------------------------------------------------------------------------------------
function openLogInForm(){
	document.body.classList.add("showLogInForm");
}

function closeLogInForm(){
	document.body.classList.remove("showLogInForm");
}

function openSignUpForm(){
	document.body.classList.add("showSignUpForm");
}

function closeSignUpForm(){
	document.body.classList.remove("showSignUpForm");
}

function closeEveryForm(){
	document.body.classList.remove("showLogInForm");
	document.body.classList.remove("showSignUpForm");
}

// --------------------------------------------------------------------------------------
// var elems = document.body.getElementsByTagName("*");
// for(i=0; i<elems.length; i++){
// 	elems[i].style.display = "none";
// }
// --------------------------------------------------------------------------------------
function search(){
	window.location.href = "../Html/searchPage.html"
}

// Event listeners
window.addEventListener("resize", checkWindowSize);