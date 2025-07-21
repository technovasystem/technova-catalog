function toggleChat() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text) {
      const userMessage = document.createElement("div");
      userMessage.textContent = text;
      userMessage.style.margin = "0.5rem 0";
      chat.appendChild(userMessage);

      const botMessage = document.createElement("div");
      botMessage.textContent = "Gracias por tu mensaje. En breve te responderemos.";
      botMessage.className = "bot-message";
      chat.appendChild(botMessage);

      userInput.value = "";
    }
  });
});