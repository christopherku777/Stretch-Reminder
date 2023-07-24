// Function to display the popup
function showPopup() {
  const popup = document.getElementById('popup-content');
  popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup-content');
  popup.style.display = 'none';
}

// Schedule the alarm to show the popup every 30 minutes
chrome.alarms.create({ delayInMinutes: 30, periodInMinutes: 30 });

// Handle the alarm event
chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === 'stretchReminder') {
    showPopup();
  }
});

// Hide the popup when clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('popup-content').addEventListener('click', hidePopup);
});

// Hide the popup after a few seconds (adjust the value as needed)
setTimeout(hidePopup, 5000);
