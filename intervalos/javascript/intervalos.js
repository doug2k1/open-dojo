/**
 * @subject Intervals
 * @author ttakamoto@ciandt.com
 */

// Structural object to be added in the global scope.
var global = {
  // for debugging purpose of states.
  debug: true, 
  /**
  * Separate a given array into a set of arrays determined by sequential numbers.
  */
  createIntervals: function(entries) {
    var output = new Array();
    /**
    * Auxiliar variables for current states: 
    * - first number of interval
    * - last number of interval
    * - current number under analysis
    */
    var firstOfInterval = null;
    var lastOfInterval = null;
    var currentItem = null
    var entriesLength = entries.length;
    global.log('debug','entries length:  '+ entriesLength);
    for (var i in entries){
      currentItem = entries[i];
      global.log('debug','==============new=============');
      global.log('debug','i:  '+ i);
      global.log('debug','first:  '+ firstOfInterval);
      global.log('debug','last:   '+ lastOfInterval);
      global.log('debug','current: '+ currentItem);

      // case: we just have one item
      if((parseInt(i)+1) == entriesLength && lastOfInterval == null){
        output.push(currentItem);
        continue;
      }

      // case: where a new interval begins. first=last
      if (firstOfInterval == null){
        firstOfInterval = currentItem;
        lastOfInterval = firstOfInterval;
        continue;
      }
      // case: where we found that lastOfInterval is not sequential with current
      if(lastOfInterval != (currentItem - 1)){
        // close interval (one or more itens)
        if(firstOfInterval == lastOfInterval){
          output.push(firstOfInterval);
          global.log('debug','interval created: '+ firstOfInterval);
        }
        else {
          output.push(firstOfInterval +'-'+ lastOfInterval);
          global.log('debug','interval created: '+ firstOfInterval +'-'+ lastOfInterval);
        }     

        // refresh vars
        firstOfInterval = currentItem;
        lastOfInterval = firstOfInterval;

        // case: last item is all by himself
        if((parseInt(i)+1) == entriesLength){
          output.push(currentItem);       
          global.log('debug','interval created: '+ currentItem);
        }
        continue;
      } 
      // case: the list just ended
      if(parseInt(i)+1 == entriesLength) {
        // close interval
        output.push(firstOfInterval +'-'+ currentItem);
        global.log('debug','interval created: '+ firstOfInterval +'-'+ currentItem);
        continue;
      }

      // default: anything else simply set the vars
      lastOfInterval = currentItem;
    }
    return output;
  },

  /**
  * Generate a better HTML version of this output.
  */
  generateIntervalsHTMLOutput: function(output) {
    var htmlOutput = document.createElement('div');
    htmlOutput.className = 'output';
    var htmlList = document.createElement('ul');
    for (var i in output) {
      var line = document.createElement('li');
      line.innerHTML = "["+ output[i].toString() +"]";
      htmlList.appendChild(line);
    }
    htmlOutput.appendChild(htmlList);
    return htmlOutput;
  }, 

  /**
    * Generate HTML version for entries
    */
  generateEntriesHTMLOutput: function(entries){
    var htmlOutput = document.createElement('p');
    htmlOutput.innerHTML = entries.join(',');
    return htmlOutput;
  }, 

  log: function(type, msg){
    if(window.console != undefined && typeof console.log == 'function') {
      switch(type){
        case 'debug': 
          if(global.debug == true){
            console.log(type,msg);
          }
          break;
        default:
          console.log(type,msg);
          break;  
      }        
    } else {
      global.appendUnsupportedLogBrowserMessage();          
    }
  },
  
  appendUnsupportedLogBrowserMessage: function(){
    var msg = document.createElement('p');
    msg.setAttribute('id','log_message');
    msg.innerHTML = '.: Current browser doesn\'t support logging \n\
      functionality. please use Google Chrome';
    if (document.getElementById('log_message') == undefined) {
      document.body.appendChild(msg);
    }
  },

  /**
  * Main function to be executed during window onload
  */
  main: function(){
    var entries = [100];
    var entries = [100, 101];
    var entries = [100, 101, 112];
    var entries = [100, 101, 112, 113, 115, 117, 118];
    var entries = [100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150];

    var output = global.createIntervals(entries);
    var htmlOutput = global.generateIntervalsHTMLOutput(output);
    var htmlEntries = global.generateEntriesHTMLOutput(entries);

    document.body.appendChild(htmlEntries);
    document.body.appendChild(htmlOutput);    
  }
}  
window.onload = global.main;