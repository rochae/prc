// : - purchase order equipment add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentAdd.helpers({

        showModal: function() {
            console.log('purchaseOrderEquipmentAdd - showModal');
            if (Session.get('addPurchaseOrderEquipment')) {
                return "show";
            }
        },

    });        

    // : - events
    Template.purchaseOrderEquipmentAdd.events({

        'click .close, click #equipment-close-btn': function(evt, tpl) {
            console.log('purchaseOrderEquipmentAdd - click .close, click #equipment-close-btn');
            Session.set('addPurchaseOrderEquipment', false);
        },
    
        'click #equipment-save-btn': function(evt, tpl) {
            event.preventDefault();
            console.log('purchaseOrderEquipmentAdd - click #equipment-save-btn');
            Session.set('addPurchaseOrderEquipment', false);

            equipment              = equipmentFromTemplate(tpl);
            purchaseOrderEquipment = purchaseOrderEquipmentFromTemplate(tpl);
            purchaseOrderEquipment.equipment = equipment;
            purchaseOrderEquipmentItems = Session.get('purchaseOrderEquipmentItems');
            purchaseOrderEquipmentItems.push(purchaseOrderEquipment);
            Session.set('purchaseOrderEquipmentItems', purchaseOrderEquipmentItems);
            console.log('purchaseOrderEquipmentItems: ', Session.get('purchaseOrderEquipmentItems'));
            
            //purchaseOrderEquipment.purchaseOrderId = this._id || 0;
            //purchaseOrderEquipment.equipmentId     = EquipmentCollection.insert(equipment);
            //PurchaseOrderEquipmentCollection.insert(purchaseOrderEquipment);
            //console.log('this._id || 0: ', this._id || 0);
            //console.log('purchaseOrderEquipment.equipmentId: ', this.equipmentItems);
            //console.log('purchaseOrderEquipment: ', purchaseOrderEquipment);
        }

    });

} //: - Meteor.isClient


/* --
        'click #purchase-order-equipment-cancel-btn': function(evt, tpt) {
            console.log('purchaseOrderEquipmentAdd - click #purchase-order-equipment-close-btn');
            Session.set('addPurchaseOrderEquipment', false);

            //EquipmentCollection.findOne({_id: this.equipmentId});
        },
        
        'click #purchase-order-equipment-save-btn': function(evt, tpl) {
            console.log('purchaseOrderEquipmentAdd - purchase-order-equipment-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrderEquipment', false);
            //purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            
            //console.log('purchaseOrderEquipmentAdd - purchaseOrder.equipmentItems: ', this.equipmentItems);
            //purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            //PurchaseOrderCollection.insert(purchaseOrder);
        },
        -- */