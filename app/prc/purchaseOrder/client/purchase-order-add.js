// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderAdd.helpers({

        addPurchaseOrderEquipment: function() {
            return (Session.get("addPurchaseOrderEquipment"));
        },
        
    });

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
            //console.log('purchaseOrderAdd -  purchaseOrder: ', purchaseOrder);
            //description = tpl.find("input[name=purchaseOrderNo]");
            //console.log('description: ', description.value);
            PurchaseOrders.insert(purchaseOrder);
        },

        'click #purchase-order-eq-add-btn': function(e, t) {
            console.log('purchaseOrderAdd - click purchaseOrderAdd purchase-order-eq-add-btn');
            Session.set('addPurchaseOrderEquipment', true);
        },

    });

} //: - Meteor.isClient
