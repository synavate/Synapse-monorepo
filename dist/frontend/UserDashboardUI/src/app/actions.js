"use strict";
'use server';
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareChat = exports.getSharedChat = exports.clearChats = exports.removeChat = exports.getChat = exports.getChats = void 0;
const cache_1 = require("next/cache");
const navigation_1 = require("next/navigation");
const kv_1 = require("@vercel/kv");
const auth_1 = require("@/auth");
async function getChats(userId) {
    if (!userId) {
        return [];
    }
    try {
        const pipeline = kv_1.kv.pipeline();
        const chats = await kv_1.kv.zrange(`user:chat:${userId}`, 0, -1, {
            rev: true
        });
        for (const chat of chats) {
            pipeline.hgetall(chat);
        }
        const results = await pipeline.exec();
        return results;
    }
    catch (error) {
        return [];
    }
}
exports.getChats = getChats;
async function getChat(id, userId) {
    const chat = await kv_1.kv.hgetall(`chat:${id}`);
    if (!chat || (userId && chat.userId !== userId)) {
        return null;
    }
    return chat;
}
exports.getChat = getChat;
async function removeChat({ id, path }) {
    const session = await (0, auth_1.auth)();
    if (!session) {
        return {
            error: 'Unauthorized'
        };
    }
    const uid = await kv_1.kv.hget(`chat:${id}`, 'userId');
    if (uid !== session?.user?.id) {
        return {
            error: 'Unauthorized'
        };
    }
    await kv_1.kv.del(`chat:${id}`);
    await kv_1.kv.zrem(`user:chat:${session.user.id}`, `chat:${id}`);
    (0, cache_1.revalidatePath)('/');
    return (0, cache_1.revalidatePath)(path);
}
exports.removeChat = removeChat;
async function clearChats() {
    const session = await (0, auth_1.auth)();
    if (!session?.user?.id) {
        return {
            error: 'Unauthorized'
        };
    }
    const chats = await kv_1.kv.zrange(`user:chat:${session.user.id}`, 0, -1);
    if (!chats.length) {
        return (0, navigation_1.redirect)('/');
    }
    const pipeline = kv_1.kv.pipeline();
    for (const chat of chats) {
        pipeline.del(chat);
        pipeline.zrem(`user:chat:${session.user.id}`, chat);
    }
    await pipeline.exec();
    (0, cache_1.revalidatePath)('/');
    return (0, navigation_1.redirect)('/');
}
exports.clearChats = clearChats;
async function getSharedChat(id) {
    const chat = await kv_1.kv.hgetall(`chat:${id}`);
    if (!chat || !chat.sharePath) {
        return null;
    }
    return chat;
}
exports.getSharedChat = getSharedChat;
async function shareChat(id) {
    const session = await (0, auth_1.auth)();
    if (!session?.user?.id) {
        return {
            error: 'Unauthorized'
        };
    }
    const chat = await kv_1.kv.hgetall(`chat:${id}`);
    if (!chat || chat.userId !== session.user.id) {
        return {
            error: 'Something went wrong'
        };
    }
    const payload = {
        ...chat,
        sharePath: `/share/${chat.id}`
    };
    await kv_1.kv.hmset(`chat:${chat.id}`, payload);
    return payload;
}
exports.shareChat = shareChat;
