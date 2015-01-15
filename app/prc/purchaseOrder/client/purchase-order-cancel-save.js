// : - purchase order cancelSave javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderCancelSave.helpers({
        
        cancelSaveLink: function() {
            //console.log('purchaseOrderCancelSave - cancelSaveLink: ', Session.get('editPurchaseOrder'));
            //console.log('purchaseOrderCancelSave - cancelSaveLink: ', this._id);
            if (!Session.get('editPurchaseOrder')) {
                return '/purchaseOrder';
            }
        },

    });
}