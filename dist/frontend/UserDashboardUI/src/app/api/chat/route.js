"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.runtime = void 0;
const kv_1 = require("@vercel/kv");
const ai_1 = require("ai");
const openai_1 = __importDefault(require("openai"));
const auth_1 = require("@/auth");
const utils_1 = require("@/lib/utils");
exports.runtime = 'edge';
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY
});
async function POST(req) {
    const json = await req.json();
    const { messages, previewToken } = json;
    const userId = (await (0, auth_1.auth)())?.user.id;
    if (!userId) {
        return new Response('Unauthorized', {
            status: 401
        });
    }
    if (previewToken) {
        openai.apiKey = previewToken;
    }
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        stream: true
    });
    const stream = (0, ai_1.OpenAIStream)(res, {
        async onCompletion(completion) {
            const title = json.messages[0].content.substring(0, 100);
            const id = json.id ?? (0, utils_1.nanoid)();
            const createdAt = Date.now();
            const path = `/chat/${id}`;
            const payload = {
                id,
                title,
                userId,
                createdAt,
                path,
                messages: [
                    ...messages,
                    {
                        content: completion,
                        role: 'assistant'
                    }
                ]
            };
            await kv_1.kv.hmset(`chat:${id}`, payload);
            await kv_1.kv.zadd(`user:chat:${userId}`, {
                score: createdAt,
                member: `chat:${id}`
            });
        }
    });
    return new ai_1.StreamingTextResponse(stream);
}
exports.POST = POST;
