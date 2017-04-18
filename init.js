$(function(){
	
	var r = Raphael('map', 1200, 800),
		attributes = {
            fill: '#ffffff'
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
			var body = document.getElementById("body");
			body.style.background = "red";
			var newbox = document.createElement("div");
            newbox.className += " column2";
            newbox.innerHTML = "DENNIS BYDLO ON SJEL WSEH MISCHEK I NE PODELILSA BYDLO BYDLO BYDLO";
            document.getElementById("columns").appendChild(newbox);
		})
	}
	
		
			
});

