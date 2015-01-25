// : - purchase order edit javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEdit.helpers({
        
        addPurchaseOrder: function() {
            //console.log('purchaseOrderEdit - addEditPurchaseOrder');
            return Session.get('addPurchaseOrder');
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
            //console.log('purchaseOrderEdit - click #purchase-order-save-btn - purchaseOrder: ', purchaseOrder);
            PurchaseOrderCollection.update({_id: this._id}, purchaseOrder);
            //console.log(PurchaseOrders.findOne({_id: this._id}));
        },

        'click #purchase-order-edit-btn': function(evt, tpl) {
            //console.log('purchaseOrderEdit - purchase-order-edit-btn');
            Session.set('addPurchaseOrder', true);

        },

    });

} //: - Meteor.isClient
