function onClickMenu(){
	document.getElementById("toggle-menu").classList.toggle("change");
    var navLinkContainer=document.getElementsByClassName('nav-links-container')[0];
    navLinkContainer.classList.toggle("forToggle");
}