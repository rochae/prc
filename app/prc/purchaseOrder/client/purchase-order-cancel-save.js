// : - purchase order cancelSave javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderCancelSave.helpers({
        
        cancelSaveLink: function() {
            if (Session.get('editPurchaseOrder')) {
                return '';
            }
            return '/purchaseOrder';
        },

    });
}