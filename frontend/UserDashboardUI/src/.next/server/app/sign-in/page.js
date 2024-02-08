import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8888
    }
    const CHUNK_PUBLIC_PATH = "server/app/sign-in/page.js";
  });
  app.listen(() => logger.log("Microservice A is listening"));
}
bootstrap();


module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js/(COMPONENT_0)/[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)/(COMPONENT_1)/[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)/(COMPONENT_2)/[project]/app/sign-in/page.tsx [app-rsc] (ecmascript, Next.js server component)/(METADATA_3)/[project]/app/twitter-image.png.mjs/(IMAGE)/[project]/app/twitter-image.png [app-rsc] (static) (structured image object, ecmascript)/(METADATA_4)/[project]/app/opengraph-image.png.mjs/(IMAGE)/[project]/app/opengraph-image.png [app-rsc] (static) (structured image object, ecmascript) (ecmascript) {facade}", CHUNK_PUBLIC_PATH).exports;
