if (Meteor.isClient) {
		  
	  
	Template.body.helpers({
		jobs: [
			{ title: "Job 1" },
			{ title: "Job 2" },
			{ title: "Job 3" }
		]
	});
	  
  
}

if (Meteor.isServer) {
	
	Meteor.startup(function () {

	});

}
