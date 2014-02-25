var expect = require('expect.js');
var _ = require('underscore');

var opts = {apiKey:""};
var bigOvenAPI = require('../bigoven.js')(opts);

describe('bigoven()', function () {
    it('should search recipes', function (done) {
      var result = null;
      bigOvenAPI.search({'any_kw':'kale', 'pg':1, 'rpp':1}, 
			function(err, res, body) {
			  console.log(err);
			  console.log(body);
			  console.log("searching...");
			  expect(res.statusCode).to.be(200);
			  done();
			});
    });
    it('should return a recipe', function (done) {
      var result = null;
      bigOvenAPI.recipe("187203", 
			function(err, res, body) {
			  console.log(err);
			  console.log(body);
			  expect(res.statusCode).to.be(200);
			  done();
			});
    });
});

