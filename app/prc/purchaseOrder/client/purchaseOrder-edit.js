// : - purchase order edit javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEdit.helpers({
        
        editPurchaseOrder: function() {
            //console.log('purchaseOrderEdit - addEditPurchaseOrder');
            return ((Session.get('editPurchaseOrder')) && (Session.get('addPurchaseOrder')));
        },

        viewPurchaseOrder: function() {
            //console.log('purchaseOrderEdit - addEditPurchaseOrder');
            return ((Session.get('editPurchaseOrder')) && (! Session.get('addPurchaseOrder')));
        },

    });

    // : - events
    Template.purchaseOrderEdit.events({

        'click #purchase-order-cancel-btn': function(evt, tpl) {
            //console.log('purchaseOrderEdit - click #purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(evt, tpl) {
            //console.log('purchaseOrderEdit - click #purchase-order-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrder', false);
            purchaseOrder = purchaseOrderFromTemplate(tpl);
            PurchaseOrderCollection.update({_id: this._id}, purchaseOrder);
        },

        'click #purchase-order-edit-btn': function(evt, tpl) {
            //console.log('purchaseOrderEdit - purchase-order-edit-btn');
            Session.set('addPurchaseOrder', true);
        },

    });

} //: - Meteor.isClient
