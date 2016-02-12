d3.json("../resources/juice_orders", function(json) {
    var d = json;


var allfilteredEntryBy = function(typeName,type,juiceData){
   var filterEntry = [];
   for(var entry in juiceData){
       if(juiceData[entry][type] == typeName){
           filterEntry.push(juiceData[entry]);
       }
   }
   return filterEntry;
};

var juiceWiseFilter = function(juiceData){
   var juiceCounter = {};
   for(var i in juiceData){
       if(juiceCounter[juiceData[i].drinkName] != undefined){
           juiceCounter[juiceData[i].drinkName]+=juiceData[i].quantity;
       }
       else{
          juiceCounter[juiceData[i].drinkName] = juiceData[i].quantity;
       }
   }
   return juiceCounter;
};

var filterNecessaryData = function(juicesList){
  var juicesNames = juicesList;
  var unNecessaryData = ['CTL','ctl','Register User'];
  for(var i in juicesNames){
    if(unNecessaryData.indexOf(juicesNames[i]) != -1){
        juicesNames.splice(juicesNames.indexOf(juicesNames[i]),1);
    }
  }
  return juicesNames;
};

var totalUniqueJuiceCounter = juiceWiseFilter(d);
var juicesNames = filterNecessaryData(Object.keys(totalUniqueJuiceCounter));

var xChartFormatOf = function(juiceCounter,juicesNames){
  return juicesNames.reduce(function(dataToXChart,juice){
    var currentJuiceInfo = {};
    currentJuiceInfo.x = juice;
    currentJuiceInfo.y = juiceCounter[juice];
    dataToXChart.push(currentJuiceInfo);
    return dataToXChart;
  },[]);
};

var xChartData = xChartFormatOf(totalUniqueJuiceCounter,juicesNames);

var tt = document.createElement('div'),
leftOffset = -(~~$('html').css('padding-left').replace('px', '') + ~~$('body').css('margin-left').replace('px', '')),
topOffset = -32;
tt.className = 'ex-tooltip';
document.body.appendChild(tt);

var opts = {
  tickHintX: 33,
  xMin: 1,
  yMax: 6500,
  axisPaddingTop: 40,
  paddingBottom: 70,
  "mouseover": function (d, i) {
    var pos = $(this).offset();
    $(tt).text(d.x+' - '+d.y)
    .css({top: topOffset + pos.top, left: pos.left + leftOffset})
    .show();
  },
  "mouseout": function (x) {
    $(tt).hide();
  },
  timing: 2000
};


xData = {
  xScale: 'ordinal',
  yScale: 'linear',
  main: [
    {
      'className':'.bar_representation',
      'data': xChartFormatOf(totalUniqueJuiceCounter,juicesNames)
    }
  ]
}

var myChart = new xChart('bar', xData,'#bar_chart',opts);

//----------------------------------------------END------------------------------------------------//
});
