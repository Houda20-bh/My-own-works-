const {body} = require('express_validator')
exports.Datavalidation=[
   body("email","please put a valid email").isEmail(),
   body("password","password should be at least 5").isLength({min:5}),
]