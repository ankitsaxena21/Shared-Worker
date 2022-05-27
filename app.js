let worker;

document.addEventListener('DOMContentLoaded', init);

function init(){
    worker = new SharedWorker('web-work.js');
    worker.port.onmessage = function (e) {
      let data = e.data;
      console.log(typeof data, data);
      if(typeof data == "number"){
        alert(`The sum is ${data}`)
      }else {
        document.getElementById('output').textContent = data.title;
      }
    };  

    worker.port.addEventListener('error', workerError);
  

    document.getElementById('sumBtn').addEventListener('click', ()=> {
      worker.port.postMessage({'do':'Sum'})
    });
    
    document.getElementById('bgBtn').addEventListener('click', () => {
      if(document.body.style.backgroundColor !== "red") {
        document.body.style.backgroundColor = 'red'
      }else {
        document.body.style.backgroundColor = "lightblue";
      }
    });
}

function workerError(err){
    console.log(err.message, err.filename);
}