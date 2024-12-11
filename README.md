# ChatGPT Markdown Remover

**ChatGPT Markdown Remover** is a simple and efficient Chrome extension that converts Markdown-formatted text into plain text. It removes headers, bold, italics, links, images, code blocks, blockquotes, strikethrough, and more—leaving you with clean, easily copyable plain text.

## Features

- **Instant Markdown to Plain Text Conversion:** Paste your Markdown content into the extension’s textbox and click "Convert" to instantly strip all formatting.
- **Easy Copying:** After conversion, simply click "Copy Text" to copy the plain text to your clipboard.
- **User-Friendly Interface:** A straightforward, minimal design ensures quick and easy usage without any learning curve.
- **Local Processing:** All operations occur locally within your browser, ensuring no external code fetches or data transmissions occur.

## How It Works

1. **Open the Extension:** After installing, click on the extension’s icon in the Chrome toolbar.
2. **Paste Your Markdown:** Insert your Markdown content into the provided textarea.
3. **Convert:** Click the "Convert" button to remove all Markdown formatting.
4. **Copy the Result:** Click "Copy Text" to copy your plain text result to the clipboard.

## Installation

### From Source (Unpacked)

1. **Download or Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/chatgpt-markdown-remover.git
   ```
2. **Open Chrome Extensions Page:**

   - Go to `chrome://extensions`
   - Enable **Developer mode** (toggle in the top-right corner)

3. **Load Unpacked Extension:**

   - Click **"Load unpacked"**
   - Select the `chatgpt-markdown-remover` directory that contains `manifest.json`

4. **Pin the Extension (Optional):**
   - Click the puzzle piece icon in the Chrome toolbar
   - Pin **"ChatGPT Markdown Remover"** for easy access

### From the Chrome Web Store (When Published)

- Visit the [Chrome Web Store](https://chrome.google.com/webstore)
- Search for **"ChatGPT Markdown Remover"**
- Click **"Add to Chrome"** and follow the prompts

## Directory Structure

```
chatgpt-markdown-remover/
├─ icons/
│  ├─ icon16.png
│  ├─ icon32.png
│  ├─ icon48.png
│  └─ icon128.png
├─ manifest.json
├─ popup.html
├─ popup.js
└─ README.md
```

- **manifest.json:** Defines the extension’s name, version, permissions, and default popup.
- **popup.html:** The HTML file for the extension’s UI.
- **popup.js:** The JavaScript logic that handles Markdown stripping and clipboard copying.
- **icons/**: Contains icon assets for the extension at various sizes.
- **README.md:** Project documentation.

## Permissions

This extension does not request any special permissions and does not use remote code. All code and resources are packaged within the extension.

## Privacy and Security

- **No Remote Code:** The extension does not load scripts from external servers.
- **Local Processing:** All text processing occurs within your browser, ensuring your data’s privacy.
- **No Data Collection:** The extension does not collect or transmit user data.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the extension, add features, or enhance its functionality.

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your changes.
3. **Open a pull request** detailing the improvements you’ve made.

## License

This project is released under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as you see fit, provided the terms of the MIT License are met.

---

**Enjoy a simpler Markdown-to-plain-text conversion experience with ChatGPT Markdown Remover!**
