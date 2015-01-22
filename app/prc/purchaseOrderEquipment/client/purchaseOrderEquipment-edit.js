// : - purchase order equipment add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentEdit.helpers({

        showModal: function() {
            console.log('purchaseOrderEquipmentEdit - showModal');
            if (Session.get('editPurchaseOrderEquipment')) {
                return "show";
            }
        },

    });        

    // : - events
    Template.purchaseOrderEquipmentEdit.events({

        'click .close, click #equipment-close-btn': function(evt, tpl) {
            console.log('purchaseOrderEquipmentEdit - click .close, click #equipment-close-btn');
            Session.set('editPurchaseOrderEquipment', false);
        },
    
        'click #equipment-save-btn': function(evt, tpl) {
            event.preventDefault();
            console.log('purchaseOrderEquipmentEdit - click #equipment-save-btn');
            Session.set('editPurchaseOrderEquipment', false);

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