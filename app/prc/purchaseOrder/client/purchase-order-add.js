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
            
            //console.log('purchaseOrderAdd -  purchaseOrder: ', purchaseOrder);
            //description = tpl.find("input[name=purchaseOrderNo]");
            //console.log('description: ', description.value);
            purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            PurchaseOrders.insert(purchaseOrder);
        },

    });

} //: - Meteor.isClient
