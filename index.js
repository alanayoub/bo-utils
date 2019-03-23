'use strict';

// Node
import fs        from 'fs';
import glob      from 'glob';

// bo-utils
import camelcase from './src/string-camelcase';

// Get files & parse names
let file;
const files = glob.sync('./src/*.js', {ignore: './src/*-test.js'});

/**
 *
 * Get Imports And Exports
 *
 * @param {String} type - server or client
 * @return {Object}
 *
 */
function getImportsAndExports(type) {
  const imports = [];
  const exports = [];
  let str;
  let name;
  let prefix;
  for (file of files) {

    str = file.replace(/^.*\/(.*).js$/, '$1'); // remove .js extention
    prefix = str.split('-')[0];

    if (
      (prefix === 'node' && type === 'client') ||
      (prefix === 'web'  && type === 'server')
    ) {
      continue // dont include file
    }
    else {
      name = camelcase(str);
      imports.push(`import ${name} from '${file}';`);
      exports.push(name);
    }

  }
  return {imports, exports, type};
}

/**
 *
 *
 */
function generateFile({imports, exports, type}) {

//
// Start output
// NOTE: Leave the output formatting alone :)
//
const output = `//\n// This is a generated file\n//

${imports.join('\n')}

export {
  ${exports.join(',\n  ')}
}
`;
//
// End Output
//

  // Save file
  const data = new Uint8Array(Buffer.from(output));
  type === 'server'
    ? fs.writeFileSync(`index.generated.js`, data)
    : fs.writeFileSync(`index.${type}.generated.js`, data);
}

generateFile(getImportsAndExports('server'));
generateFile(getImportsAndExports('client'));
