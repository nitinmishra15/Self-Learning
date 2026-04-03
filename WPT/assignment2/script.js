function loadData(){
    fetch("score.json")  
    .then(function(response){
        return response.json();   
    })
    .then(function(data){
        document.getElementById("match").innerHTML = data.match;

        document.getElementById("team1").innerHTML =
            data.team1.name + "  " + data.team1.score;

        document.getElementById("team2").innerHTML =
            data.team2.name + "  " + data.team2.score;

    })
    .catch(function(error){
        
    });
}
