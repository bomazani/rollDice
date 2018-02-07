function rollDice(){
    //alert("hello");
    var rollCount = new Array(12);
    rollCount.fill(0,0,12);
    for(i=0; i<1000; i++){
    var dice1=Math.floor((Math.random() * 6) + 1);
    var dice2=Math.floor((Math.random() * 6) + 1);
    var total=dice1+dice2;
        for(let j=0; j<12; j++){
        if (total==(j+1)){
            rollCount[j]=rollCount[j]+1;
        }
    }

    }
    for(let j=1;j<12;j++){
        var newElement = document.createElement("div");
         // Place a text label inside the new div.
        var newText = document.createTextNode((j+1) +":"+ rollCount[j]);
        newElement.appendChild(newText);

        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("dice");
        destination.appendChild(newElement);
    }
}