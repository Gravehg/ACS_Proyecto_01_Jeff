"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDAO = void 0;
var cartS_1 = __importDefault(require("../schemas/cartS"));
var CartDAO = /** @class */ (function () {
    function CartDAO() {
    }
    //Obtiene Carrito
    CartDAO.prototype.getCart = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(idUser);
                        return [4 /*yield*/, cartS_1.default.findOne({ client: idUser })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Agrega un producto al carrito
    CartDAO.prototype.addProduct = function (idProduct, units, idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cart = new cartS_1.default({
                            client: idUser,
                            productRef: { idProduct: idProduct, units: units },
                        });
                        return [4 /*yield*/, cart.save()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Elimina un producto del carrito
    CartDAO.prototype.deleteProduct = function (idProduct, units, idUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartS_1.default.deleteOne({
                            client: idProduct,
                            productRef: { units: units, idUser: idUser },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Obtiene los productos del carrito
    CartDAO.prototype.getProductsCart = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartS_1.default.findOne({ client: idUser })];
                    case 1:
                        cart = _a.sent();
                        if (cart == null) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, { products: cart.products }];
                }
            });
        });
    };
    // Obtiene el tostring de los productos del carrito
    CartDAO.prototype.getProductsTostring = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, productsstring;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartS_1.default.findOne({ client: idUser })];
                    case 1:
                        cart = _a.sent();
                        if (cart == null) {
                            return [2 /*return*/, null];
                        }
                        productsstring = cart.products.tostring();
                        return [2 /*return*/, { productsstring: productsstring }];
                }
            });
        });
    };
    // Obtiene el precio del carrito FALTA
    CartDAO.prototype.getPriceCart = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartS_1.default.find({ client: idUser })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Compra el carrito FALTA
    CartDAO.prototype.buyCart = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cartS_1.default.find({ client: idUser })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CartDAO;
}());
exports.CartDAO = CartDAO;