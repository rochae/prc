if (Meteor.isServer) {

    Meteor.startup(function () {
    // code to run on server at startup

    if ( ! (EquipmentCategoryCollection.find().count()) ) {
        console.log("Adding EquipmentCategory Reference Data");
        EquipmentCategoryReferenceData = [
            { _name : 'Air Cooler' },
            { _name : 'Amine Regeneration' },
            { _name : 'Carbon Filter' },
            { _name : 'Centrifgual Pump - Inline' },
            { _name : 'Centrifugal Compressor - Electric' },
            { _name : 'Centrifugal Compressor - Natural Gas Turbine' },
            { _name : 'Centrifugal Pump - Overhung ' },
            { _name : 'Chemical Injection' },
            { _name : 'Electrostatic Treater' },
            { _name : 'Filter / Coalescer' },
            { _name : 'Flare Tip / FFG' },
            { _name : 'Fuel Gas Skid' },
            { _name : 'Gas Burner' },
            { _name : 'Generator - Diesel' },
            { _name : 'Generator - Natural Gas' },
            { _name : 'Glycol Regeneration' },
            { _name : 'Heat Exchanger - Shell and Tube' },
            { _name : 'Heat Exchanger Braised Aluminum' },
            { _name : 'Heat Exchanger Plate and Frame' },
            { _name : 'Heat Medium System' },
            { _name : 'Instrument Air Skid' },
            { _name : 'Internal - Packing' },
            { _name : 'Internal - Trays' },
            { _name : 'Launcher/Reciever' },
            { _name : 'Manifold' },
            { _name : 'Multi - Stage Horizontal Pump' },
            { _name : 'Multi - Stage Vertical Pump' },
            { _name : 'Oil Heater' },
            { _name : 'Particulate Filter' },
            { _name : 'Pneumatic Metering Pump' },
            { _name : 'Positive Displacement Pump' },
            { _name : 'Reciprocating Compressor - Diesel' },
            { _name : 'Reciprocating Compressor - Electric' },
            { _name : 'Reciprocating Compressor - Natural Gas' },
            { _name : 'Screw Compressor - Diesel' },
            { _name : 'Screw Compressor - Electric' },
            { _name : 'Screw Compressor - Natural Gas' },
            { _name : 'Submersible Pump' },
            { _name : 'Sump Tank' },
            { _name : 'Tanks' },
            { _name : 'Tower - Stripper' },
            { _name : 'Tower - Treater' },
            { _name : 'Turbo Expander' },
            { _name : 'Vessel - 2PH' },
            { _name : 'Vessel - 3PH' },
            { _name : 'WHRU' },
            { _name : 'Dehydrator' },
        ];
        EquipmentCategoryReferenceData.forEach( function(element, index, array) {
            EquipmentCategoryCollection.insert(element);
        });
    }

  });

}
