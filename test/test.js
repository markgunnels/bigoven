var expect = require('expect.js');
var _ = require('underscore');

var opts = {apiKey:"dvxKRNiPh1WPzXNKxZ58mwT27n98h1kh"};
var bigOvenAPI = require('../bigoven.js')(opts);

describe('bigoven()', function () {
    it('should search recipes', function (done) {
      var result = null;
      bigOvenAPI.search({'any_kw':'kale', 'pg':1, 'rpp':1}, 
			function(err, res, body) {
			  console.log(err);
			  console.log(res);
			  console.log("searching...");
			  expect(res.statusCode).to.be(200);
			  done();
			});
    });
});
