/**
 * One file, one process. Silent on success; non-zero exit on failure.
 *
 * Each tool is driven through its documented entry point. Their logging is
 * silenced where they allow it -- restringer is chatty enough to
 * drown the run otherwise -- but nothing else about their behaviour is altered.
 */
import fs from 'fs';

const [, , tool, inFile, outFile] = process.argv;
const source = fs.readFileSync(inFile, 'utf8');
let code;

if (tool === 'webcrack') {
  const { webcrack } = await import('webcrack');
  code = (await webcrack(source)).code;
} else if (tool === 'restringer') {
  const { REstringer } = await import('restringer');
  const r = new REstringer(source);
  try { r.logger.setLogLevel('none'); } catch { /* logger API varies by version */ }
  r.deobfuscate();
  code = r.script;
} else if (tool === 'js-deobfuscator' || tool === 'obfuscator-io-deobfuscator') {
  // Both expose the same entry point and take the source directly.
  const { deobfuscate } = await import(tool);
  code = await deobfuscate(source);
} else if (tool === 'wakaru' || tool === 'js-beautify') {
  // FORMATTING CLASS, not a peer of the deobfuscators. wakaru is a bundle
  // decompiler and js-beautify only reflows whitespace; on this obfuscation
  // family both leave the string decoder and the arithmetic obfuscation intact
  // and the output gets LARGER. They are the lower bound, and are reported as
  // such rather than as failing deobfuscators.
  if (tool === 'js-beautify') {
    const { js: beautify } = await import('js-beautify');
    code = beautify(source, { indent_size: 2 });
  } else {
    const { execFileSync } = await import('child_process');
    code = execFileSync('npx', ['wakaru', inFile], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  }
} else {
  throw new Error(`unknown tool: ${tool}`);
}

if (typeof code !== 'string' || !code.trim()) throw new Error('tool produced no output');
fs.writeFileSync(outFile, code);
