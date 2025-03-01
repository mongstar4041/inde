function addMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message) {
        const notesList = document.getElementById('notes-list');
        const newMessage = document.createElement('li');
        newMessage.textContent = message;
        notesList.appendChild(newMessage);
        input.value = ''; // Clear the input field
    } else {
        alert("Please write a message before sending!");
    }
}