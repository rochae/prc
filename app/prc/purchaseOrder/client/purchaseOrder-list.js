// : - purchase order list javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderList.helpers({

        purchaseOrderItems: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return PurchaseOrderCollection.find();
        },
        
    });

} //: - Meteor.isClient