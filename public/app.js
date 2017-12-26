// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    //$("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    $("#articles").append("<div class='panel panel-default'>"
                          + "<div class='panel-heading'>" + "<b><a href='" + data[i].link + "'>" + data[i].title + "</a><b>"
                          + "<button id= 'saveArticle'class='btn pull-right' data-id='"+data[i]._id +"'>" + "Save Article" + "</button>"
                          + "<div class='clearfix'></div>"
                          + "</div>"
                          + "<div class='panel-body'>" + data[i].blurb + "</div>"
                          + "</div>")
  }
});

$(()=>{


const save = function(){
  var thisId = $(this).data("id");
  console.log(thisId);
  $.ajax({
    method: "PUT",
    url: "/articles/" + thisId,
})
  .then(function(data){
    location.reload();
  });
};

$('#saveArticle').on('click', save);

});
