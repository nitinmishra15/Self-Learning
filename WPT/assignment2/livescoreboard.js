// Design and implement a web page that displays a live scoreboard. Use AJAX
// (XMLHttpRequest) to retrieve and interpret JSON data from a URL provided by the faculty.

function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "score2.json", true);
    xhttp.onload = function(){

        if(xhttp.status == 200){
            var data = JSON.parse(xhttp.responseText);

            document.getElementById("match").innerHTML = data.match;

            document.getElementById("team1").innerHTML =
                data.team1.name + " : " + data.team1.score;

            document.getElementById("team2").innerHTML =
                data.team2.name + " : " + data.team2.score;
        }
    };
    xhttp.send();
}