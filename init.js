$(function(){
	
	var r = Raphael('map', 1200, 800),
		attributes = {
            fill: '#ededed'
        },
		arr = new Array();
	
	for (var country in paths) {
		
		var obj = r.path(paths[country].path);
		
		obj.attr(attributes);
		
		arr[obj.id] = country;
		
		obj.hover(function(){
			this.animate({
				fill: '#83a7e1'
			}, 300);
		}, function(){
			this.animate({
				fill: attributes.fill
			}, 300);
		}),
		obj.click(function(){
			var countrytext = paths[arr[this.id]].text;
            var newbox = document.createElement("div");
            newbox.className += " column3";
            newbox.innerHTML = countrytext;
            document.getElementById("columns").appendChild(newbox);
		})
	}	
});

