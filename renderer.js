// renderer.js
// This file handles what happens inside the page.
// It listens for form submissions and adds messages to the chat.

// Find the form, input, and messages area from the HTML.
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

// Listen for when the user submits the form.
messageForm.addEventListener("submit", function (event) {
  // Stop the page from refreshing when the form submits.
  event.preventDefault();

  // Get the message text and remove extra spaces.
  const messageText = messageInput.value.trim();

  // If the input is empty, do not send anything.
  if (messageText === "") {
    return;
  }

  // Create a new div for the message bubble.
  const newMessage = document.createElement("div");

  // Add the message and sent classes so it looks like our own message.
  newMessage.classList.add("message", "sent");

  // Add the user's message inside the bubble.
  newMessage.innerHTML = `<p>You: ${messageText}</p>`;

  // Add the new message to the messages area.
  messages.appendChild(newMessage);

  // Clear the input after sending.
  messageInput.value = "";

  // Scroll to the latest message.
  messages.scrollTop = messages.scrollHeight;
});