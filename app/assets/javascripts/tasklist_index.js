
function first(labelString, dataString){
	var barChartData = {
  		labels : labelString,
  		datasets : [
  			{
  			    
  				fillColor : "rgba(220,220,220,0.5)",
  				strokeColor : "rgba(220,220,220,0.8)",
  				highlightFill: "rgba(220,220,220,0.75)",
  				highlightStroke: "rgba(220,220,220,1)",
  				data : dataString
  			}
  		]
  	};
  	return barChartData;
};

function onld(barChartData,displayday){
    $(document).ready(function(){
  		var ctx = document.getElementById("canvas").getContext("2d");
    	var chart = new Chart(ctx).HorizontalBar(barChartData, {
  			scaleFontSize: 17,
  			tooltipEvents: ["mousemove", "touchstart", "touchmove"],
  			showScale: true,
  			scaleLineWidth: 5
  			//scaleLabel: displayday
  		});
  	});
};