"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const common_1 = require("@nestjs/common");
const queue_consumer_1 = require("./queue.consumer");
const queue_producer_1 = require("./queue.producer");
@(0, common_1.Module)({
    providers: [queue_producer_1.ProducerService, queue_consumer_1.ConsumerService],
    exports: [queue_producer_1.ProducerService],
})
class QueueModule {
}
exports.QueueModule = QueueModule;
