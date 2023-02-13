const { join } = require('path')

module.exports = {
    "moduleDirectories": [
        'node_modules',
        join(__dirname, 'src/tests'), // a utility folder
    ],
    "transformIgnorePatterns": ["node_modules/(?!(axios)/)"],
}