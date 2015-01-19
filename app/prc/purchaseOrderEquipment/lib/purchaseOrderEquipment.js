PurchaseOrderEquipmentCollection = new Mongo.Collection("purchaseOrderEquipment");

PurchaseOrderEquipment = function() {
    this.equipmentId   = null;
    this.item          = 10;
    this.quantity      = null;
    this.unit          = null;
    this.equipment     = null;
    this.wbsNo         = null;
    this.priceUnit     = null;
    this.priceExtended = null;
    this.equipment     = [];

}