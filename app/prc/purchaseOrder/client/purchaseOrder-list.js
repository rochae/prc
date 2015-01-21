// : - purchase order list javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderList.helpers({

        purchaseOrderItems: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return PurchaseOrderCollection.find();
        },
        
    });

    // : - events
    Template.purchaseOrderList.events({
        'dblclick tr.purchaseOrderItem': function(evt, tpl) {
            //console.log('purchaseOrderList - dblclick tr.purchaseOrder')
            Router.go('/purchaseOrder/edit/' + this._id, {});
        },
        
    });

} //: - Meteor.isClient