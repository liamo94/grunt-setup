module.exports = {
  options: {
    mangle: {
      toplevel: true
    }
  },
  dist: {
    files: {
      'dist/js/scipts.min.js': ['dist/js/scripts.js']
    }
  }
}; 
