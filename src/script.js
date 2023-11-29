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
  
    // Simulating a response from the chatbot after a short delay
    setTimeout(function() {
      displayBotMessage('Chatbot Jamie', 'I am Jamie! How can I help you?'); // Simulated response
    }, 500);
  
    $('#user-input').val('');
  }
  
  function displayBotMessage(sender, message) {
    const timestamp = getCurrentTimestamp();
    $('#chat-messages').append(`
        <div class="sender-name fw-bold">${sender}</div>
        <div class="message bot-message text-start">
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
        <div class="message user-message text-end">
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