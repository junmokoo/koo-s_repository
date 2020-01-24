var colornumbers = 6
var colors = colorGenerator(colornumbers);
var squares = document.querySelectorAll(".square");
var pickedColor = selectColor();
var messageDisplay  = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colornumbers = 3
	colors = colorGenerator(colornumbers);
	pickedColor = selectColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){	
		squares[i].style.backgroundColor = colors[i];
	    } else {
		squares[i].style.display = "none";
	    }
	 }
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove('selected');
	colornumbers = 6
	colors = colorGenerator(colornumbers);
	pickedColor = selectColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){	
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	    }
	 }
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = colorGenerator(6);
	//pick a new random color from array
	pickedColor = selectColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//same meaning in here, resetButton=this
	this.textContent = "New Colors"

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

//use style.backgroundColor rather than style.background(it's compatible with more browsers)

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "correct!"; 
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
} 

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//How to use math.random()
//Math.floor(Math.random() * 6 + 1) -> it makes a number between 1 ~ 6

function selectColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorGenerator(num){
	var rgb_array = []
	for(var i=0; i < num; i++){
		rgb_array.push(randomRGB())
	}
	return rgb_array;
}	

function randomRGB(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

 

