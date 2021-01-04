function tofublogStart(){
console.log("running")
	let bloggerID = prompt("Blogger/blogspot page URL:\n(put https)")
	console.log("URL asked")
let run = prompt("You really wants that Tofublog spam the blogger website?\nyes or not???")
console.log("Confirmation asked")
console.log("start running")
if (run == "yes") {
	setInterval(function(){
	window.open(bloggerID)
	console.log("opened")}, 1000);
	}   
} 
tofublogStart()
