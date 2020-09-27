const btn = document.querySelector(".btn");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Speech = new SpeechRecognition();
Speech.lang = "en-US";
btn.addEventListener("click", () => {
    Speech.start();
});
Speech.onend = () => {
    console.log("صحبت شما به اتمام رسید");
};
Speech.onstart = () => {
    console.log("صحبت شما شروع شد");
};
Speech.onresult = (event) => {
    const text = event.results[0][0].transcript.toLowerCase();
    btn.innerHTML = text;
    let response = "wow";
    switch (text) {
        case "hello":
        case "hi":
        case "salam":
            response = "hi";
            break;
        case "bye":
        case "goodbye":
        case "good bye":
        case "khodafez":
            response = "goodbye agha nima";
            break;
        case "how are you":
        case "chetori":
        case "ch tori":
        case "che tori":
            response = "i am good what is about you";
            break;
        case "java":
        case "javascript":
        case "react":
        case "flutter":
            response = "You Love This Technology";
            break;
        case "what's your name":
        case "what is your name":
        case "tell me your name":
        case "tell me about yourself":
            response = "i am eliot the google assistant";
            break;
        case "what date to it":
        case "tell me about date for today":
            response = new Date(Date.now()).toISOString();
            break;
        case "time":
            response = new Date(Date.now()).getTime();
            break;
        case "location":
            response = "iran tehran shahriar";
            break;
        case "dina":
            response = "dina is always zer mizaane";
            break;
        default:
            response = "nima plaese repeat again";
            break;
    }
    const speaker = new SpeechSynthesisUtterance();
    speaker.text = response;
    speechSynthesis.speak(speaker);
};