// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDetail.helpers({

        addEditPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return ((Session.get("addPurchaseOrder")) || (Session.get("editPurchaseOrder")));
        },

        readonly: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            if ((Session.get("addPurchaseOrder")) || (Session.get("editPurchaseOrder"))) {
                return "";
            }
            return "disabled";
        },

    });

} //: - Meteor.isClient
