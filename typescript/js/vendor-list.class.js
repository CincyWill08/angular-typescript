"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vendor_class_1 = require("./vendor.class");
var vendors = [
    new vendor_class_1.Vendor(1, "TRG100", "Target", "555-555-1111", "target@target.com", true, true),
    new vendor_class_1.Vendor(1, "WAL100", "Walmart", "555-555-2222", "walmart@walmart.com", true, true),
    new vendor_class_1.Vendor(1, "STP100", "Staples", "555-555-3333", "staples@staples.com", true, true),
    new vendor_class_1.Vendor(1, "OD100", "Office Depot", "555-555-4444", "officedepot@officedeport.com", true, true),
    new vendor_class_1.Vendor(1, "WALFRD100", "Wallingford", "555-555-5555", "wallingford@wallingford.com", true, true)
];
for (var _i = 0, vendors_1 = vendors; _i < vendors_1.length; _i++) {
    var vendor = vendors_1[_i];
    console.log(vendor);
}
