$(document).ready(function() {

  
  $("#Button").click(function() {
   alert("Something");
   
   
  });
  
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=J cole&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });
  });
  
  $.getJSON(
      "http://ajar-target.gomix.me/stops", 
  function(response){
      console.log(response)
      }) 

