EquipmentCollection = new Mongo.Collection("equipment");

// : - EquipmentCategory Class
Equipment = function() { 
    this.name              = "Equipment 1";
    this.category          = "Carbon Filter";
    this.description       = "Eq Description One 1234567890\n Another Line";
    this.documentLink      = "c:/temp/_93559181.dwg";
    this.documentAttached  = "attachedDocument-0001";
}