module.exports = function(grunt) {
  var setup = {
    command: 'ls',
    success_pattern: 'Failures: 0, Exceptions: 0',
    file_mask: '**/*.*',
  };

  function log(err, stdout, stderr, cb) {
      if (stdout.search(setup.success_pattern) == -1) {
        grunt.fail.warn("Tests FAIL!!!");
      };
      cb();
  }
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: [setup.file_mask],
      tasks: ['shell', 'notify:watch'],
    },
    shell: {
      testExec: {
        command: setup.command,
        options: {
          callback: log,
        }
      }
    },
  });

  //grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch']);
};
