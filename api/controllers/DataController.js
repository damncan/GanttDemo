/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getData:function(req, res, next){
		var links = [{id:1, source:1, target:2, type:0},{id:2, source:1, target:3, type:0}];
		var ss = {links:links};
		Data.find().exec(function(err, data) {
			res.send({data: data, collections:ss});
		});
    },
};

