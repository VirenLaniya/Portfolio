
// Read more and Read less Toggling
const noOfChar = 300;
let contents = document.querySelectorAll(".blog-post-content");
console.log(contents);
contents.forEach(content => {
    if (content.textContent.length < 150) {
        content.nextElementSibling.style.display = "none";
    }
    else {
        let displayText = content.textContent.slice(0, noOfChar);
        let moreText = content.textContent.slice(noOfChar);
        content.innerHTML = `${displayText}<span class='dots'>...</span><span class='hide more-text'>${moreText}</span>`;
    }
});

var buttons = document.querySelectorAll('.read-more-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        var parentElement = button.parentElement;
        parentElement.querySelector('.dots').classList.toggle('hide');
        parentElement.querySelector('.more-text').classList.toggle('hide');
        if (button.textContent == "Read More")
            button.innerHTML = "Read Less";
        else
            button.innerHTML = "Read More";
    });
});

//Setting dates
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date=new Date();

var writtenDates=document.querySelectorAll('.written-date');

writtenDates.forEach(writtenDate=>{
    if(writtenDate.textContent ==""){
        writtenDate.innerHTML=months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();
    }
})