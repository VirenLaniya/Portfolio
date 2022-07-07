const primaryClr = "#0087ff";
// Set background and font color of code frames
// Why don't using CSS ? 
// --> Because If we do it by CSS then it may not reflate on some browser.
// --> Using javascript we can at least in some browser make the style visible
function applyFrameStyle(frame){
    frame.style.background = '#dddddd';
    frame.contentWindow.document.body.style.backgroundColor = '#dddddd';
    frame.style.color = 'black';
    frame.contentWindow.document.body.style.color = 'black';
}

// Appliying 
var codeFrames = document.querySelectorAll(".code-frame");
codeFrames.forEach(codeFrame => {
    applyFrameStyle(codeFrame);
});

// Function for changing frames and buttons styling according to frame
function frameChanger(buttons, frame) {

    // Initial focus button
    activeBtn(buttons[0]);

    buttons.forEach(btn => {
        // Button event listener
        btn.addEventListener('click', () => {

            // First we have set all buttons as not active
            buttons.forEach(button => {
                nonActiveBtn(button);
            });

            // Then set active button styling
            activeBtn(btn);

            // Set content in the frame
            var file = btn.getAttribute('id');
            frame.setAttribute('src', pathDir + file + ".txt");
        });
    });
}
function activeBtn(btn) {
    btn.style.backgroundColor = primaryClr;
    btn.style.color = "#ffffff";
}
function nonActiveBtn(btn) {
    btn.style.backgroundColor = "#dddddd";
    btn.style.color = "#000000";
}

let pathDir = "/res/code/";

// html-code-frame
let htmlFrame = document.querySelector('.html-code-frame');
let htmlFrameButtons = document.querySelectorAll('.html-file-btn');
frameChanger(htmlFrameButtons, htmlFrame);

// css-code-frame
let cssFrame = document.querySelector('.css-code-frame');
let cssFrameButtons = document.querySelectorAll('.css-file-btn');
frameChanger(cssFrameButtons, cssFrame);

// js-code-frame
let jsFrame = document.querySelector('.js-code-frame');
let jsFrameButtons = document.querySelectorAll('.js-file-btn');
frameChanger(jsFrameButtons, jsFrame);
