// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - events
    Template.purchaseOrderEquipmentHome.events({

        'click #purchase-order-equipment-add-btn': function(e, t) {
            //console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);   
        },

        'dblclick tr.purchaseOrderEquipmentItem': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentHome - dblclick tr.purchaseOrderEquipmentItem')
            Session.set('editPurchaseOrderEquipment', true);
            Session.set('purchaseOrderEquipmentId', this._id);
            return this;
        },

    }); 

} //: - Meteor.isClient