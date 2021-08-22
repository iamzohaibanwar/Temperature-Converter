var celcius = $("#celcius"),
    farenheit = $("#farenheit");

function colourBg(n){
  colour = n;
  celcius.css({
    'background' : 'rgb(255,'+colour+',+'+colour+')',
    'color' : 'grey'
  });
  console.log(n);
}

celcius.bind('input', function(){
  // °C to °F	Multiply by 9, then divide by 5, then add 32
  var result = Math.floor(($(this).val() * 9 / 5) + 32);
  $('#farenheit').val(result);
 // colourBg($(this).val());
});

farenheit.bind('input', function(){
  //°C to °F	Multiply by 9, then divide by 5, then add 32
  var result = Math.floor(($(this).val() * 9 / 5) + 32);
   $('#celcius').val(result); 
});


