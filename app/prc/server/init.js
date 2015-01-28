if (Meteor.isServer) {

    Meteor.startup(function () {
        console.log('Server - Startup - UploadServer');
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/.uploads/',
            checkCreateDirectories: true, //create the directories for you
        });
    });

}