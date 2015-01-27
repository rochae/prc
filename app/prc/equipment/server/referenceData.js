if (Meteor.isServer) {

    Meteor.startup(function () {
    // code to run on server at startup

    if ( ! (EquipmentCategoryCollection.find().count()) ) {
        console.log("Adding EquipmentCategory Reference Data");
        EquipmentCategoryReferenceData = [
            { categoryName : 'Air Cooler' },
            { categoryName : 'Amine Regeneration' },
            { categoryName : 'Carbon Filter' },
            { categoryName : 'Centrifgual Pump - Inline' },
            { categoryName : 'Centrifugal Compressor - Electric' },
            { categoryName : 'Centrifugal Compressor - Natural Gas Turbine' },
            { categoryName : 'Centrifugal Pump - Overhung ' },
            { categoryName : 'Chemical Injection' },
            { categoryName : 'Electrostatic Treater' },
            { categoryName : 'Filter / Coalescer' },
            { categoryName : 'Flare Tip / FFG' },
            { categoryName : 'Fuel Gas Skid' },
            { categoryName : 'Gas Burner' },
            { categoryName : 'Generator - Diesel' },
            { categoryName : 'Generator - Natural Gas' },
            { categoryName : 'Glycol Regeneration' },
            { categoryName : 'Heat Exchanger - Shell and Tube' },
            { categoryName : 'Heat Exchanger Braised Aluminum' },
            { categoryName : 'Heat Exchanger Plate and Frame' },
            { categoryName : 'Heat Medium System' },
            { categoryName : 'Instrument Air Skid' },
            { categoryName : 'Internal - Packing' },
            { categoryName : 'Internal - Trays' },
            { categoryName : 'Launcher/Reciever' },
            { categoryName : 'Manifold' },
            { categoryName : 'Multi - Stage Horizontal Pump' },
            { categoryName : 'Multi - Stage Vertical Pump' },
            { categoryName : 'Oil Heater' },
            { categoryName : 'Particulate Filter' },
            { categoryName : 'Pneumatic Metering Pump' },
            { categoryName : 'Positive Displacement Pump' },
            { categoryName : 'Reciprocating Compressor - Diesel' },
            { categoryName : 'Reciprocating Compressor - Electric' },
            { categoryName : 'Reciprocating Compressor - Natural Gas' },
            { categoryName : 'Screw Compressor - Diesel' },
            { categoryName : 'Screw Compressor - Electric' },
            { categoryName : 'Screw Compressor - Natural Gas' },
            { categoryName : 'Submersible Pump' },
            { categoryName : 'Sump Tank' },
            { categoryName : 'Tanks' },
            { categoryName : 'Tower - Stripper' },
            { categoryName : 'Tower - Treater' },
            { categoryName : 'Turbo Expander' },
            { categoryName : 'Vessel - 2PH' },
            { categoryName : 'Vessel - 3PH' },
            { categoryName : 'WHRU' },
            { categoryName : 'Dehydrator' },
        ];
        EquipmentCategoryReferenceData.forEach( function(element, index, array) {
            EquipmentCategoryCollection.insert(element);
        });
    }

  });

}
