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
    this.market                   = "Domestic"; 
    this.weeksDeliverQuoted       = null;
    this.weeksDeliverActual       = null;
    this.weeksDeliverDrawing      = null;
    this.equipment                = [ //{ item: 1, 
                                      //  quantity: 1, unit: "Lot", 
                                      //  name: "Equipment 1", 
                                      //  tag: "Eq Tag 1", 
                                      //  category: "Eq Category 1",
                                      //  description: "Eq Description One 1234567890\n Another Line",
                                      //  wbsNo: "WBS-56789012", 
                                      //  unitPrice: "299,000.00", 
                                      //  extendedPrice: "299,000.00",
                                      //  documentLink: "c:/temp/_93559181.dwg", 
                                      //  attachedDocumentId: "attachedDocument-0001", 
                                      //},
                                    ];

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
            this.purchaseOrderDate = mm + '-' + dd + '-' + yyyy;
        }
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