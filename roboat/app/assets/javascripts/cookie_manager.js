function parseMeasure(measure){
  var raw_measure = Cookies.get(measure);
  var obj_measure = JSON.parse(raw_measure);
  return obj_measure;
}

function resetCookies(){
  for (var i = 0; i <= 2; i++) {
    var cookie_measure_name = 'measure_' + i;
    Cookies.set(cookie_measure_name, {
      "id": null,
      "ph": null,
      "turbidity": null,
      "temperature": null,
      "conductivity": null
    });
  }
}

function listenCookie(id){
  var measure_name = 'measure_' + id.toString();
  Cookies.onchange(measure_name, function(){
    var obj_measure = parseMeasure(measure_name);
    var ph = obj_measure.ph;
    var turbidity = obj_measure.turbidity;
    var temperature = obj_measure.temperature;
    var conductivity = obj_measure.conductivity;
    $("#collect_measures_attributes_" + id.toString() + "_ph").val(ph);
    $("#collect_measures_attributes_" + id.toString() + "_turbidity").val(turbidity);
    $("#collect_measures_attributes_" + id.toString() + "_temperature").val(temperature);
    $("#collect_measures_attributes_" + id.toString() + "_conductivity").val(conductivity);

    measure_recieved(id);
  });
}

function setMeasureParms(){
  resetCookies();
  for (var i = 0; i < 3; i++) {
    listenCookie(i);
  }
}

function random(){
  return Math.floor((Math.random() * 10) + 1);
}

function test(i){
    var measure_name = 'measure_' + i.toString();
    Cookies.set(measure_name, {
      "id": random(),
      "ph": random(),
      "turbidity": random(),
      "temperature": random(),
      "conductivity": random()
    });
}

function measure_recieved(measure_id){
  console.log("Medição " + measure_id.toString() + " realizada");
}

$(document).ready(function(){
  setMeasureParms();
});
