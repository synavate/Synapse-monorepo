"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.signUpValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
        /*const result = await validation.run(req);
        if (!result.isEmpty()) {
            break
        }
        */
    };
};
exports.validate = validate;
const loginValidator = [
    (0, express_validator_1.body)('email').trim().isEmail().withMessage("Please enter a valid email"),
    (0, express_validator_1.body)('password').trim()
        .isLength({ min: 6 })
        .withMessage("Please choose a stronger password > 6 chars")
];
exports.loginValidator = loginValidator;
const signUpValidator = [
    (0, express_validator_1.body)('name').notEmpty().withMessage("Name is required"),
    ...loginValidator
];
exports.signUpValidator = signUpValidator;
//# sourceMappingURL=validators.js.map