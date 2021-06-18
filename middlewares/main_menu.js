/**
* 메인메뉴 middleware
*
*/
module.exports.mainMenu = function(req, res, next) {
	res.locals.mainMenu = [
		
	];

	next();
};
