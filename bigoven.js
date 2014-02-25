/*! bigoven v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
var request = require('request');

/**
 * Module exports
 */

module.exports = bigoven;

/**
 * @param {}
 * @return {}
 * @api public
 */

function bigoven(opts) {
  var baseURL = "http://api.bigoven.com/";

  function apiURL(resource) {
    return baseURL + resource;
  }

  function addAPIKey(qs) {
    qs.api_key = opts.apiKey;
    return qs;
  }

  return {
    search: function(searchOptions, cb) {
      var url = apiURL("recipes");
      var qs = addAPIKey(searchOptions);
      console.log(url);
      console.log(qs);
      request.get({url: url,
		   qs: qs,
		   headers: {'Content-Type': 'application/json'}},
		  cb);
    },
    recipe: function(recipeId, cb) {
      var resourcePointer = "recipe/" + recipeId;
      console.log("RP**" + resourcePointer);
      var url = apiURL(resourcePointer);
      var qs = addAPIKey({});
      console.log("URL: " + url);
      console.log(qs);
      request.get({url: url,
		   qs: qs,
		   headers: {'Content-Type': 'application/json'}},
		  cb);
    }
  }
}
