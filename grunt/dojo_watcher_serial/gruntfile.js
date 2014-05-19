module.exports = function(grunt) {
  var setup = {
    command: 'c:\\wamp\\bin\\php\\php5.3.1\\php.exe c:\\wamp\\www\\ted\\index.php',
    success_pattern: 'Failures: 0, Exceptions: 0',
    file_mask: 'c:\\wamp\\www\\ted\\**/*.*',
    serial_port: 'COM2',
    serial_velocity: 9600,
  };

  var SerialPort = require("serialport").SerialPort
  var serialPort = new SerialPort(setup.serial_port, {
    baudrate: setup.serial_velocity
  });


  function log(err, stdout, stderr, cb) {
      if (stdout.search(setup.success_pattern) == -1) {
        serialPort.write("VERMELHO\r");
        grunt.fail.warn("Tests FAIL!!!");
      };
      serialPort.write("VERDE\r");
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
    notify_hooks: {
      options: {
        enabled: true,
        title: "CI&T Dojo" // defaults to the name in package.json, or will use project directory's name
      }
    },
    notify: {
      watch: {
        options: {
          title: "CI&T Dojo",
          message: 'Done, without errors.',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.task.run('notify_hooks');

  grunt.registerTask('default', ['watch', 'notify:watch']);
};