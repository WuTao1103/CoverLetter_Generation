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

## Video tutorial
YouTube:https://www.youtube.com/watch?v=IRBDrJrVaqI
Bilibili:
## License

Distributed under the Apache License. See `LICENSE` file for more information.

# 推荐信生成器 Chrome 扩展

这款 Chrome 扩展利用 OpenAI 强大的 GPT-3.5 Turbo 模型帮助用户基于职位描述、附加信息和简历生成个性化封面信。它还允许用户下载生成的推荐信为 Word 文档。

## 功能

- **提取职位描述**：自动从活动网页提取文本。
- **上传简历和附加信息**：用户可以上传他们的简历和任何附加信息作为文本文件。
- **生成推荐信**：使用 OpenAI 的 API 生成定制的推荐信。
- **导出为 Word**：允许下载生成的推荐信为 Word 格式。

## 安装

1. 克隆或下载此仓库到您的本地机器。
2. 打开 Google Chrome 并导航到 `chrome://extensions/`。
3. 通过在右上角勾选复选框来启用开发者模式。
4. 点击 "加载解压的扩展程序" 按钮。
5. 选择您克隆或下载此项目的目录。

## 配置您的 API 密钥

要使用这个扩展，您必须提供您自己的 OpenAI API 密钥。

### 获取 API 密钥

1. 在 [OpenAI](https://www.openai.com/) 创建账户并订阅适当的 API 计划。
2. 在您账户的 API 仪表板中找到您的 API 密钥。

### 插入您的 API 密钥

1. 打开扩展目录中的 `popup.js` 文件。
2. 定位 `generateCoverLetter` 函数中的 `fetch` 函数调用。
3. 将 `Authorization` 头中的 `KRY` 替换为您实际的 OpenAI API 密钥：

   ```javascript
   headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer YOUR_API_KEY_HERE'
   },
   ```
   例如：` 'Authorization': 'Bearer sk-sdqfq**************'`

4. 保存对 `popup.js` 的更改。
5. 通过在 `chrome://extensions/` 下点击您的扩展列表中的 `Reload` 链接来重新加载扩展。

### 安全提示

不要公开分享包含您 API 密钥的 `popup.js` 文件或任何文件。泄露可能导致未授权使用和可能滥用您的 OpenAI 账户。

## 使用方法

### 提取职位描述

1. 导航到包含职位描述的网页。
2. 点击扩展弹出窗口中的 `Extract Text` 按钮以捕获职位描述。

### 上传文件（如果您之前已添加插件，则忽略此步骤）

1. 点击扩展弹出窗口中的 `Upload Resume` 按钮并选择您的简历文件（.txt 格式）。
2. 点击 `Upload Info` 按钮上传需要的任何附加信息（.txt 格式）。

### 生成推荐信

1. 确保已上传所有必要文件并提取了职位描述。
2. 点击 `Generate Cover` 按钮在弹出窗口显示生成的推荐信。

### 导出推荐信

1. 如果对生成的推荐信满意，点击 `Export as Word Document` 将其下载为 .doc 文件。

## 贡献

欢迎贡献！如果您有改进的建议或发现了错误，请开设问题或提交拉取请求。

## 许可证

根据 Apache 许可证分发。有关更多信息，请查看 `LICENSE` 文件。