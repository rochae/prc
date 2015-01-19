PurchaseOrderEquipmentCollection = new Mongo.Collection("purchaseOrderEquipment");

PurchaseOrderEquipment = function() {
    this.item          = 10;
    this.quantity      = 11;
    this.unit          = "Lot";
    this.equipmentTag  = "tag-10";
    this.equipment     = new Equipment();
    this.wbsNo         = "wbs-10";
    this.priceUnit     = 1000;
    this.priceExtended = 1100;
}