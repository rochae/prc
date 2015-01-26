// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDelete.helpers({
        
        deletePurchaseOrder: function() {
            console.log('purchaseOrderDelete - deletePurchaseOrder');
            return Session.get('deletePurchaseOrder');
        },

    });

    // : - events
    Template.purchaseOrderDelete.events({
        
        'click #purchase-order-delete-btn': function(evt, tpl) {
            console.log('purchaseOrderDelete - click #purchase-order-delete-btn');
            Session.set('deletePurchaseOrder', true);
        },


        'click #purchase-order-delete-confirm-btn': function(evt, tpl) {
            console.log('purchaseOrderDelete - purchase-order-delete-confirm-btn');
            Session.set('deletePurchaseOrder', false);

            console.log('PurchaserOrder._id: ', this._id)
            purchaseOrderEquipmentItems = PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id});
            purchaseOrderEquipmentItems.forEach(function(elem, idx, arry) {
                console.log('PurchaseorderEquipment._id: ', elem._id);
                console.log('PurchaseorderEquipment.purchaseOrderId: ', elem.purchaseOrderId);
                console.log('PurchaseorderEquipment.equipment: ', elem.equipment);

                EquipmentCollection.findOne({_id : elem.equipmentId})
                console.log('insert Equipment', EquipmentCollection.findOne({_id : elem.equipmentId}));
                
                });
            Router.go('/purchaseOrder');
        },


        /*
        'click #purchase-order-cancel-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
        },
        
        'click #purchase-order-save-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-save-btn');
            //evt.preventDefault();
            Session.set('addPurchaseOrder', false);

            purchaseOrder   = purchaseOrderFromTemplate(tpl);
            purchaseOrderId = PurchaseOrderCollection.insert(purchaseOrder);
            console.log('insert purchaseOrder', PurchaseOrderCollection.findOne({_id : purchaseOrderId}));

            purchaseOrderEquipmentItems = Session.get('purchaseOrderEquipmentItems');
            purchaseOrderEquipmentItems.forEach(function(elem, idx, arry) {
                equipmentId          = EquipmentCollection.insert(elem.equipment);
                elem.purchaseOrderId = purchaseOrderId;
                elem.equipmentId     = equipmentId;
                delete elem.equipment;
                delete elem.idx;
                purchaseOrderEquipmentId = PurchaseOrderEquipmentCollection.insert(elem);
            
            
            console.log('insert Equipment', EquipmentCollection.findOne({_id : equipmentId}));
            console.log('insert PurchaseOrderEquipment', PurchaseOrderEquipmentCollection.findOne({_id : purchaseOrderEquipmentId}));
            });
            //purchaseOrderEquipment.purchaseOrderId = this._id || 0;
            //purchaseOrderEquipment.equipmentId     = EquipmentCollection.insert(equipment);
            //PurchaseOrderEquipmentCollection.insert(purchaseOrderEquipment);
            //console.log('this._id || 0: ', this._id || 0);
            //console.log('purchaseOrderEquipment.equipmentId: ', this.equipmentItems);
            //console.log('purchaseOrderEquipment: ', purchaseOrderEquipment);
        },
        */

    });

} //: - Meteor.isClient
