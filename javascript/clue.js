function clue() {
    let zero = 0;
    let one = 1;

    // Cache Clue Counter
    if (!localStorage.answer) {
        localStorage.answer = JSON.stringify(zero);
    }
    
    var clueCounter = JSON.parse(localStorage.answer);
    var ClueMessage = "hahhhahhahhhahha you missed it";
    
    clueCounter = clueCounter + one;

    localStorage.answer = JSON.stringify(clueCounter);
    
    switch (clueCounter){
        case 1:
            ClueMessage = "Stop Clicking Me!";
            break;
        case 2:
            ClueMessage = "Please Stop Clicking Me, I even said please";
            break;
        case 3:
            ClueMessage = "STOP CLICKING ME PLEASE AND THANK YOU";
            break;
        case 4:
            ClueMessage = "SRTOPSP PSTOP STOPST OSTP";
            break;
        case 5:
            ClueMessage = "wow your not listening";
            break;
        case 6:
            ClueMessage = "OK FINE SCROLL DOWN"
            break;
    }

    document.getElementById("clueCHecker").innerText = ClueMessage;
    console.log(clueCounter);
}