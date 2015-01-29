if (Meteor.isServer) {

    Meteor.startup(function () {
        console.log('Server - Startup - UploadServer');
        //console.log('process: ', process.env);
        UploadServer.init({
            tmpDir: process.env.PWD + '/../docs/tmp',
            uploadDir: process.env.PWD + '/../docs/',
            checkCreateDirectories: true, //create the directories for you
            getDirectory: function(fileInfo, formData) {
                // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
                console.log('getDirectory fileInfo: ', fileInfo);
                console.log('getDirectory formData: ', formData);
                return formData.purchaseOrderId;
            },
            finished: function(fileInfo, formFields) {
                // perform a disk operation
              console.log('finished fileInfo: ', fileInfo);
              console.log('finished formFields: ', formFields);
            }
        });
    });

}