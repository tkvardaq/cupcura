/**
 * Lightweight, robust Markdown to HTML parser for CupCura editorial articles.
 * Converts headings, bold, italic, bullet lists, numbered lists, blockquotes, and paragraphs into semantic HTML.
 */
export function parseMarkdownToHTML(markdown: string): string {
  if (!markdown) return '';

  const lines = markdown.split('\n');
  let html = '';
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Empty lines break lists & paragraphs
    if (!line) {
      if (inList) {
        html += listType === 'ul' ? '</ul>' : '</ol>';
        inList = false;
        listType = null;
      }
      continue;
    }

    // Inline formatting: bold, italic, code
    line = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1C1510]">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-[#FAF6F0] text-[#C86D43] px-1.5 py-0.5 rounded font-mono text-xs">$1</code>');

    // Headings
    if (line.startsWith('# ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<h1 class="text-3xl font-serif font-bold text-[#1C1510] mt-6 mb-3">${line.replace('# ', '')}</h1>`;
    } else if (line.startsWith('## ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<h2 class="text-2xl font-serif font-bold text-[#1C1510] mt-6 mb-2 border-b border-[#E8DFD3] pb-2">${line.replace('## ', '')}</h2>`;
    } else if (line.startsWith('### ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<h3 class="text-xl font-serif font-bold text-[#1C1510] mt-4 mb-2">${line.replace('### ', '')}</h3>`;
    } else if (line.startsWith('#### ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<h4 class="text-lg font-serif font-bold text-[#C86D43] mt-3 mb-1.5">${line.replace('#### ', '')}</h4>`;
    } 
    // Unordered list items (- or *)
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      const content = line.substring(2);
      if (!inList || listType !== 'ul') {
        if (inList) html += listType === 'ul' ? '</ul>' : '</ol>';
        html += '<ul class="list-disc list-inside space-y-1.5 my-3 text-[#5C5248] pl-2">';
        inList = true;
        listType = 'ul';
      }
      html += `<li>${content}</li>`;
    } 
    // Ordered list items (1. 2. 3.)
    else if (/^\d+\.\s/.test(line)) {
      const content = line.replace(/^\d+\.\s/, '');
      if (!inList || listType !== 'ol') {
        if (inList) html += listType === 'ul' ? '</ul>' : '</ol>';
        html += '<ol class="list-decimal list-inside space-y-1.5 my-3 text-[#5C5248] pl-2">';
        inList = true;
        listType = 'ol';
      }
      html += `<li>${content}</li>`;
    } 
    // Blockquote (> )
    else if (line.startsWith('> ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<blockquote class="border-l-4 border-[#C86D43] bg-[#FAF6F0] p-4 rounded-r-2xl text-xs italic text-[#5C5248] my-4">${line.replace('> ', '')}</blockquote>`;
    } 
    // Standard Paragraph
    else {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; listType = null; }
      html += `<p class="text-xs sm:text-sm text-[#5C5248] leading-relaxed my-2.5">${line}</p>`;
    }
  }

  if (inList) {
    html += listType === 'ul' ? '</ul>' : '</ol>';
  }

  return html;
}
