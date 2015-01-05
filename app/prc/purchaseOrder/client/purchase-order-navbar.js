// : - purchase order home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderNavbar.helpers({
        readonly: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            if ((Session.get("addPurchaseOrder")) || (Session.get("editPurchaseOrder"))) {
                return "disabled";
            }
            return "";
        },

    });

    // : - events
    Template.purchaseOrderNavbar.events({
        'click #purchase-order-add-btn': function(e, t) {
            //console.log('click btn.btn-add-purchase-order');
            Session.set('addPurchaseOrder', true);
        },
        
    });

} //: - Meteor.isClient