background_color.oninput = function() {
    document.body.style.backgroundColor = this.value;
}
clear.onclick = function() {
    localStorage.removeItem("savedPosts");
    forever.innerHTML = "";
}

let posts = [];

if (localStorage.savedPosts) {
    let savedPosts = JSON.parse(localStorage.savedPosts);

    posts = savedPosts;

    posts.forEach( function(e) {
        let newP = document.createElement("p");
        newP.innerHTML = e.innerHTML;
        newP.style.color = e.color;
        forever.appendChild(newP);
    })
}

poster.onclick=function() 
{
    let newP = document.createElement("p");
    newP.style.color=cbutton.value;
    newP.innerHTML = lily.value+'<hr>';

    forever.appendChild(newP);

    // postData = {newP.innerHTML, newP.color};
    // posts.push(postData);
    // localStorage.savedPosts = JSON.stringify(posts);

}






















