d3.json("../resources/juice_orders", function(json) {
    var d = json;


var retrieveMonthFromDate = function(date){
  console.log(date);
}

var monthWiseFilter = function(juiceData){
  var monthlyConsumption = juiceData.map(function(entry,i){
    var date = entry.expiresAt;
    if(date)
    retrieveMonthFromDate(entry.expiresAt.split('T')[0]);
  });
}(d);

//----------------------------------------------END------------------------------------------------//
});
