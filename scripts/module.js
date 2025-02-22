Hooks.on("ready", () => {
    ChatMessage.create({
        content: "Ailith module is active"
    });
});

Hooks.on("chatMessage", (chatLog, message, chatData) => {
    fetch("http://localhost:8000/ai-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
        .then(res => res.json())
        .then(data => {
            ChatMessage.create({ content: data.reply });
        })
        .catch(console.error);
});