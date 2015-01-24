 // : - PurchaseOrders Collection
PurchaseOrderCollection = new Mongo.Collection("purchaseOrder");

// : - PurchaseOrder Class
PurchaseOrder = function() { 
    this.purchaseOrderNo          = null;
    this.purchaseOrderDate        = null;
    this.purchaseOrderDescription = null; 
    this.projectNo                = null;
    this.projectName              = null;
    this.vendor                   = null;
    this.buyer                    = null; 
    this.purchaseLocation         = null; 
    this.pointOfOrigin            = null; 
    this.market                   = null; 
    this.weeksDeliverQuoted       = null;
    this.weeksDeliverActual       = null;
    this.weeksDeliverDrawing      = null;
};

purchaseOrderFromTemplate = function(tpl) {
    purchaseOrder = new PurchaseOrder();
    purchaseOrder.purchaseOrderNo   = tpl.find('#purchaseOrderNo').value;
    purchaseOrder.purchaseOrderDate = tpl.find('#purchaseOrderDate').value;
    if (! purchaseOrder.purchaseOrderDate) {
        today = new Date();
        dd = today.getDate();
        if (dd < 10) {
            dd = '0' + dd;
        }
        mm = today.getMonth() + 1;
        if (mm < 10) {
            mm = '0' + mm;
        }
        yyyy = today.getFullYear();
        purchaseOrder.purchaseOrderDate = yyyy + '-' + mm + '-' + dd;
    }
    purchaseOrder.purchaseOrderDescription = tpl.find('#purchaseOrderDescription').value;
    purchaseOrder.projectNo                = tpl.find('#projectNo').value;
    purchaseOrder.projectName              = tpl.find('#projectName').value;
    purchaseOrder.vendor                   = tpl.find('#vendor').value;
    purchaseOrder.buyer                    = tpl.find('#buyer').value;
    purchaseOrder.purchaseLocation         = tpl.find('#purchaseLocation').value;
    purchaseOrder.pointOfOrigin            = tpl.find('#pointOfOrigin').value;
    purchaseOrder.weeksDeliverQuoted       = tpl.find('#weeksDeliverQuoted').value;
    purchaseOrder.weeksDeliverActual       = tpl.find('#weeksDeliverActual').value;
    purchaseOrder.weeksDeliverDrawing      = tpl.find('#weeksDeliverDrawing').value;
    marketDomestic                = tpl.find('#marketDomestic')
    if (marketDomestic.checked) {
        purchaseOrder.market = marketDomestic.value;
    }
    else {
        purchaseOrder.market = tpl.find('#marketInternational').value;
    }
    return purchaseOrder;
};