Dojo Watcher Serial
===================

This is a simple watcher to run test files in dojo sessions, this version will work with serial module (semaphore) to be implemented with arduino
the garage ;)

Just need to clone this and setup.


Clonning
--------

```sh
git clone [git-repo-url]
cd dojo_watcher_serial
npm iinstall
```

Setup
-----
Open gruntfile.js
```js
module.exports = function(grunt) {
  var setup = {
    command: 'c:\\wamp\\bin\\php\\php5.3.1\\php.exe c:\\wamp\\www\\ted\\index.php',
    success_pattern: 'Failures: 0, Exceptions: 0',
    file_mask: 'c:\\wamp\\www\\ted\\**/*.*',
  };

  ...
};
```

**command**: the command line that watcher must run after detect a file change<br />
**success_pattern**: watcher will try to find this string on stdout, if don't fount an error will be displayed<br />
**file_mask**: The file extensions that watcher will monitorate