 // : - PurchaseOrders Collection
PurchaseOrderCollection = new Mongo.Collection("purchaseOrder");

// : - PurchaseOrder Class
PurchaseOrder = function() { 
    this.purchaseOrderNo          = "PO-No";
    this.purchaseOrderDate        = null;
    this.purchaseOrderDescription = null; 
    this.projectNo                = null;
    this.projectName              = null;
    this.vendor                   = null;
    this.buyer                    = null; 
    this.purchaseLocation         = null; 
    this.pointOfOrigin            = null; 
    this.market                   = "Domestic"; 
    this.weeksDeliverQuoted       = null;
    this.weeksDeliverActual       = null;
    this.weeksDeliverDrawing      = null;
    

    this.fromTemplate = function(tpl) {
        this.purchaseOrderNo          = tpl.find('#purchaseOrderNo').value;
        this.purchaseOrderDate        = tpl.find('#purchaseOrderDate').value;
        if (! this.purchaseOrderDate) {
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
            this.purchaseOrderDate = yyyy + '-' + mm + '-' + dd;
        }
        console.log('purchaseOrderDate Out', this.purchaseOrderDate);
        this.purchaseOrderDescription = tpl.find('#purchaseOrderDescription').value;
        this.projectNo                = tpl.find('#projectNo').value;
        this.projectName              = tpl.find('#projectName').value;
        this.vendor                   = tpl.find('#vendor').value;
        this.buyer                    = tpl.find('#buyer').value;
        this.purchaseLocation         = tpl.find('#purchaseLocation').value;
        this.pointOfOrigin            = tpl.find('#pointOfOrigin').value;
        this.weeksDeliverQuoted       = tpl.find('#weeksDeliverQuoted').value;
        this.weeksDeliverActual       = tpl.find('#weeksDeliverActual').value;
        this.weeksDeliverDrawing      = tpl.find('#weeksDeliverDrawing').value;
        marketDomestic                = tpl.find('#marketDomestic')
        if (marketDomestic.checked) {
            this.market = marketDomestic.value;
        }
        else {
            this.market = tpl.find('#marketInternational').value;
        }
        return this;
    }
};