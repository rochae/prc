// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - events
     Template.purchaseOrderAdd.events({
        'click #purchase-order-cancel-btn': function(e, t) {
            console.log('click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(e, t) {
            console.log('click add purchase-order-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrder', false);

            description = t.find("input[name=purchaseOrderNo]");
            console.log(description.value);
        },

    });

} //: - Meteor.isClient
