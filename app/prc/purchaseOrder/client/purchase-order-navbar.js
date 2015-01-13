// : - purchase order navbar javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderNavbar.helpers({
        
        readonly: function() {
            if (Session.get("addPurchaseOrder")) {
                return "disabled";
            }
            return "";
        },

        editPurchaseOrder: function() {
            return ((Session.get('editPurchaseOrder')))
        },

    });

    // : - events
    Template.purchaseOrderNavbar.events({
        'click #purchase-order-add-btn': function(e, t) {
            //console.log('click btn.btn-add-purchase-order');
            Session.set('addPurchaseOrder', true);
        },

        'click #purchase-order-edit-btn': function(e, t) {
            //console.log('purchase-order-edit-btn');
            Session.set('addPurchaseOrder', true);
        },
        
    });

} //: - Meteor.isClient