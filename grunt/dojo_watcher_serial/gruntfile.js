module.exports = function(grunt) {
  var setup = {
    command: 'ls',
    success_pattern: 'Failures: 0, Exceptions: 0',
    file_mask: '**/*.*',
    serial_port: 'COM5',
    serial_velocity: 57600,
  };

  var serialport = require("serialport");
  var SerialPort = serialport.SerialPort; // localize object constructor
  var serialPort = new SerialPort("COM5", {
    baudrate: 57600,
    parser: serialport.parsers.readline("\n")
  }, false); // this is the openImmediately flag [default is true]

  function log(err, stdout, stderr, cb) {
      serialPort.open(function () {
        if (stdout.search(setup.success_pattern) == -1) {
          serialPort.write("vermelho" + '\r\n');
          grunt.fail.warn("Tests FAIL!!!");
        };
        serialPort.write("verde" + '\r\n');
      });
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
  grunt.registerTask('default', ['watch', 'notify:watch']);
};
