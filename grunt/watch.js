module.exports = {
    options: {
        livereload: true,
        nospawn: true
    },
    sass: {
        files: [
            'src/sass/*.scss',
            'src/js/*.js'
        ],
        tasks: ['sass', 'browserify']
    }
}