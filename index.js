'use strict';

// Node
import fs        from 'fs';
import glob      from 'glob';

// bo-utils
import camelcase from './src/string-camelcase';

// Get files & parse names
let file;
const files = glob.sync('./src/*.js');

const imports = [];
const exports = [];
for (file of files) {
  const str = file.replace(/^.*\/(.*).js$/, '$1'); // remove .js extention
  const name = camelcase(str);
  imports.push(`import ${name} from '${file}';`);
  exports.push(name);
}

// Create output data
// Leave the formatting along :)
const output = `//
// This is a generated file
//

${imports.join('\n')}

export {
  ${exports.join(',\n  ')}
}
`;

// Save file
const data = new Uint8Array(Buffer.from(output));
fs.writeFileSync('index.generated.js', data);
