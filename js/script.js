var campJson = "https://api.myjson.com/bins/1nrbo";//"https://www.freecodecamp.com/news/hot";
var postedDate;
var rowIndex;
alert('Connect Internet');

function Empty() {
  $("#CardPost_News1").empty();
  $("#CardPost_Technology").empty();
  $("#HOME").empty();
  $('#CardPost_Sport').empty();
  $("#CardPost_GoogleNews").empty();
  $("#CardPost_ReutersNews").empty();

}
function newsapiFeed(url,tag) {
  $.getJSON(url, function(json) {

    for (var i = 0; i < json.articles.length; i++) {
      console.log(json.articles[i].author);
      $(tag).append("<div class='card mb-4' id = 'title" + i + "'>");
      if (json.articles[i].urlToImage) {
        $('#title'+i).append('<img class="card-img-top" src="'+json.articles[i].urlToImage+'" alt="Card image cap">')
        .css({

          "background-size": "cover",
          "background-repeat": "no-repeat",
          "height": "100%"
        });
      } else {
        $('#title'+i).append('<img class="card-img-top" src="http://placehold.it/750x300" alt="">')

      }
      $('#title'+i).append('<div class="card-body">'+'<h2 class="card-title"><a href="'+json.articles[i].url+'">'+json.articles[i].title+'</a></h2>'+'<p class="card-text">'+json.articles[i].description+'</p>'+'<a href="'+json.articles[i].url+'" class="btn btn-primary">Read More &rarr;</a>'+'</div>'+'</div>')
      //$('#title'+i).append('<div class="card-footer text-muted">'+moment.unix(json[i].timePosted / 1000)+'by </div>')

      $('#title'+i).append('<div class="card-footer text-muted">By '+json.articles[i].author+'</div>')

    }
  })
}
function TECHNOLOGY() {
    $('#HeadNews').html('TECHNOLOGY');
    url ='https:// .org/v1/articles?source=techradar&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
    Empty();
    newsapiFeed(url,'#CardPost_Technology')


}
function GoogleFeed(){
  $('#HeadNews').html('Google News');
  url='https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
  Empty();
  newsapiFeed(url,'#CardPost_GoogleNews')
}
function Reuters() {
  $('#HeadNews').html('Reuters News');
  url='https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
  Empty();
  newsapiFeed(url,'#CardPost_ReutersNews')
}
function Sport() {
  $('#HeadNews').html('Sport');
  url ='https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
  Empty();
  newsapiFeed(url,'#CardPost_Sport')
}
function ReadFromFile() {
  var x = new XMLHttpRequest();
  x.open('GET','https://api.myjson.com/bins/1nrbo');
  x.onreadystatechange=function(){
    var content = document.getElementById('show');
    content.innerHTML=x.responseText;
  }
  x.send(null);
}

function HOME() {
    Empty();
    $('#HeadNews').html('ALL News');
    campJson ='https://api.myjson.com/bins/1nrbo'
    $.getJSON(campJson, function(json) {
      $('#HeadNews').html('News');
      for (var i = 0; i < json.length; i++) {
        console.log(json[i].headline);
        $("#CardPost_News1").append("<div class='card mb-4' id = 'title" + i + "'>");
        if (json[i].image) {
          $('#title'+i).append('<img class="card-img-top" src="'+json[i].image+'" alt="Card image cap">')
          .css({

            "background-size": "cover",
            "background-repeat": "no-repeat",
            "height": "100%"
          });
        } else {
          $('#title'+i).append('<img class="card-img-top" src="http://placehold.it/750x300" alt="">')

        }
        $('#title'+i).append('<div class="card-body">'+'<h2 class="card-title"><a href="'+json[i].link+'">'+json[i].headline+'</a></h2>'+'<p class="card-text">'+json[i].metaDescription+'</p>'+'<a href="'+json[i].link+'" class="btn btn-primary">Read More &rarr;</a>'+'</div>'+'</div>')
        //$('#title'+i).append('<div class="card-footer text-muted">'+moment.unix(json[i].timePosted / 1000)+'by </div>')

        $('#title'+i).append('<div class="card-footer text-muted">By '+json[i].author.username+'</div>')



      }
    })
    Technology ='https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
    Sport ='https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
    Google ='https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
    Reuters ='https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=ebec4c1d39284789b44238f3100eec63'
    newsapiFeed(Technology,'#CardPost_Technology')
    newsapiFeed(Sport,'#CardPost_Sport')
    newsapiFeed(Google,'#CardPost_GoogleNews')
    newsapiFeed(Reuters,'#CardPost_ReutersNews')
}

$.getJSON(campJson, function(json) {
  $('#HeadNews').html('News');
  for (var i = 0; i < json.length; i++) {
    console.log(json[i].headline);
    $("#CardPost_News1").append("<div class='card mb-4' id = 'title" + i + "'>");
    if (json[i].image) {
      $('#title'+i).append('<img class="card-img-top" src="'+json[i].image+'" alt="Card image cap">')
      .css({

        "background-size": "cover",
        "background-repeat": "no-repeat",
        "height": "100%"
      });
    } else {
      $('#title'+i).append('<img class="card-img-top" src="http://placehold.it/750x300" alt="">')

    }
    $('#title'+i).append('<div class="card-body">'+'<h2 class="card-title"><a href="'+json[i].link+'">'+json[i].headline+'</a></h2>'+'<p class="card-text">'+json[i].metaDescription+'</p>'+'<a href="'+json[i].link+'" class="btn btn-primary">Read More &rarr;</a>'+'</div>'+'</div>')
    //$('#title'+i).append('<div class="card-footer text-muted">'+moment.unix(json[i].timePosted / 1000)+'by </div>')

    $('#title'+i).append('<div class="card-footer text-muted">By '+json[i].author.username+'</div>')



  }
})
