"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    department: String,
});
//# sourceMappingURL=student.schema.js.map