if (Meteor.isServer) {

    Meteor.startup(function () {
    // code to run on server at startup

    if ( ! (EquipmentCategories.find().count()) ) {
        console.log("Adding EquipmentCategory Reference Data");
        EquipmentCategoryReferenceData = [
            { name : 'Air Cooler' },
            { name : 'Amine Regeneration' },
            { name : 'Carbon Filter' },
            { name : 'Centrifgual Pump - Inline' },
            { name : 'Centrifugal Compressor - Electric' },
            { name : 'Centrifugal Compressor - Natural Gas Turbine' },
            { name : 'Centrifugal Pump - Overhung ' },
            { name : 'Chemical Injection' },
            { name : 'Electrostatic Treater' },
            { name : 'Filter / Coalescer' },
            { name : 'Flare Tip / FFG' },
            { name : 'Fuel Gas Skid' },
            { name : 'Gas Burner' },
            { name : 'Generator - Diesel' },
            { name : 'Generator - Natural Gas' },
            { name : 'Glycol Regeneration' },
            { name : 'Heat Exchanger - Shell and Tube' },
            { name : 'Heat Exchanger Braised Aluminum' },
            { name : 'Heat Exchanger Plate and Frame' },
            { name : 'Heat Medium System' },
            { name : 'Instrument Air Skid' },
            { name : 'Internal - Packing' },
            { name : 'Internal - Trays' },
            { name : 'Launcher/Reciever' },
            { name : 'Manifold' },
            { name : 'Multi - Stage Horizontal Pump' },
            { name : 'Multi - Stage Vertical Pump' },
            { name : 'Oil Heater' },
            { name : 'Particulate Filter' },
            { name : 'Pneumatic Metering Pump' },
            { name : 'Positive Displacement Pump' },
            { name : 'Reciprocating Compressor - Diesel' },
            { name : 'Reciprocating Compressor - Electric' },
            { name : 'Reciprocating Compressor - Natural Gas' },
            { name : 'Screw Compressor - Diesel' },
            { name : 'Screw Compressor - Electric' },
            { name : 'Screw Compressor - Natural Gas' },
            { name : 'Submersible Pump' },
            { name : 'Sump Tank' },
            { name : 'Tanks' },
            { name : 'Tower - Stripper' },
            { name : 'Tower - Treater' },
            { name : 'Turbo Expander' },
            { name : 'Vessel - 2PH' },
            { name : 'Vessel - 3PH' },
            { name : 'WHRU' },
            { name : 'Dehydrator'}, 
        ];
        EquipmentCategoryReferenceData.forEach( function(element, index, array) {
            EquipmentCategories.insert(element);
        });
    }

  });

}
