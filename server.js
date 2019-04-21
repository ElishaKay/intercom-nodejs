var Intercom = require('intercom-client');

var client = new Intercom.Client({token: process.env.INTERCOM_API_TOKEN});

client.counts.conversationCounts(function(res){
	console.log(res.body);
});


