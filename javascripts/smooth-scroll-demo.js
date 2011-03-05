$(document).ready(function() {
	//BEGIN DEMO CODE TO ALLOW URL PARAMS WITH ONLY JS
	//IE: YOU DON'T NEED TO ADD THIS PART
		function getParams() {
		  var idx = document.URL.indexOf('?');
		  var params = new Array();

		  if (idx != -1) {
		    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		    for (var i=0; i<pairs.length; i++) {
		      nameVal = pairs[i].split('=');
		      params[nameVal[0]] = nameVal[1];
		    }
		  }
			return params;
		}
	
		var params = getParams();

		if(params['car_make']){
			$('body').append('<div>Make selected: ' + params['car_make'] + '</div>');
			var selectTag = $('select[name="car_make"]');
			var selectedOption = selectTag.find('option[value="' + params['car_make'] + '"]');
			selectedOption.attr('selected', 'true');
		}
		if(params['car_make2']){
			$('body').append('<div>Second Make selected: ' + params['car_make2'] + '</div>');
			var selectTag = $('select[name="car_make2"]');
			var selectedOption = selectTag.find('option[value="' + params['car_make2'] + '"]');
			selectedOption.attr('selected', 'true');
		}								
	//END DEMO CODE TO ALLOW URL PARAMS WITH ONLY JS

  $('select.jq_hoverToScroll').jq_smoothScrollSelect();

  $('select.jq_changeScrollSpeed').jq_smoothScrollSelect({
  	scrollTime: 80
  });

  $('select.jq_clickToScroll').jq_smoothScrollSelect({
  	scrollEvent: 'click'
  });

  $('select.jq_afterOpenExample').jq_smoothScrollSelect({
  	scrollTime: 200,
  	afterOpen: function(wrapper){
  		wrapper.find('li').each(function(index, element){
  			var colors = ['red', 'white', 'blue']
  			$(element).css('background-color', colors[index % 3]);
  		})
  	}
  });
	
  $('select.jq_afterSelectExample').jq_smoothScrollSelect({
  	afterSelect: function(clicked_li){
  		alert('You selected ' + clicked_li.html() + '!');
  	}
  });
});