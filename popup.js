// Function to remove common Markdown formatting
function stripMarkdown(text) {
    // Remove code blocks (```...```)
    text = text.replace(/```[\s\S]*?```/g, '');
    
    // Remove inline code (`...`)
    text = text.replace(/`[^`]*`/g, '');
    
    // Remove bold/italic indicators
    text = text.replace(/(\*\*|__)(.*?)\1/g, '$2'); // bold
    text = text.replace(/(\*|_)(.*?)\1/g, '$2');    // italics
    
    // Remove links but keep link text: [text](url)
    text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
    
    // Remove images: ![alt](url)
    text = text.replace(/!\[(.*?)\]\(.*?\)/g, '$1');
    
    // Remove headings #, ##, etc.
    text = text.replace(/^#{1,6}\s+/gm, '');
    
    // Remove blockquotes
    text = text.replace(/^\s*>+\s?/gm, '');
    
    // Remove strikethrough ~~text~~
    text = text.replace(/~~(.*?)~~/g, '$1');
    
    // Trim multiple spaces
    text = text.replace(/\s{2,}/g, ' ');
    
    return text.trim();
  }
  
  document.getElementById('convertBtn').addEventListener('click', () => {
    const inputText = document.getElementById('markdownInput').value;
    const plainText = stripMarkdown(inputText);
    document.getElementById('result').textContent = plainText;
  });
  
  document.getElementById('copyBtn').addEventListener('click', () => {
    const resultText = document.getElementById('result').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
  