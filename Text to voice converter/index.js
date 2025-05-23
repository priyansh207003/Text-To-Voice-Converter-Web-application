let speech = new SpeechSynthesisUtterance();

let voices = []; 

let voiceselect = document.querySelector("select"); 

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); 
    speech.voice = voices[0]; 

    
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i); 
        voiceselect.options.add(option); 
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value; 
    speech.voice = voices[voiceselect.value]; 
    window.speechSynthesis.speak(speech); 
});