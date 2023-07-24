// Function to display the popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Function to get the selected time increment from Chrome storage
function getTimeIncrement(callback) {
  chrome.storage.sync.get('timeIncrement', (data) => {
    const timeIncrement = parseInt(data.timeIncrement, 10) || 5; // Default to 5 minutes if not set
    callback(timeIncrement);
  });
}

// Schedule the alarm to show the popup based on the user's selected time increment
function scheduleAlarm() {
  getTimeIncrement((timeIncrement) => {
    chrome.alarms.create('stretchReminder', { periodInMinutes: timeIncrement });
  });
}

// Handle the alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'stretchReminder') {
    showPopup();
    setTimeout(hidePopup, 5000); // Hide the popup after 5 seconds (adjust the value as needed)
  }
});

document.addEventListener('DOMContentLoaded', () => {
  scheduleAlarm();
});
