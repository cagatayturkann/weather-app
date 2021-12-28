$(document).ready(function () {
  $('.card').hide();
  
  $(".search-button").on("click", function() {
    var city = $(".search-input").val();
    console.log(city);
    
    
  if (city !== "") {
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=bf7204410541c2808973649e5e63aecf",
      method: "GET"
    })
    .done(function(data) {
        var cityName = $("#city-name");
        var country = $("#country-code");
        var icon = $("#icon");
        var tempIcon = $("<img>").attr(
          "src",
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        var temp = $("#degree");
        var description = $("#description");
        var wind = $("#wind");
        var humidity = $("#humidity");
        var tempMin = $("#temp-min");
        var tempMax = $("#temp-max");
        
        if (cityName) {
          $('.card').show();
          cityName.html("");
          country.html("");
          icon.html("");
          temp.html("");
          description.html("");
          wind.html("");
          humidity.html("");
          tempMin.html("");
          tempMax.html("");

          cityName.append(data.name);
          country.append("  " + "," + data.sys.country);
          temp.append(data.main.temp + " " + "℃");
          icon.append(tempIcon);
          description
          .append(data.weather[0].description)
          .val()
          .toUpperCase();
          
          wind.append(data.wind.speed + " " + "m/s");
          humidity.append(data.main.humidity + " " + "%");
          tempMin.append(data.main.temp_min + " " + "℃");
          tempMax.append(data.main.temp_max + " " + "℃");

          if (data.weather[0].icon === "01d") {
            $(".card-img").attr("src", "./assets/img/01d.jpg");
          } else if (data.weather[0].icon === "01n") {
            $(".card-img").attr("src", "./assets/img/01n.jpg");
          } else if (data.weather[0].icon === "02d") {
            $(".card-img").attr("src", "./assets/img/02d.jpg");
          } else if (data.weather[0].icon === "02n") {
            $(".card-img").attr("src", "./assets/img/02n.jpg");
          } else if (
            data.weather[0].icon === "03d" ||
            data.weather[0].icon === "03n" ||
            data.weather[0].icon === "04d" ||
            data.weather[0].icon === "04n"
            ) {
              $(".card-img").attr("src", "./assets/img/03dn-04dn.jpg");
          } else if (
            data.weather[0].icon === "09d" ||
            data.weather[0].icon === "09n"
            ) {
              $(".card-img").attr("src", "./assets/img/09d-09n.jpg");
            } else if (data.weather[0].icon === "10d") {
              $(".card-img").attr("src", "./assets/img/10d.jpg");
            } else if (data.weather[0].icon === "10n") {
              $(".card-img").attr("src", "./assets/img/10n.jpg");
            } else if (
            data.weather[0].icon === "11d" ||
            data.weather[0].icon === "11n"
          ) {
            $(".card-img").attr("src", "./assets/img/11d-11n.jpg");
          } else if (
            data.weather[0].icon === "13d" ||
            data.weather[0].icon === "13n"
          ) {
            $(".card-img").attr("src", "./assets/img/13d-13n.jpg");
          } else if (
            data.weather[0].icon === "50d" ||
            data.weather[0].icon === "50n"
          ) {
            $(".card-img").attr("src", "./assets/img/50d-50n.jpg");
          }
        } else {
          alert("City Not Found!");
        }
        console.log(data);
      })
      .fail(function(error) {
        console.log(error);
      });
    } else {
      alert("Field can not be empty!");
    }
  });
  
});
