function playWish() {
    const name = document.getElementById("nameInput").value.trim();
    const greeting = document.getElementById("greeting");
    const audio = document.getElementById("diwaliAudio");

    if (name) {
        greeting.textContent = `Dear ${name}, from Barinder Singh, Happy Diwali! 🎉`;

        // Attempt to play audio on button click
        audio.currentTime = 0; // Start from the beginning of the song
        audio.volume = 1.0;    // Ensure volume is set to maximum
        audio.play().then(() => {
            console.log("Audio playback started successfully.");
        }).catch((error) => {
            console.error("Audio playback failed:", error);
            alert("Audio could not be played due to browser restrictions. Please check your browser settings.");
        });
    } else {
        greeting.textContent = "Please enter your name to receive your Diwali wish!";
    }
}
