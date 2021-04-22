
function abc() {
    let time = new Date();
    let sec = time.getSeconds() / 60 * 360;
    
    let min = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6;
    let hr = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30;
    
    animation = [
        `@keyframes sec-hand{from{trnsform: rotate(${sec}deg); }to{transform: rotate(${sec + 360})deg }}`,
        `@keyframes min-hand{from{trnsform: rotate(${min}deg); }to{transform: rotate(${min + 360})deg }}`,
        `@keyframes hr-hand{from{trnsform: rotate(${hr}deg); }to{transform: rotate(${hr + 360})deg }}`,
    ].join("");

    document.querySelector("#clock-animate").innerHTML = animation;
}