// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - events
     Template.purchaseOrderAdd.events({
        'click #purchase-order-cancel-btn': function(e, t) {
            console.log('click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(evt, tpl) {
            console.log('click add purchase-order-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrder', false);

            purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            console.log('purchaseOrder: ', purchaseOrder);
            //description = tpl.find("input[name=purchaseOrderNo]");
            //console.log('description: ', description.value);
            PurchaseOrders.insert(purchaseOrder);
        },

    });

} //: - Meteor.isClient
