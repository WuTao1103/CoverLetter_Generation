# Cover Letter Generator Chrome Extension

This Chrome extension leverages OpenAI's powerful GPT-3.5 Turbo model to help users generate personalized cover letters based on a job description, additional information, and their resume. It also allows users to download the generated cover letter as a Word document.

## Features

- **Extract Job Description**: Automatically extract text from active web pages.
- **Upload Resume and Additional Information**: Users can upload their resume and any additional information as text files.
- **Generate Cover Letter**: Uses OpenAI's API to generate tailored cover letters.
- **Export to Word**: Enables downloading of the generated cover letter in Word format.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by checking the checkbox in the upper-right corner.
4. Click on the "Load unpacked" button.
5. Select the directory where you cloned or downloaded this project.

## Configuring Your API Key

To use this extension, you must provide your own OpenAI API key.

### Obtain an API Key

1. Create an account at [OpenAI](https://www.openai.com/) and subscribe to the appropriate API plan.
2. Find your API key in your account's API dashboard.

### Insert Your API Key

1. Open the `popup.js` file in the extension's directory.
2. Locate the `fetch` function call in the `generateCoverLetter` function.
3. Replace `KRY` in the `Authorization` header with your actual OpenAI API key:

   ```javascript
   headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer YOUR_API_KEY_HERE'
   },

​		Like:` 'Authorization': 'Bearer sk-sdqfq**************'`

4. Save the changes to `popup.js`.
5. Reload the extension at `chrome://extensions/` by clicking the `Reload` link under your extension's listing.

### Security Note

Do not share your `popup.js` file or any files containing your API key. Exposure can lead to unauthorized use and potential misuse of your OpenAI account.

## Usage

### Extract Job Description

1. Navigate to a web page containing the job description.
2. Click the `Extract Text` button in the extension popup to capture the job description.

### Upload Files(Ignore if you've already added the plugin before loading it)

1. Click the `Upload Resume` button in the extension popup and select your resume file (.txt format).
2. Click the `Upload Info` button to upload any additional information needed for your cover letter (.txt format).

### Generate Cover Letter

1. Ensure all necessary files are uploaded and the job description is extracted.
2. Click the `Generate Cover` button to display the generated cover letter in the popup window.

### Export Cover Letter

1. If satisfied with the generated cover letter, click `Export as Word Document` to download it as a .doc file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions for improvements or have found bugs.

## License

Distributed under the Apache License. See `LICENSE` file for more information.