var fs = require('fs');

// var line1 = 'ROOT_DIR=$(git rev-parse --show-toplevel)';
// var line2 = 'LINT="${ROOT_DIR}/node_modules/eslint/bin/eslint.js --ext .js --ext .jsx"';
// var line3 = 'git diff --name-only --cached --relative | grep "\\.jsx\\?$" | xargs node $LINT';
// var line4 = 'if [ $? -ne 0 ]; then exit 1; fi';
// https://tldr.ostera.io/grep
// a schedule management app based on cordova+react+ant design
var fileContent = '#!/bin/bash\n\n' + 'git diff --cached --name-only --diff-filter=ACM | grep ".js\\|jsx\\|vue$" |  xargs ./node_modules/.bin/eslint';

fs.writeFile('.git/hooks/pre-commit', fileContent);
