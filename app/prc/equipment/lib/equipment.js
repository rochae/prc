EquipmentCollection = new Mongo.Collection("equipment");

// : - EquipmentCategory Class
Equipment = function() { 
    this.category     = null;
    this._name        = null;
    this._description = null;
};

equipmentFromTemplate = function(tpl) {
    equipment = new Equipment();
    equipment.category     = tpl.find('#equipmentCategory').value;
    equipment._name        = tpl.find('#equipmentName').value;
    equipment._description = tpl.find('#equipmentDescription').value;
    return equipment;
};