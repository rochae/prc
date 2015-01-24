// : - purchase order home javascripts

if (Meteor.isClient) {

    // : - Initialize session variables
    Session.setDefault("addPurchaseOrder",  false);
    Session.setDefault("editPurchaseOrder", false);
    Session.setDefault("addPurchaseOrderEquipment", false);

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

    });

} //: - Meteor.isClient