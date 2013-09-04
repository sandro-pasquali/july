module.exports = function(opts) {

	var facade = new function(){};

	var day;
	
	for(day=0; day <= 31; day++) {
		facade["day" + day] = (function(d) {
			return function() {
				this.day = d;
				
				return this;
			}
		})(day);
	}
	
	facade.translate = function(toL) {
		return ({
			french 	: "Juillet",
			spanish	: "Julio",
			german  : "Juli"
		})[toL] || null;
	}
	
	return facade;
};