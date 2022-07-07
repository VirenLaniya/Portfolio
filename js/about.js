// Technical skills effect

var skillProgressBar = document.querySelectorAll(".skill-progress-bar");
var htmlProgress = document.querySelector("#skill-html .skill-progress-bar");
var cssProgress = document.querySelector("#skill-css .skill-progress-bar");
var jsProgress = document.querySelector("#skill-js .skill-progress-bar");
var nodejsProgress = document.querySelector("#skill-nodejs .skill-progress-bar");
var cProgress = document.querySelector("#skill-c .skill-progress-bar");
var javaProgress = document.querySelector("#skill-java .skill-progress-bar");
var mysqlProgress = document.querySelector("#skill-mysql .skill-progress-bar");
var mongodbProgress = document.querySelector("#skill-mongodb .skill-progress-bar");
var phpProgress = document.querySelector("#skill-php .skill-progress-bar");
var gitProgress = document.querySelector("#skill-git .skill-progress-bar");

window.addEventListener("scroll", () => {
    // Visibility of skill-progress-bar
    skillProgressBar.forEach((progress) => progress.style.visibility = "visible");

    // Defining Progress chart of skill
    htmlProgress.style.width = "85%";
    cssProgress.style.width = "85%";
    jsProgress.style.width = "80%";
    nodejsProgress.style.width = "70%";
    cProgress.style.width = "70%";
    javaProgress.style.width = "85%";
    mysqlProgress.style.width = "80%";
    mongodbProgress.style.width = "70%";
    phpProgress.style.width = "70%";
    gitProgress.style.width = "75%";
});


///// Followers Increasing effect /////

// function for followers counter for all social media platform
function followersCounter(socialMediaFollowers) {
    socialMediaFollowers.forEach(followers => {
        followers.innerText = "0";
        var target = +followers.getAttribute('followers-target');
        function updateCounter() {
            var currentVal = +followers.innerText;
            // var increasingVal=Math.ceil(target/250);
            var increasingVal = 3;
            if (currentVal < target - 5) {
                followers.innerText = currentVal + increasingVal;
                setTimeout(updateCounter, 15);
            }

            // For easy finish I add one more block you can also continue without following block
            else if (currentVal < target) {
                followers.innerText = currentVal + 1;
                setTimeout(updateCounter, 100);
            }

            else {
                followers.innerText = target;
            }
        };
        updateCounter();
    });
}

// Social media followers
var socialMediaFollowers = document.querySelectorAll('.social-media-followers');    //--> Twitter followers, Facebook followers, Insta. followers

// Creating object 'observer' of IntersectionObserver that takes on callback function
var observer = new IntersectionObserver(callback);

// callback function
function callback(entries) {
    /** Here We also have to put condition socialMediaFollowers[0]=="0" because only entries[0].isIntersecting is true on every 
     * interaction with followers but we only needs to run counter at once when user intersect with it. Initially followers are 
     * set as 0 and only that stage both condition will be true, followersCounter() will executes*/
    if (socialMediaFollowers[0].innerText == "0" && entries[0].isIntersecting) {
        followersCounter(socialMediaFollowers);
    }
}

// observer observes first child of socialMediaFollowers
observer.observe(socialMediaFollowers[0]);

