
document.addEventListener('DOMContentLoaded', init);
function init(){
    if (!!window.SharedWorker) {
        var myWorker = new SharedWorker('web-work.js');
      
        document.getElementById('sumBtn').addEventListener('click', ()=> {
            myWorker.port.postMessage({'do':'Sum'})
        });
      
        myWorker.port.onmessage = function (e) {
          let data = e.data;
          console.log(typeof data, data);
            alert(`The sum is ${data}`)
      
        };
      }
}

