// Function to save the selected time increment to Chrome storage
function saveTimeIncrement() {
  const timeIncrementSelect = document.getElementById('timeIncrement');
  const selectedTimeIncrement = timeIncrementSelect.value;
  chrome.storage.sync.set({ timeIncrement: selectedTimeIncrement }, () => {
    alert('Time increment saved successfully!');
  });
}

// Function to restore the saved time increment from Chrome storage
function restoreTimeIncrement() {
  chrome.storage.sync.get('timeIncrement', (data) => {
    const timeIncrementSelect = document.getElementById('timeIncrement');
    timeIncrementSelect.value = data.timeIncrement || '5'; // Default to 5 minutes if not set
  });
}

document.addEventListener('DOMContentLoaded', () => {
  restoreTimeIncrement();
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', saveTimeIncrement);
});
