// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - events
    Template.purchaseOrderAdd.events({

        'click #purchase-order-cancel-btn': function(e, t) {
            console.log('purchaseOrderAdd - click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(evt, tpl) {
            console.log('purchaseOrderAdd - click add purchase-order-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrder', false);
            
            purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            PurchaseOrders.insert(purchaseOrder);
        },

    });

} //: - Meteor.isClient
