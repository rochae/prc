// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - events
    Template.purchaseOrderEquipmentHome.events({

        'click #purchase-order-equipment-add-btn': function(e, t) {
            //console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);
            Session.set('purchaseOrderEquipmentId', 0);  
        },

        'dblclick tr.purchaseOrderEquipmentItem': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentHome - dblclick tr.purchaseOrderEquipmentItem')
            if (Session.get('addPurchaseOrder') ) {
                return;
            }
            Session.set('editPurchaseOrderEquipment', true);
            Session.set('purchaseOrderEquipmentId', this._id);
        },

    }); 

} //: - Meteor.isClient