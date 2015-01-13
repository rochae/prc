// : - purchase order edit javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEdit.helpers({
        
        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

    });

    // : - events
    Template.purchaseOrderEdit.events({

        'click: #purchase-order-edit-btn': function(evt, tpl) {
            Session.set('purchaseOrderEdit - click: #purchase-order-edit-btn', true);   
        },

        'click #purchase-order-cancel-btn': function(evt, tpl) {
            console.log('purchaseOrderEdit - click #purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(evt, tpl) {
            console.log('purchaseOrderEdit - click #purchase-order-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrder', false);

            purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            console.log('purchaseOrderEdit - purchaseOrder: ', purchaseOrder);
            console.log('Updated PurchaseOrder: ', purchaseOrder);

            PurchaseOrders.update(this._id, purchaseOrder);
        },

        'click #purchase-order-eq-add-btn': function(evt, tpl) {
            console.log('purchaseOrderEdit - click #purchase-order-save-btn');
            Session.set('addPurchaseOrderEquipment', true);
        },

    });

} //: - Meteor.isClient
