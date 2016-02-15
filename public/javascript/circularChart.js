d3.json("../resources/juice_orders", function(json) {
    var d = json;

google.charts.load('current', {'packages':['scatter']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart () {

       var data = new google.visualization.DataTable();
       data.addColumn('string', 'juice');
       data.addColumn('date', 'date');

       data.addRows([
         ['pineapple', new Date(1996, 02, 1)],
         ['apple', new Date(1996, 02, 1)],
         ['banana', new Date(1996, 02, 2)],
         ['amla', new Date(1996, 02, 5)],
         ['pineapple', new Date(1996, 02, 7)],
         ['apple', new Date(1996, 04, 1)],
         ['banana', new Date(1996, 03, 5)],
         ['amla', new Date(1996, 02, 9)],
         ['pineapple', new Date(1996, 03, 11)],
         ['apple', new Date(1996, 03, 16)],
         ['banana', new Date(1996, 02, 13)],
         ['amla', new Date(1996, 02, 21)],
         ['pineapple', new Date(1996, 02, 17)],
         ['apple', new Date(1996, 02, 14)],
         ['banana', new Date(1996, 02, 12)],
         ['amla', new Date(1996, 05, 17)]
        //  [3, 93], [4, 85], [5, 91],
        //  [6, 71], [7, 78], [8, 93],
        //  [9, 80], [10, 82],[0, 75],
        //  [5, 80], [3, 90], [1, 72],
        //  [5, 75], [6, 68], [7, 98],
        //  [3, 82], [9, 94], [2, 79],
        //  [2, 95], [2, 86], [3, 67],
        //  [4, 60], [2, 80], [6, 92],
        //  [2, 81], [8, 79], [9, 83],
        //  [3, 75], [1, 80], [3, 71],
        //  [3, 89], [4, 92], [5, 85],
        //  [6, 92], [7, 78], [6, 95],
        //  [3, 81], [0, 64], [4, 85],
        //  [2, 83], [3, 96], [4, 77],
        //  [5, 89], [4, 89], [7, 84],
        //  [4, 92], [9, 98]
       ]);

       var options = {
         width: 1200,
         height: 700,
         chart: {
           title: 'Juice Consumption',
           subtitle: 'Juices based on monthly consumed format'
         },
         hAxis: {title: 'Juice Names'},
         vAxis: {title: 'date'}
       };

       var chart = new google.charts.Scatter(document.getElementById('Annotation_Chart'));

       chart.draw(data, google.charts.Scatter.convertOptions(options));
     }

//----------------------------------------------END------------------------------------------------//
});
