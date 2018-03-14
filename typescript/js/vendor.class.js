"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vendor = /** @class */ (function () {
    function Vendor(id, code, name, phone, email, isPreApproved, active) {
        this.id = id;
        this.code = code; // "this." indicates it's a member of the class
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.isPreApproved = isPreApproved;
        this.active = active;
    }
    return Vendor;
}());
exports.Vendor = Vendor;
