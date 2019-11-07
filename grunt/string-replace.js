module.exports = {
    dist: {
        files: [{
          expand: true,
          cwd: 'dest',
          src: '**/*',
          dest: 'dist/'
        }],
        options: {
          replacements: [{
            pattern: 'hello',
            replacement: 'howdy'
          }]
        }
      }
  };
