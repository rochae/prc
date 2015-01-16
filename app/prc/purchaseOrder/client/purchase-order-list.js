// : - purchase order list javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderList.helpers({

        purchaseOrders: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return PurchaseOrders.find();
        },
        
    });

    // : - events
     Template.purchaseOrderList.events({
        'dblclick tr.purchaseOrder': function(evt, tpl) {
            console.log('purchaseOrderList - dblclick tr.purchaseOrder')
            Router.go('/purchaseOrder/edit/' + this._id, {});
        },
        
    });

} //: - Meteor.isClient