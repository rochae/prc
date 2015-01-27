// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - events
    Template.purchaseOrderAdd.events({

        'click #purchase-order-cancel-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-cancel-btn');
            Session.set('addPurchaseOrder', false);
            Router.go('/purchaseOrder', {});
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

        'click #purchase-order-next-btn': function(evt, tpl) {
            //console.log('purchaseOrderAdd - click add purchase-order-save-btn');
            //evt.preventDefault();
            Session.set('addPurchaseOrder', false);

            purchaseOrder   = purchaseOrderFromTemplate(tpl);
            purchaseOrderId = PurchaseOrderCollection.insert(purchaseOrder);
            console.log('insert purchaseOrder', PurchaseOrderCollection.findOne({_id : purchaseOrderId}));
            Router.go('/purchaseOrder/edit/' + purchaseOrderId, {});
        },

    });

} //: - Meteor.isClient
