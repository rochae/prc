// : - application javascripts

if (Meteor.isClient) {

    Meteor.startup(function() {
        console.log('Client - Startup - Uploader');
        Uploader.finished = function(fileInfo, templateContext) {
            console.log('Uploader fileInfo: ', fileInfo);
            console.log('Uploader templateContext: ', templateContext);
            Session.set('datasheetPath', templateContext.path);
        };
    });

}