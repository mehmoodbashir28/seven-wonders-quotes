let celebrities = [
	{	
		id: 1,
		name: "Taj MAhal",
		title: "Crown of the Palace",
		readMoreUrl: "https://en.wikipedia.org/wiki/Taj_Mahal",
		imgURL: "taj.jpg",
		quote: "The Taj Mahal rises above the banks of the river like a solitary tear suspended on the cheek of time."
	},

	{
		id: 2,
		name: "Petra",
		title: " World Heritage Site",
		readMoreUrl: "https://en.wikipedia.org/wiki/Petra",
		imgURL: "petra.jpg",
		quote: "Petra is a brilliant display of man's artistry in turning barren rock into a majestic wonder."
	},

	{
		id: 3,
		name: "Colosseum",
		title: "largest amphitheatre ever built",
		readMoreUrl: "https://en.wikipedia.org/wiki/Colosseum",
		imgURL: "Colosseum.jpg",
		quote: "Evil can also be beautiful. The Coliseum in Rome, for example, a wonderful structure with an awful past. Just think about the bloody gladiator fights there."
	},

	{
		id: 4,
		name: "Machu Picchu",
		title: "Icon Of The Empire In Peru",
		readMoreUrl: "https://en.wikipedia.org/wiki/Machu_Picchu",
		imgURL: "peru.jpg",
		quote: "Night falls over Machu Picchu to the sound of Abba's 'Dancing Queen"
	},

	{
		id: 5,
		name: "Chichen Itza",
		title: "The Castle",
		readMoreUrl: "https://en.wikipedia.org/wiki/Chichen_Itza",
		imgURL: "chichen.jpg",
		quote: "The Chichen Itza is just a pyramid with four sides, with stairs on each side leading to some kind of bungalow on the top."
	},

	{
		id: 6,
		name: "wall Of China",
		title: " The Longest Wall In The World",
		readMoreUrl: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
		imgURL: "wall-of-china.jpg",
		quote: "There in the mist, enormous, majestic, silent and terrible, stood the Great Wall of China. Solitarily, with the indifference of nature herself, it crept up the mountain side and slipped down to the depth of the valley."
	},


	{
		id: 7,
		name: "Christ The Redeemer",
		title: "Statue OF  2,310-foot.",
		readMoreUrl: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
		imgURL: "chirist.jpg",
		quote: "A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, "
	},

 // "edhi", "malala", "quaid-e-azam"
 ];
	

function initialize() {
	// console.log("assad")
	let celebritiesGroupEl = document.querySelector("#celebritries-List");
	for(let i = 0; i < celebrities.length; i ++){
		// console.log(celebrities[i])
		// bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image: url(images/"+ celebrities[i].imgURL+" )'> </div> "+ celebrities[i].name ;
		// bodyEl.innerHTML += celebrities[i].name;
		celebritiesGroupEl.innerHTML += `
					<div class="celebrity-img-div" 
					  style="background-image: url(images/${celebrities[i].imgURL})"
					  onclick="changeCeleb(${i})">
					  <p class="celebrity-img-text">${celebrities[i].name}</p>
				    </div>`
	}
	changeCeleb(0);
// 	function info(x){

// 	let display =parseInt(document.querySelector("div").id);
// 	console.log(display);
	
// 		display.innerHTML = celebrities[x].name+"\n"+celebrities[x].quote;

// }

}

function changeCeleb(celeIndex){
	document.querySelector("#celebrity-name").innerHTML = celebrities[celeIndex].name;
	document.querySelector("#celebrity-title").innerHTML = celebrities[celeIndex].title;
	document.querySelector("#celebrity-img").style["background-image"] = `url(images/${celebrities[celeIndex].imgURL})`;
	document.querySelector("#celebrity-quote").innerHTML = celebrities[celeIndex].quote;
	document.querySelector("#celebrity-link a").href = celebrities[celeIndex].readMoreUrl;
	
	// let rand1 = Math.floor(Math.random() * 255);
	// let rand2 = Math.floor(Math.random() * 255);
	// let rand3 = Math.floor(Math.random() * 255);
}


// function changeCeleb(){
// 	console.log("hi" + celeIndex);
// }