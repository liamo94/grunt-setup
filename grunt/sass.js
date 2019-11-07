module.exports = {
    dist: {
        options: {
            // paths:["sass/"]
            style: 'expanded'
        },
        files: {
            'dist/css/output.css': 'src/sass/imports.scss'
        }
    }
};
