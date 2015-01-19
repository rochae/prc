Router.configure({
    layoutTemplate: 'appLayout',
    notFoundTemplate: 'notFound',

    // : - Uncommend when data subscription is done.
    /* -- 
    waitOn: function() {
        return [
          Meteor.subscribe('publicLists'),
          Meteor.subscribe('privateLists')
        ];
    },
    -- */

});

Router.route('/', function () {
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', false);
  Session.set('addPurchaseOrderEquipment', false);

  this.render('home', {
    data: function() {
        return { appVersion : '0.90' };
    }
  });
  
});

Router.route('/purchaseOrder', function () {
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', false);
  Session.set('addPurchaseOrderEquipment', false);

  this.render('purchaseOrderHome');

});

Router.route('/purchaseOrder/add', function () {
  Session.set('addPurchaseOrder',  true);
  Session.set('editPurchaseOrder', false);
  Session.set('addPurchaseOrderEquipment', false);

  this.render('purchaseOrderAdd', {
    data: function() {
      purchaseOrder          = new PurchaseOrder();
      purchaseOrderEquipmentItems = [];
      purchaseOrder.equipmentItems = purchaseOrderEquipmentItems;
      return purchaseOrder;
    }
  });

});

Router.route('/purchaseOrder/edit/:_id', function () {
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', true);
  Session.set('addPurchaseOrderEquipment', false);

  this.render('purchaseOrderEdit', {
    data: function() {
      purchaseOrder = PurchaseOrderCollection.findOne({_id: this.params._id});
      console.log("1. purchaseOrder : ", purchaseOrder);
      if ( purchaseOrder ) {
        console.log("2. purchaseOrder : ", purchaseOrder);
        purchaseOrder.equipmentItems = [{item: 10, quantity: 20}, ];
        console.log("3. purchaseOrder : ", purchaseOrder);
      }
      //po.equipmentItems = [{item: 10, quantity: 20}, ];
      return purchaseOrder;
    }
  });

});

