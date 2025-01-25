const btn = document.getElementById("my-button");
// getting the button through the id named "my-button"
btn.addEventListener("click", () => {
    // adding a method for the object "button" to "fire" an "event",meaning so itdoes something. 
    // tere are 2 parameters: the name of the event - "click", 
    // and the function to call when the event happens.
    alert("You clicked me!");
    console.log("You clicked me!");
    // this is a comment as per excercise 2 step 4.
});