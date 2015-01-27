// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - events
    Template.purchaseOrderAdd.events({

        'click #purchase-order-cancel-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
            Router.go('/purchaseOrder', {});
        },
        
        'click #purchase-order-next-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-save-btn');
            //evt.preventDefault();
            Session.set('addPurchaseOrder', false);
            purchaseOrder   = purchaseOrderFromTemplate(tpl);
            purchaseOrderId = PurchaseOrderCollection.insert(purchaseOrder);
            Router.go('/purchaseOrder/edit/' + purchaseOrderId, {});
        },

    });

} //: - Meteor.isClient
