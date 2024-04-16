// Since content.js is actually injected and run within the context of the webpage,
// it can directly access the DOM and return values.
function extractJobDetails() {
    const jobDetailsContainer = document.getElementById('job-details');
    return jobDetailsContainer ? jobDetailsContainer.innerText : '';
}

// If you prefer to use messaging between content.js and popup.js, you would set up a message listener here.
// However, for this implementation, we are directly injecting the extractJobDetails function via executeScript.
