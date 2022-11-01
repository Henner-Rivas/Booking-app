"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.get("/ping", (_req, res) => {
    console.log("someon pinged here now");
    res.send("ping");
});
app.listen(port, () => {
    console.log("server running on port now ", port);
});
