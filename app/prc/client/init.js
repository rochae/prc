// : - application javascripts

if (Meteor.isClient) {

    Meteor.startup(function() {
        //console.log('Client - Startup - Uploader');
        Uploader.finished = function(fileInfo, templateContext) {
            console.log('Uoload fileInfo: ', fileInfo);
            console.log('Upload templateContext: ', templateContext);
            Session.set('purchaseOrderEquipmentDatasheet', templateContext.name);
            //pathArray = templateContext.path.split('/');
            //purchaseOrderEquipmentId = pathArray[1];
            //PurchaseOrderEquipmentCollection.update({_id : purchaseOrderEquipmentId}, {$set : {datasheet : templateContext.name }});
            //console.log('pathArray: ', pathArray);
            //console.log('templateContext', templateContext);
            //console.log('datasheet:', datasheet);
            //console.log('this.datasheet:', this.datasheet);
            //pruchaseOrderId = pathArray[0];
        };
    });
}