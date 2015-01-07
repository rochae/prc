// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderAdd.helpers({
        

        addPurchaseOrderEquipment: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return (Session.get("addPurchaseOrderEquipment"));
        },
        
    });

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

        'click #purchase-order-eq-add-btn': function(e, t) {
            console.log('click purchaseOrderAdd purchase-order-eq-add-btn');
            Session.set('addPurchaseOrderEquipment', true);
        },

    });

} //: - Meteor.isClient
