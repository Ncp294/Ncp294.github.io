const posts = [
    ["The Release of the Epstein Files Means Trump Must Be Innocent", "Otherwise why wouldn't he be in jail right now if all of this was true?", 1], 
    ["Trump Has All the Right to Direct the DOJ as President", "He is in the highest state of power in the country, which gives him control over the government.", 1],
    ["100% of ICE Detainees are Criminals", "They have broken the law entering this country illegally, who says they won't do it again?", 1],
    ["Gender and Sexuality Discussion Should be Removed from all Schools", "We have seen the rise of LGBTQ people recently, and it is because of the constant shove down children's throats.", 1],
    ["ICE Agent's Information Should be Public and Available", "The same as it is for any other law enforcement, judges, etc.", 0],
    ["The Same People Who Said 'Don't Tread on Me' Now Let the Government Walk All Over Them", "They've been brainwashed into not putting up a fight anymore.", 0],
    ["It is Important for Children to Have Access to Gender Affirming Care", "Giving them the option to learn and consider does not 'turn them gay', just gives the comfort and opportunity to be open.", 0],
    ["Pronoun Preferences are Easy to and Should be Respected", "You would be upset if I called you by the wrong ones too wouldn't you?", 0]
]

let clicks  = {};
generatePosts();

function generatePosts() {
    const createdPosts = [];

    posts.forEach(function(post, index) {
        // pull text from posts db
        const t = document.createTextNode(post[0]);
        const c = document.createTextNode(post[1]);

        //create div, title, content, and comment icon elements
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const content = document.createElement("p");
        const comment = document.createElement("img");

        // populate text content
        title.appendChild(t);
        content.appendChild(c);

        // set up comment icon
        comment.src = "img/comment.png";
        comment.alt = "Comment button";
        comment.classList.add("commentButton");
        comment.id = "comment" + index;
        clicks[comment.id] = 0;
        comment.addEventListener("click", function(){commentClick(this.id)});

        //set postition and color
        div.id = "post" + index;
        div.classList.add("post");

        div.style.backgroundColor = post[2] ? "#eb9999" : "#a3c2f4"

        //nest all dom elements
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(comment);

        document.getElementById("posts").appendChild(div);

        // make sure no collision
        div.style.top = Math.floor(Math.random() * 1000 + 8) + "%";
        div.style.left = Math.floor(Math.random() * 400 + 22) + "%";
        const dim = div.getBoundingClientRect();
        while (checkCollision(dim, createdPosts)){
            div.style.top = Math.floor(Math.random() * 1000 + 8) + "%";
            div.style.left = Math.floor(Math.random() * 400 + 22) + "%";
        }

        //store div for collision
        createdPosts.push(div);
    });
}

function checkCollision(newDim, createdPosts) {
    let collision = false;

    for(let i = 0; i < createdPosts.length; i++) {
        if (collision) break;

        const postDim = createdPosts[i].getBoundingClientRect();
        if (newDim.left > postDim.right || newDim.right < postDim.left ||
            newDim.top > postDim.bottom || newDim.bottom < postDim.top) {
            collision = false;
        } else {
            collision = true;
        }
    }

    console.log(collision);

    return collision;
}

//TODO: finish this
/*
- after a few attempts, send out an alert
- if dismiss alert and click again, send to page with really long timer
    - write a lil goof at end of timer in case someone actually waits it out
*/

function commentClick(id) {
    const button = document.getElementById(id);

    button.style.bottom = Math.floor(Math.random() * 200 - 100) + "%";
    button.style.right = Math.floor(Math.random() * 100 - 50) + "%";

    clicks[id]++;
}