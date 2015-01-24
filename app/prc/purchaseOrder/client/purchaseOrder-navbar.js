// : - purchase order navbar javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderNavbar.helpers({

        readonly: function() {
            //console.log('purchaseOrderNavbar - readonly');
            if (Session.get('addPurchaseOrder')) {
                return 'disabled';
            }
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - readonly');
            return Session.get('editPurchaseOrder');
        },

    });

    

} //: - Meteor.isClient