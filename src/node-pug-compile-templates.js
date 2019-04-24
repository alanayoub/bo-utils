const pug  = require('pug');
const glob = require('glob');
const fs   = require('fs-extra');

/**
 *
 * Compile Pug templates and save to a file
 * Compiled templates are provided in an array at `varName`
 *
 * @param {String} pugGlob - pug glob
 * @param {String} outFile - output file
 * @return {Boolean}
 *
 */
export default function pugCompileTemplates({varName = 'pug', pugGlob, outFile}) {
  try {
    glob(pugGlob, {}, (error, files) => {
      const len = files.length - 1;
      const pugTemplates = [];
      const start = `module.exports = {`;
      const end = '}';
      let str, idx, file, name, prop, tmpl;
      for ([idx, file] of Object.entries(files)) {

        idx = +idx;

        str = fs.readFileSync(file, 'utf8');
        if (!str) continue;
        tmpl = pug.compile(str);

        if (!idx) prop = start;
        else prop = '';

        name = file.replace(/.*\/(.*).pug$/, '$1');
        prop += `'${name}': ${tmpl.toString()}`;

        if (idx === len) prop += end;

        pugTemplates.push(prop);

      }

      fs.writeFileSync(outFile, pugTemplates.join(','));
      return true;

    });
  } catch (error) {
    return false;
  }
}
