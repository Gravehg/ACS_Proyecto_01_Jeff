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
exports.PublicationDAO = void 0;
var mongodb_1 = require("mongodb");
var mongoose_1 = __importDefault(require("mongoose"));
var publicationS_1 = __importDefault(require("../schemas/publicationS"));
var PublicationDAO = /** @class */ (function () {
    function PublicationDAO() {
    }
    // Retorna una publicacion por su Id
    PublicationDAO.prototype.getPublication = function (publicationId) {
        return __awaiter(this, void 0, void 0, function () {
            var publication;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.aggregate([
                            {
                                $match: {
                                    _id: new mongoose_1.default.Types.ObjectId(publicationId),
                                },
                            },
                            {
                                $lookup: {
                                    from: "categories",
                                    localField: "categoryId",
                                    foreignField: "_id",
                                    as: "category",
                                },
                            },
                            {
                                $unwind: "$category",
                            },
                        ])];
                    case 1:
                        publication = _a.sent();
                        return [2 /*return*/, publication[0]];
                }
            });
        });
    };
    // Retorna todas las publicaciones registradas
    PublicationDAO.prototype.getPublications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.aggregate([
                            {
                                $lookup: {
                                    from: "categories",
                                    localField: "categoryId",
                                    foreignField: "_id",
                                    as: "category",
                                },
                            },
                            {
                                $unwind: "$category",
                            },
                        ])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Retorna todas las publicaciones que pertenecen a una categoría
    PublicationDAO.prototype.getPublicationsByCategory = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.aggregate([
                            {
                                $lookup: {
                                    from: "categories",
                                    localField: "categoryId",
                                    foreignField: "_id",
                                    as: "category",
                                },
                            },
                            {
                                $unwind: "$category",
                            },
                            {
                                $match: {
                                    $or: [
                                        { categoryId: new mongodb_1.ObjectId(categoryId) },
                                        { "category.fatherCategory": categoryId },
                                    ],
                                },
                            },
                        ])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Retorna todas las publicaciones que tengan al menos una palabra clave en los tags enviados
    PublicationDAO.prototype.getPublicationsByTags = function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.aggregate([
                            {
                                $lookup: {
                                    from: "categories",
                                    localField: "categoryId",
                                    foreignField: "_id",
                                    as: "category",
                                },
                            },
                            {
                                $unwind: "$category",
                            },
                            {
                                $match: {
                                    tags: {
                                        $in: tags,
                                    },
                                },
                            },
                        ]).collation({ locale: "en", strength: 1 })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Registra una publicación
    PublicationDAO.prototype.registerPublication = function (publicationToRegister) {
        return __awaiter(this, void 0, void 0, function () {
            var publication, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        publication = new publicationS_1.default({
                            categoryId: publicationToRegister.getCategoryID(),
                            date: new Date(),
                            description: publicationToRegister.getDescription(),
                            photo: "TEMPORAL",
                            tags: publicationToRegister.getTags(),
                        });
                        return [4 /*yield*/, publication.save()];
                    case 1:
                        result = _a.sent();
                        // Actualizamos la ruta de la foto a la del sistema de archivos
                        return [4 /*yield*/, publicationS_1.default.updateOne({ _id: result._id }, { photo: "/photos/publications/" + result._id + ".png" })];
                    case 2:
                        // Actualizamos la ruta de la foto a la del sistema de archivos
                        _a.sent();
                        return [2 /*return*/, result._id];
                }
            });
        });
    };
    // Actualiza una publicación
    PublicationDAO.prototype.updatePublication = function (publicationToUpdate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.updateOne({ _id: publicationToUpdate.getID() }, {
                            categoryId: publicationToUpdate.getCategoryID(),
                            description: publicationToUpdate.getDescription(),
                            tags: publicationToUpdate.getTags(),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Elimina una publicacion por su id
    PublicationDAO.prototype.deletePublication = function (publicationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, publicationS_1.default.deleteOne({ _id: publicationId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PublicationDAO;
}());
exports.PublicationDAO = PublicationDAO;
