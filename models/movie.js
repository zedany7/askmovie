/**
 * Created by ahmad on 06/06/2015.
 */
var mongoose = require('mongoose'),
	searchPlugin = require('mongoose-search-plugin'),
	Schema = mongoose.Schema;

var movieModel = new Schema({
	"links": {
		type: []
	},
	"name": {
		type: String
	},
	"img": {
		type: String
	}
});
movieModel.index({name: "text"});
module.exports = mongoose.model('Movie', movieModel);