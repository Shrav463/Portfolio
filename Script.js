document.addEventListener("DOMContentLoaded", function() {
    const codeElement = document.getElementById("code-display");
    const outputElement = document.getElementById("output-display");
    const codeText = codeElement.textContent;
    const outputText = `
Hello I'm Shravani Kalisetty...
Software Engineer | Graduated in 2025
    `;
    const typingSpeed = 10; // Adjust typing speed (milliseconds per character)
    const displayDuration = 1000; // Duration to show the code before switching to output

    // Function to simulate typing effect
    function typeWriter(text, element, callback) {
        element.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, typingSpeed);
            } else if (callback) {
                setTimeout(callback, displayDuration);
            }
        }
        type();
    }

    // Function to display output text
    function showOutput() {
        codeElement.style.display = "none";
        outputElement.style.display = "block";
        outputElement.textContent = outputText;
    }

    // Start typing effect and then show output
    typeWriter(codeText, codeElement, showOutput);
});
