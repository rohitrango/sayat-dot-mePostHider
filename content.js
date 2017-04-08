function removePosts() {
	var posts = document.getElementsByClassName("fbUserContent");
	for(var i=0; i<posts.length; i++) {
		var links = posts[i].getElementsByTagName('a');
		for(var j=0; j<links.length; j++) {
			if(links[j].href.search("sayat.me") != -1) {
				posts[i].classList.add("deleteThisShit");
			}
		}
	}
	var z = document.getElementsByClassName('deleteThisShit');
	while(z.length) {
		z[0].remove();
	}
}

var t = setInterval(removePosts, 1000);