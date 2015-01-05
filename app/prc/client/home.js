// : - home javascripts

if (Meteor.isClient) {
    
    // : - helpers
    Template.homeContent.helpers({

        appVersion: function() {
            return "0.90a";
        },

    });

}
