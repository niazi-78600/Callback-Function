// Your JavaScript code

// Track the current background color state
let isBackgroundColorToggled = false;

// Function to toggle the background color
function toggleBackgroundColor() {
  // Get the content element
  const contentElement = document.getElementById('content');

  // Toggle the background color
  if (isBackgroundColorToggled) {
    contentElement.style.backgroundColor = '#ffffff';  // Set to white
  } else {
    contentElement.style.backgroundColor = '#ffeeaa';  // Set to a light yellow color (you can customize this)
  }

  // Update the state
  isBackgroundColorToggled = !isBackgroundColorToggled;

  // Additional actions you want to perform after toggling the background color
  // ...

  // Your callback function to be executed after toggling the background color
  function callback() {
    console.log('Background color toggled.');
  }

  // Call the callback function
  callback();
}
