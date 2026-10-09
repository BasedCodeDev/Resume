// Export the separate print source; index.html retains the website design.
// Usage: node scripts/export-pdf.mjs http://127.0.0.1:<browser-debug-port>
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const endpoint = new URL(process.argv[2]);
if (endpoint.protocol !== 'http:' || !['127.0.0.1', 'localhost'].includes(endpoint.hostname)) {
  throw new Error('Use the localhost endpoint of the resume browser session.');
}
const resumeUrl = new URL('../resume-print.html', import.meta.url).href;
const targets = await (await fetch(new URL('/json/list', endpoint))).json();
const target = targets.find(item => item.type === 'page' && item.url === resumeUrl);
if (!target) throw new Error(`Open ${resumeUrl} in the browser session first.`);

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});
let requestId = 0;
const pending = new Map();
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  const request = pending.get(message.id);
  if (!request) return;
  clearTimeout(request.timer);
  pending.delete(message.id);
  if (message.error) request.reject(new Error(message.error.message));
  else request.resolve(message.result);
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++requestId;
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Browser command timed out: ${method}`));
    }, 15000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
try {
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const { data } = await send('Page.printToPDF', {
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
    marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
  });
  const output = new URL('../output/pdf/Sebastiaan-Fehr-Studio-Director.pdf', import.meta.url);
  await mkdir(new URL('.', output), { recursive: true });
  await writeFile(output, Buffer.from(data, 'base64'));
  console.log(`Saved ${fileURLToPath(output)}`);
} finally {
  socket.close();
}
