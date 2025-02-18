// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    // Show a progress indicator (this is a simple example)
    const progress = document.createElement('div');
    progress.innerText = 'Uploading...';
    document.body.appendChild(progress);
});
