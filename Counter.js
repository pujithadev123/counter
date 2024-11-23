let Updatedata=document.getElementById("datadisplay")
let incbtn=document.getElementById("in")
let decbtn=document.getElementById("dec")
let resbtn=document.getElementById("res")
let count=0;

function updateDisplay() {
    Updatedata.textContent = count;
    }
    
incbtn.addEventListener("click", function() {
    count++;
    updateDisplay();
    });

decbtn.addEventListener("click", function() {
        count--;
        updateDisplay();
        });
 resbtn.addEventListener("click", function() {
            count=0;
            updateDisplay();
            });
    