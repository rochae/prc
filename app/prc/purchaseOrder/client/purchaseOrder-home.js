// : - purchase order home javascripts

if (Meteor.isClient) {

    // : - Initialize session variables
    Session.setDefault("addPurchaseOrder",  false);
    Session.setDefault("editPurchaseOrder", false);
    Session.setDefault("addPurchaseOrderEquipment", false);
    Session.setDefault('editPurchaseOrderEquipment', false);
    Session.setDefault('purchaseOrderCursor', 0);


    // : - events
    Template.purchaseOrderHome.events({

        'click #purchase-order-add-btn': function(evt, tpl) {
            //console.log('purchaseOrderList - dblclick tr.purchaseOrder')
            Router.go('/purchaseOrder/add', {});
        },
        
        'dblclick tr.purchaseOrderItem': function(evt, tpl) {
            //console.log('purchaseOrderList - dblclick tr.purchaseOrder')
            Router.go('/purchaseOrder/edit/' + this._id, {});
        },

        'click #purchaseOrderPrevious': function(evt, tpl) {
            //console.log('click #purchaseOrderPrevious');
            if (Number(Session.get('purchaseOrderCursor')) > purchaseOrderLimit - 1 ) {
                Session.set('purchaseOrderCursor', Number(Session.get('purchaseOrderCursor')) - purchaseOrderLimit );
            }
            //console.log('Previous Cursor', Session.get('purchaseOrderCursor'));

        },

        'click #purchaseOrderNext': function(evt, tpl) {
            //console.log('click #purchaseOrderNext');
            //console.log('Before Cursor', Session.get('purchaseOrderCursor'));
            //console.log('Before Count: ', PurchaseOrderCollection.find().count());
            if ( PurchaseOrderCollection.find().count() > purchaseOrderLimit - 1 ) {
                Session.set('purchaseOrderCursor', Number(Session.get('purchaseOrderCursor')) + purchaseOrderLimit);
            }
            //console.log('After Cursor', Session.get('purchaseOrderCursor'));
            //console.log('After Count: ', PurchaseOrderCollection.find().count());
        },

    });

} //: - Meteor.isClient