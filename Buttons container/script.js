function girar() {
for(let i=1; i<=9; i++) {
    if(document.getElementById('btn'+i).innerText == 1) {
       document.getElementById('btn'+i).innerText = 4
       }
       else if(document.getElementById('btn'+i).innerText == 2) {
        document.getElementById('btn'+i).innerText = 1
       }
       else if(document.getElementById('btn'+i).innerText == 3) {
        document.getElementById('btn'+i).innerText = 2
       }
       else if(document.getElementById('btn'+i).innerText == 6) {
        document.getElementById('btn'+i).innerText = 3
       }
       else if(document.getElementById('btn'+i).innerText == 9) {
        document.getElementById('btn'+i).innerText = 6
       }
       else if(document.getElementById('btn'+i).innerText == 8) {
        document.getElementById('btn'+i).innerText = 9
       }
       else if(document.getElementById('btn'+i).innerText == 7) {
        document.getElementById('btn'+i).innerText = 8
       }
       else if(document.getElementById('btn'+i).innerText == 4) {
        document.getElementById('btn'+i).innerText = 7
       }
}

   
}

