// Function to generate a random 32-character alphanumeric ID with lowercase letters and numbers
function generateUniqueId() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    for (let i = 0; i < 32; i++) {
        uniqueId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return uniqueId;
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Function to show a temporary message
function showTemporaryMessage(message, targetElement) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.style.backgroundColor = 'lightgreen';
    messageElement.style.padding = '10px';
    messageElement.style.border = '1px solid green';
    messageElement.style.marginTop = '10px';
    messageElement.style.width = `${targetElement.offsetWidth}px`;
    messageElement.style.textAlign = 'center';
    messageElement.style.display = 'block';
    messageElement.className = 'fade-out';
    targetElement.parentNode.insertBefore(messageElement, targetElement.nextSibling);

    // Trigger the fade-out effect
    setTimeout(() => {
        messageElement.style.opacity = '0';
    }, 50); // Small delay to ensure the transition is applied

    // Remove the element after the fade-out effect
    setTimeout(() => {
        messageElement.parentNode.removeChild(messageElement);
    }, 2000);
}

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', () => {
    const uniqueId = generateUniqueId();
    document.getElementById('uniqueId').innerText = uniqueId;
    document.getElementById('copyButton').style.display = 'inline';
});

// Event listener for the copy button
document.getElementById('copyButton').addEventListener('click', (event) => {
    const uniqueId = document.getElementById('uniqueId').innerText;
    copyToClipboard(uniqueId);
    showTemporaryMessage('Copied to clipboard!', event.target);
});
