d3.json('../resources/juice_orders', function(json) {
    var juiceData = json;

	var conversionIntoPieChartFormat = function(monthlyConsumption){
		return Object.keys(monthlyConsumption).map(function(date){
			var pieFormData = {};
			pieFormData.label = date.split('-').join(' - ');
			pieFormData.value = monthlyConsumption[date];
			return pieFormData;
		});

	}

	var monthWiseFilter = function(juiceData){
		var monthlyConsumption = juiceData.reduce(function(monthsList, entry){
			var date = String(new Date(entry.date)).split(' ');
			var month = date[1];
		    var year = date[3];
		    monthsList[month+'-'+year] ? monthsList[month+'-'+year] +=1 : monthsList[month+'-'+year] =1;
		    return monthsList;
		},{});
		return conversionIntoPieChartFormat(monthlyConsumption);
	};

	var pie = new d3pie('juice_pie', {
		header: {
			title: {
				text: 'Monthly Juice Consumption In Pie Chart Form'
			}
		},
		size: {
			canvasHeight: 600,
			canvasWidth: 1000,
			pieInnerRadius: '70%'
  		},
		data: {
			sortOrder: 'label-asc',
			content: monthWiseFilter(juiceData)
		},
		tooltips: {
			enabled: true,
			string: '{label}, {value}'
		},
		labels: {
			percentage: {
				fontSize: 15,
				decimalPlaces: 2
			},
			mainLabel: {
				fontSize: 20
			}
		},
		misc: {
			pieCenterOffset: {
				x: 200,
				y: 0
			},
		}
	});

//----------------------------------------------END------------------------------------------------//
});
