var points = 0;
var alpha = 0;


function clickPoints(number){

    points = points + number;
    document.getElementById("pointDisplay").innerHTML = points;
    
};

function buyAlpha(){

    var alphaCost = Math.floor(10 * Math.pow(1.1,alpha));     //works out the cost of this cursor

    if(points >= alphaCost){                                   //checks that the player can afford the cursor
        alpha = alpha + 1;                                   //increases number of cursors
    	points = points - alphaCost;                          //removes the cookies spent
        document.getElementById('alpha').innerHTML = alpha;  //updates the number of cursors for the user
        document.getElementById('pointDisplay').innerHTML = points;  //updates the number of cookies for the user
    };

    var nextCost = Math.floor(10 * Math.pow(1.1,alpha));       //works out the cost of the next cursor
    document.getElementById('alphaCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

    clickPoints(alpha);

}, 1000);
