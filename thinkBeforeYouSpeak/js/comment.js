document.getElementById("submit").addEventListener("click", onSubmit);

let clicked = false;

function onSubmit(){
    //TODO: Ping user asking if they want to read this again and continue.

    if (!clicked) {
        alert("Read this again. Think about it.");
    } else {
        if (confirm("Would you repeat this to someone face to face? I'm giving you one more chance to not start a fight.")){
            alert("Come on. I expected better. Try again.");
            window.location = "index.html";
        } else {
            alert("Thank you.");
            window.location = "index.html";
        }
    }

    clicked = true;
}