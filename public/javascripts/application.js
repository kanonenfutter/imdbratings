/*!function ($) {
    $(function () {
        $('#search-button').click(function () {
            var str = document.getElementById(filmtitles_ta);
            var filmarray = str;
            document.getElementById('output').innerHTML = filmarray;
        });
    });

}*/
var xhr = new XMLHttpRequest();

function search() {
    var str = document.getElementById("filmtitles_ta").value;
    var filmarray = str.split("\n");
    var no = filmarray.length;
    document.getElementById("no_titles").innerHTML = no;
    filmarray.forEach(function (element) {
            requestdata(element);
    });
}


function requestdata(title) {
    var omdbAPI = "http://www.omdbapi.com/?";
    var result = title.replace(/ /g, "+");
    var requestURL = "http://www.omdbapi.com/?t=" + result;
    //document.getElementById("output").innerHTML = requestURL;
    console.log(requestURL);
    xhr.open('GET', requestURL, false);
    xhr.send();
    //xhr.addEventListener("readystatechange", processRequest, false);
    xhr.onreadystatechange = processRequest;
}
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // time to partay!!!
        var response = JSON.parse(xhr.responseText);
        console.log(response.imdbRating);
    }
}
//document.getElementById("search-button").onclick = function() {search()};