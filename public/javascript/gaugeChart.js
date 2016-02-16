d3.json("../resources/juice_orders", function(json) {
    var juiceData = json;

    var countjuiceWithSugar = function(){
      return Object.keys(juiceData).reduce(function(counter, juice){
        if(juiceData[juice].isSugarless == false){counter+=1;}
        return counter;
      },0);
    }

    var countjuiceWithoutSugar = function(){
      return Object.keys(juiceData).reduce(function(counter, juice){
        if(juiceData[juice].isSugarless == true){counter+=1;}
        return counter;
      },0);
    }

    google.charts.load('current', {'packages':['gauge']});
    var drawChart = function() {
      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Sugar', countjuiceWithSugar()],
        ['SugarLess', countjuiceWithoutSugar()]
      ]);

      var options = {
        width: 700, height: 400,
        redFrom: 32000, redTo: 35000,
        yellowFrom: 27000, yellowTo: 32000,
        min: 0, max: 35000
      };

      var chart = new google.visualization.Gauge(document.getElementById('gauge_Chart'));
      chart.draw(data, options);
    }
    google.charts.setOnLoadCallback(drawChart);
    //----------------------------------------------END------------------------------------------------//
});
