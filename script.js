const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  // Only update if there is a message to show
  if (messageIndex < messages.length) {
    noButton.textContent = messages[messageIndex];
    
    // Increase the yes button's font size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    messageIndex++;
    
    // After showing the last message, hide the no button
    if (messageIndex === messages.length) {
      noButton.style.display = 'none';
    }
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
