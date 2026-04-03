function getNews(){

    axios.get("news.json")   
    .then(function(response){
        var data = response.data;
        var headlines = data.articles;
        var output = "";
        for(var i = 0; i < headlines.length; i++){
            output += "<li>" + headlines[i].title + "</li>";
        }
        document.getElementById("news").innerHTML = output;
    })
    .catch(function(error){
        console.log("Error:", error);
    });
}