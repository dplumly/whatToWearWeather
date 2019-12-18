$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=5368381&units=imperial&APPID=0750330319d667c9c8f4385bc9f8e33c', function (data) {
  console.log(data);

  var iconCode = data.weather[0].icon;

  var icon = "http://openweathermap.org/img/w/" + iconCode + ".png";

  var currentTemp = Math.floor(data.main.temp);
  $('#currentTemp').append(currentTemp);

  var minTemp = Math.floor(data.main.temp_min);
  $('#minTemp').append(minTemp);

  var maxTemp = Math.floor(data.main.temp_max);
  $('#maxTemp').append(maxTemp);

  var weatherDescription = data.weather[0].main;
  $('#weatherDescription').append(weatherDescription);

  console.log(icon);
  $('.icon').attr('src', icon);


  var changeShirt = document.getElementsByClassName('shirt');
  if (currentTemp > 20) {
    show_image("icons/tShirt.svg", 200, 200, "Shirt");
    show_image("icons/pants.png", 200, 200, "Pants");
  }
  else if (currentTemp) {

  }


  function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
  }
});





/*
  function add_google_logo() {
    var src = "icons/shirt.png";
    show_image("icons/shirt.png", 276, 110, "Google Logo");
  }

function changeClothes() {
    var changeShirt = document.getElementById('shirt');
    switch(currentTemp) {
        case 20:
            changeShirt.src="./icons/tShirt.svg"
          break;
        case 50 < 79:
            changeShirt.src="./icons/longSleeveShirt.svg"
            show_image();
          break;
        default:
*/