$(document).ready(function() {
    // Simulated initial message from the bot
    const initialMessage = 'Hello! Nice to meet you.';
    displayBotMessage('Jamie', initialMessage);
  
    $('#send-btn').on('click', function() {
      sendMessage();
    });
  
    $('#user-input').keypress(function(e) {
      if (e.which === 13) {
        sendMessage();
      }
    });
  });
  
  function sendMessage() {
    const userInput = $('#user-input').val();
  if (userInput.trim() === '') return;

  displayUserMessage('You', userInput);

  // Check if the user's input contains a question mark
  if (userInput.includes('?') && userInput.includes('!')) {
    setTimeout(function() {
      displayBotMessage('Jamie', 'Please give me some time to resolve the issue.');
    }, 500);
  } else if (userInput.includes('?')) {
    setTimeout(function() {
      displayBotMessage('Jamie', 'Yes');
    }, 500);
  } else if (userInput.includes('!')) {
    setTimeout(function() {
      displayBotMessage('Jamie', 'Please remain calm.');
    }, 500);
  } else if (userInput.includes('Jamie')) {
    setTimeout(function() {
      displayBotMessage('Jamie', 'Can I help you?');
    }, 500);
  } else { // Default
    setTimeout(function() {
      displayBotMessage('Jamie', 'Sorry, I don’t understand.');
    }, 500);
  }

  $('#user-input').val('');
  }
  
  function displayBotMessage(sender, message) {
    const timestamp = getCurrentTimestamp();
    $('#chat-messages').append(`
        <div class="sender-name fw-bold">${sender}</div>
        <div class="message bot-message">
            ${message}
            <div class="timestamp-bot">${timestamp}</div>
        </div>`
    );
    scrollToBottom();
  }
  
  function displayUserMessage(sender, message) {
    const timestamp = getCurrentTimestamp();
    $('#chat-messages').append(`
        <div class="sender-name text-end">${sender}</div>
        <div class="message user-message">
            ${message}
            <div class="timestamp-user">${timestamp}</div>
        </div>`
    );
    scrollToBottom();
  }
  
  function scrollToBottom() {
    $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
  }
  
  function getCurrentTimestamp() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }