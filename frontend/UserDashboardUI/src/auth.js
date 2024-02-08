"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.POST = exports.GET = void 0;
const next_auth_1 = __importDefault(require("next-auth"));
const github_1 = __importDefault(require("next-auth/providers/github"));
_a = (0, next_auth_1.default)({
    providers: [github_1.default],
    callbacks: {
        jwt({ token, profile }) {
            if (profile) {
                token.id = profile.id;
                token.image = profile.avatar_url || profile.picture;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (session?.user && token?.id) {
                session.user.id = String(token.id);
            }
            return session;
        },
        authorized({ auth }) {
            return !!auth?.user; // this ensures there is a logged in user for -every- request
        }
    },
    pages: {
        signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
    }
}), _b = _a.handlers, exports.GET = _b.GET, exports.POST = _b.POST, exports.auth = _a.auth;
