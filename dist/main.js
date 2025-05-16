"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setViewEngine('pug');
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI:', process.env.MONGO_URI);
//# sourceMappingURL=main.js.map