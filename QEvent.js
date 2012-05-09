(function () {
    var QItem = function(Query) {
        if (!!document.querySelectorAll(Query)[1]) {
            return document.querySelectorAll(Query);
        } else {
            return document.querySelector(Query);
        }
    };
    window.$ = QItem;
    
    HTMLElement.prototype.addEvent = function (type,callback,fase) {
		if (!!document.addEventListener) {
            this.addEventListener(type, callback, fase || false);
        } else if (!!document.attachEvent) {
            this.attachEvent('on' + type, function() { 
                return callback.call(this, window.event); 
            });
		}
	};
})();