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

            if (Session.get('editPurchaseOrder')) {
                if (Session.get('editPurchaseOrderEquipment')) {
                    console.log('save - this._id: ', this._id);
                    console.log('save - this.equipmentId: ', this.equipmentId);

                    purchaseOrderEquipment.equipmentId     = this.equipmentId;
                    purchaseOrderEquipment.purchaseOrderId = this.purchaseOrderId;
                    EquipmentCollection.update({_id : this.equipmentId}, equipment);
                    PurchaseOrderEquipmentCollection.update({_id : this._id}, purchaseOrderEquipment)
                    return
                }
                equipmentId = EquipmentCollection.insert(equipment.equipment);
                purchaseOrderEquipment.equipmentId     = equipmentId;
                purchaseOrderEquipment.purchaseOrderId = this._id;
                PurchaseOrderEquipmentCollection.insert(purchaseOrderEquipment);
                return
            }
            console.log('save - this.equipmentId');
            purchaseOrderEquipmentItems = Session.get('purchaseOrderEquipmentItems');
            purchaseOrderEquipment.equipment      = equipment;
            purchaseOrderEquipment.idx            = this.idx;
            purchaseOrderEquipmentItems[this.idx] = purchaseOrderEquipment;
            Session.set('purchaseOrderEquipmentItems', purchaseOrderEquipmentItems);

            console.log('this.idx: ', this.idx);
            console.log('equipment: ', equipment);
            console.log('purchaseOrderEquipment: ', purchaseOrderEquipment);
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