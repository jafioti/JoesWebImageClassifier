let net;
var modelLoaded = false;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  modelLoaded = true;
}

app();

async function ClickFunction(){
  if(modelLoaded){
    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);
    document.getElementById("result").textContent = result[0]["className"]
  }else{
    document.getElementById("result").textContent = "Still Loading Model, Please Wait A Few Seconds And Try Again...";
  }
}

function previewFile(){
  var preview = document.querySelector('img'); //selects the query named img
   var file    = document.querySelector('input[type=file]').files[0]; //sames as here
   var reader  = new FileReader();

   reader.onloadend = function () {
       preview.src = reader.result;
   }

   if (file) {
       reader.readAsDataURL(file); //reads the data as a URL
   } else {
       preview.src = "";
   }
}