"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rooms_1 = __importDefault(require("../utils/rooms"));
function roomRoutes(fastify, opts, done) {
    fastify.post('/:id', (req, reply) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        reply.send(rooms_1.default.getInstance().new(req.params.id));
    });
    fastify.get('/:id', (req, reply) => {
        const secretKey = req.query.k;
        const thisRoom = rooms_1.default.getInstance().get(req.params.id);
        if (!thisRoom || thisRoom.getSecretKey() !== secretKey) {
            return reply.redirect('/');
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        reply.view('call', { roomId: req.params.id });
    });
    done();
}
exports.default = roomRoutes;
//# sourceMappingURL=room.router.js.map