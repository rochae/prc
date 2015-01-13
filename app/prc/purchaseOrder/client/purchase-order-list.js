// : - purchase order list javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderList.helpers({

        purchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return PurchaseOrders.find();
        },
        
    });

    // : - events
     Template.purchaseOrderList.events({
        'dblclick tr.purchaseOrder': function(e, t) {
            Router.go('/purchaseOrder/edit/' + this._id, {});
        },
        
    });

} //: - Meteor.isClient