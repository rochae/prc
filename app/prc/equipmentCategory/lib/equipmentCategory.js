EquipmentCategoryCollection = new Mongo.Collection("equipmentCategory");

// : - Server 
if (Meteor.isServer) {

    Meteor.publish('EquipmentCategoryCollection', function() {
        return EquipmentCategoryCollection.find();
    });

};

// : - Client 
if (Meteor.isClient) {

    Meteor.autorun( function() {
        Meteor.subscribe('EquipmentCategoryCollection');
    });

};

// : - EquipmentCategory Class
EquipmentCategory = function() { 
    this._name = null;
}
