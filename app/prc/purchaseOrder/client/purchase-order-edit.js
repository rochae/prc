// : - purchase order edit javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEdit.helpers({
        
        addEditPurchaseOrder: function() {
            console.log('purchaseOrderEdit - addEditPurchaseOrder');
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

            purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            //console.log('purchaseOrderEdit - purchaseOrder: ', this);

            PurchaseOrders.update({_id: this._id}, purchaseOrder);
            //console.log(PurchaseOrders.findOne({_id: this._id}));
        },

        'click #purchase-order-eq-add-btn': function(evt, tpl) {
            console.log('purchaseOrderEdit - click #purchase-order-save-btn');
            Session.set('addPurchaseOrderEquipment', true);
        },

        'click #purchase-order-edit-btn': function(evt, tpl) {
            console.log('purchaseOrderNavbar - purchase-order-edit-btn');
            Session.set('addPurchaseOrder', true);

        },

    });

} //: - Meteor.isClient
