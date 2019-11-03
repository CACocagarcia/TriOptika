/* DECLARING A CITY VARIABLE FOR THE URL */ 
var city = "Nashville"; 

/**** CALL IN THE JSON DATA FILE (API) TO YOUR WEBSITE */ /* ADDING A STATIC CITY VARIABLE WITHIN THE URL */ 
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ea10f8e97e2b086922cf5e4bc9ffb90e&units=metric", function(data){
    console.log(data);

    /**************************************************************************************** VARIABLES */ 

    /* ICON */
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    /* LETS CALL THE ICON AND SEE IF IT WORKS */
   /*  console.log(icon); */ 

   /* WEATHER */
   var weather = data.weather[0].main;

   /* TEMP */ /* Math.round ; round the value to the nearest number */ 
   var temp = Math.round(data.main.temp);

   /***************************************************************************************** FUNCTIONS */ 
   $(".icon").attr("src", icon);
   $(".weather").append(weather);
   $(".temp").append(temp);
   $(".city").append(city); 


})