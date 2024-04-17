document.getElementById('extract').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (!tabs.length) {
            console.error('No active tabs found');
            document.getElementById('text-container').textContent = 'Error: No active tabs available.';
            return;
        }
        const activeTab = tabs[0];
        if (!/^https?:/.test(activeTab.url)) {
            document.getElementById('text-container').textContent = 'This extension only works on http and https pages.';
            return;
        }
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: extractContent,
        }, (injectionResults) => {
            if (chrome.runtime.lastError || !injectionResults || !injectionResults.length) {
                console.error('Script injection error:', chrome.runtime.lastError?.message);
                document.getElementById('text-container').textContent = 'Error extracting text: ' + (chrome.runtime.lastError?.message || "No result returned.");
                return;
            }
            document.getElementById('text-container').textContent = injectionResults[0].result || 'No text was extracted.';
        });
    });
});

document.getElementById('upload-resume').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get user-selected files
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem('resume', content);
            console.log('Resume uploaded and saved to localStorage.');
        };
        reader.onerror = function(e) {
            console.error('Failed to read file!', e);
        };
        reader.readAsText(file); // Reading files as text

    }
});

document.getElementById('upload-info').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get user-selected files
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const infoContent = e.target.result;
            localStorage.setItem('infoText', infoContent);
            console.log('Information text uploaded and saved to localStorage.');
        };
        reader.onerror = function(e) {
            console.error('Failed to read file!', e);
        };
        reader.readAsText(file);
    }
});



document.getElementById('generate-cover').addEventListener('click', function() {
    const resumeText = window.localStorage.getItem('resume');
    const jobDescription = document.getElementById('text-container').textContent;
    const additionalInfo = window.localStorage.getItem('infoText'); // Get message content from localStorage

    if (!additionalInfo) {
        alert('Please upload your information file first.');
        return;
    }
    if (!resumeText) {
        alert('Please upload your resume first.');
        return;
    }
    if (!jobDescription || jobDescription === 'No text was extracted.' || jobDescription === 'Error extracting text: No result returned.') {
        alert('Please extract the job details first.');
        return;
    }

    const prompt = `Create a cover letter based on this job description: "${jobDescription}" and this resume: "${resumeText}" Additional Information: "${additionalInfo}"`;
    generateCoverLetter(prompt);
});
function extractContent() {
    const jobDetails = document.getElementById('job-details');
    return jobDetails ? jobDetails.innerText : document.body.innerText;
}

function generateCoverLetter(jobDescription, resumeText,additionalInfo) {
    const prompt = `Create a cover letter based on this job description: "${jobDescription}" And my Information: "${additionalInfo}"and this resume: "${resumeText}"`;
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-proj-u6Pvbt50QnYmLGwKykwFT3BlbkFJqUGd9YbqQzveXk73BDSw'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "system",
                content: "You are a helpful assistant tasked with writing cover letters."
            }, {
                role: "user",
                content: prompt
            }]
        })
    })
        .then(response => {
            if (!response.ok) {
                // Logging the exact status code can help with debugging
                console.error('HTTP Error Response:', response.status, response.statusText);
                throw new Error(`HTTP Error Response: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                document.getElementById('cover-letter').textContent = data.choices[0].message.content;
            } else {
                document.getElementById('cover-letter').textContent = "No cover letter was generated.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(`Failed to generate cover letter due to an error: ${error.message}`);
        });
}
document.getElementById('export-word').addEventListener('click', function() {
    const coverLetterContent = document.getElementById('cover-letter').textContent;
    if (!coverLetterContent || coverLetterContent === "No cover letter was generated.") {
        alert("No cover letter to export. Please generate one first.");
        return;
    }
    downloadAsWord(coverLetterContent);
});

function downloadAsWord(text) {
    const header = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
        'xmlns:w="urn:schemas-microsoft-com:office:word" ' +
        'xmlns="http://www.w3.org/TR/REC-html40">' +
        '<head><meta charset="utf-8"><title>Export HTML To Doc</title></head><body>';
    const footer = '</body></html>';
    const sourceHTML = header + text.replace(/\n/g, '<br>') + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'cover-letter.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
