

$('#button').on('click', function(){
  $('li').remove()

var apiURL='https://data.nasa.gov/resource/gvk9-iz74.json';

$.ajax({
  url: apiURL,
  success:function(res){
    console.log(res)
    // executes a function once for each element
    res.forEach(function(arr){
      // makes sure values aren't repeated
      if(arr.center !== $("body > .center > li:last-child").text()){
      // pulls values for center,country,location,city,state,&zipcode
        $('.center').append('<li>'+ arr.center + '</li>')
        $('.country').append('<li>'+ arr.country + '</li>')
        $('.location').append('<li>'+ arr.location.longitude +' '+ arr.location.latitude + '</li>')
        $('.city').append('<li>'+ arr.city + '</li>')
        $('.state').append('<li>'+ arr.state + '</li>')
        $('.zipcode').append('<li>'+ arr.zipcode + '</li>')
      };
    });
  },
  error:function(err){
    console.log(err)
  }

})

});
