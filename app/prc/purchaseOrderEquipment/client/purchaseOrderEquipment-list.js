// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            console.log('purchaseOrderEquipmentList - equipmentItems');
            console.log('this._id', this._id || 0);
            console.log('equipmentItems', PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0}).fetch());
            //purchaseOrderEquipment = PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
            //return PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
            if (Session.get('addPurchaseOrder')) {
                return Session.get('purchaseOrderEquipmentItems');
            }
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id});
        },

        equipmentItem: function() {
            console.log('Equipment - equipmentItem');
            console.log('this.equipmentId', this.equipmentId);
            console.log('equipmentItems', EquipmentCollection.find({_id: this.equipmentId}).fetch());
            if (Session.get('addPurchaseOrder')) {
                return this.equipment;
            }
            return EquipmentCollection.findOne({_id: this.equipmentId});
        },

    });

    // : - events
    Template.purchaseOrderEquipmentList.events({
        'dblclick tr.purchaseOrderEquipmentItem': function(evt, tpl) {
            console.log('purchaseOrderEquipmentList - dblclick tr.purchaseOrderEquipmentItem')
            Session.set('editPurchaseOrderEquipment', true);
            console.log('this.unit', this.unit);
            console.log('this: ', this);
            console.log('this.equipment', this.equipment);
        },

    });

} //: - Meteor.isClient