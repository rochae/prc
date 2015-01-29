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
                filePath = formData.purchaseOrderId + '/' + formData.purchaseOrderEquipmentId;
                return filePath;
            },
            /* 
            finished: function(fileInfo, formFields) {
                //pathArray = formFields.split('/');
                //pruchaseOrderId = pathArray[0];
                //purchaseOrderEquipmentId = pathArray[1];
                //console.log('pruchaseOrderId: ', pruchaseOrderId);
                //console.log('purchaseOrderEquipmentId: ', purchaseOrderEquipmentId);
                //PurchaseOrderEquipmentCollection.update({_id : purchaseOrderEquipmentId}, {$set : {datasheet : fileInfo }});
            }
            */
        });
    });

}