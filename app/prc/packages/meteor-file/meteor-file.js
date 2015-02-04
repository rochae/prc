MeteorFile = function(options) {
    options = options || {};

    this.name   = options.name;
    this.type   = options.type;
    this.size   = options.size;
    this.source = options.source;
};

MeteorFile.fromJSONValue = function (value) {
    return new MeteorFile({
        name   : value.name,
        type   : value.type,
        size   : value.size,
        source : EJSON.fromJSONValue(value.source),  
    });
};

MeteorFile.prototype = {
    constructor: MeteorFile,

    typeName : function() {
        return "MeteorFile";
    },

    equals : function(other) {
        return this.name == other.name &&
               this.type == other.type &&
               this.size == other.size;

    },

    clone : function () {
        return new MeteorFile({
            name   : this.name,
            type   : this.type,
            size   : this.size,
            source : this.source,
        });
    },

    toJSONValue : function() {
        return {
            name   : this.name,
            type   : this.type,
            size   : this.size,
            source : EJSON.toJSONValue(this.source),
        };
    },

};

EJSON.addType("MeteorFile", MeteorFile.fromJSONValue);

// : - Client
if (Meteor.isClient) {
    _.extend(MeteorFile.prototype, {
        read : function(file, callback) {
            reader = new FileRead;
            meteorFile = this;

            callback = callback || function() {};

            reader.onload = function() {
                meteorFile.source = Uint8Array(reader.result);
                callback(null, meteorFile);
            };

            reader.onerror = function() {
                callback(reader.error);
            };

            reader.readAsArrayBuffer(file);
        },

    });

    _.extend(MeteorFile.prototype, {
        read : function(file, callback) {
            return new MeteorFile(file).read(file, callback);
        },

    });

};

// : - Server
if (Meteor.isServer) {
    Meteor.methods({
        uploadFile : function() {
            console.log(file);
        },

    });
};


console.log('Meteor File Constructor');