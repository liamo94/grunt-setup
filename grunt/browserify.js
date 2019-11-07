module.exports = {
    dist: {
        files: {
            // destination for transpiled js : source js
            'dist/js/scripts.js': 'src/js/file1.js'
        },
        options: {
            // babel is required as at the time of creating, browserify does not support es6
            transform: [['babelify', { presets: 'es2015' }]],
            browserifyOptions: {
                debug: false
            }
        }
    }
};
