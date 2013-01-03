// Your lib code.

var Mictorios = function(qty) {
	this.livres = function() {
		var mic_livres = 0,
		    x = 0;

		qty.push(0);
		for (var i = 0; i < qty.length - 1; i++) {
			if (!qty[i] && x == 0 && qty[i + 1] == 0) {
				mic_livres++;
			}
			
			x = qty[i];
		};

		return Math.ceil(mic_livres / 2);
	}
}