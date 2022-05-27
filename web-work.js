onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = function (e) {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    
    let data = e.data.do;
    switch (data) {
      case "Sum":
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
          sum += i;
        }
        port.postMessage(sum);
        break;
      default:
        console.log("Invalid access");
        port.postMessage("Closing web worker");
    }
  };
};
