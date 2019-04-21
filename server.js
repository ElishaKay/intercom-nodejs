const util = require('util');
var request = require('request');

var Intercom = require('intercom-client');


var client = new Intercom.Client({token: process.env.INTERCOM_API_TOKEN});

// works:
// client.counts.conversationCounts(function(res){
// 	console.log(res.body);
// });

// works:
// client.tags.create({ name: 'interested_in_captcha' }, function(res){
// 	console.log(res.body);
// });



client.conversations.list({ keywords: 'captcha' }, function(res){
	let response = res.body;
	console.log('length: ',response.conversations.length);
	// console.log(util.inspect(response, {showHidden: false, depth: null}))

	const options = {  
    url: response.pages.next,
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    	}
	};
	
	request(options, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	});

	// console.log('length: ',response.conversations.length);
});