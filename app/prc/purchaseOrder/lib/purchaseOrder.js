 // : - PurchaseOrders Collection
PurchaseOrders = new Mongo.Collection("purchaseOrders");


// : - PurchaseOrder Class
PurchaseOrder = function() { 
    this.purchaseOrderNo   = "";
    this.purchaseOrderRev  = "";
    this.purchaseOrderType = "";
    this.purchaseOrderDesc = "";
    this.purchaseOrderDate = ""; 
    this.projectNo   = "";
    this.projectName = "";
    this.vendor      ="";
    this.purchaseLocation = ""; 
    this.pointOfOrigin    = ""; 
    this.market = ""; 
    this.skid   = false;
    this.buyer  = ""; 
    this.weeksDeliverQuoted  = "";
    this.weeksDeliverActual  ="";
    this.weeksDeliverDrawing = "";
    this.equiptment = [];
};