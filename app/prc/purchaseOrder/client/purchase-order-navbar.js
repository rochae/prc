// : - purchase order navbar javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderNavbar.helpers({
        
        readonly: function() {
            console.log('purchaseOrderNavbar - readonly');
            if (Session.get("addPurchaseOrder")) {
                return "disabled";
            }
            return "";
        },

        editPurchaseOrder: function() {
            console.log('purchaseOrderNavbar - editPurchaseOrder');
            return ((Session.get('editPurchaseOrder')))
        },

    });

    // : - events
    Template.purchaseOrderNavbar.events({
        'click #purchase-order-add-btn': function(evt, tpl) {
            console.log('purchaseOrderNavbar - purchase-order-add-btn');
            //console.log('purchaseOrderNavbar - purchase-order-add-btn - evt.currentTarget.children[0]: ', evt.currentTarget.children[0]);
            Session.set('addPurchaseOrder', true);
        },

        'click #purchase-order-edit-btn': function(evt, tpl) {
            console.log('purchaseOrderNavbar - purchase-order-edit-btn');
            Session.set('addPurchaseOrder', true);

        },
        
    });

} //: - Meteor.isClient