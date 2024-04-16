document.getElementById('extract').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: getPageText // Change 'function' to 'func'
        }, (injectionResults) => {
            // Check if there are results and if the frameResult is not empty.
            if (injectionResults && injectionResults.length > 0) {
                const result = injectionResults[0].result;
                if (result !== undefined) {
                    document.getElementById('text-container').textContent = result;
                }
            }
        });
    });
});

// This function gets injected into the current page and returns the text
function getPageText() {
    return document.body.innerText;
}
