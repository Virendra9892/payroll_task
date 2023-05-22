// user log-in

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    tags:
 *      - Auth
 *    summary: API use for user login..
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          required: [ email, password ]
 *          properties:
 *            email:
 *              type: string
 *              description: title for post
 *              example: youremail@gmail.com
 *            password:
 *              type: string
 *              description: content for post
 *              example: mahabuzz@mahabuzz
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: Product
 *         schema:
 *           type: object
 *           description: not found
 *           properties:
 *             message:
 *               title: message
 *               type: string
 *               example: not found
 */

// forgot-password

/**
 * @swagger
 * /api/auth/forgot-password:
 *  post:
 *    tags:
 *      - Auth
 *    summary: API use for forgot paasword..
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          required: [ email ]
 *          properties:
 *            email:
 *              type: string
 *              description: title for post
 *              example: youremail@gmail.com
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: Product
 *         schema:
 *           type: object
 *           description: not found
 *           properties:
 *             message:
 *               title: message
 *               type: string
 *               example: not found
 */

// verify-otp

/**
 * @swagger
 * /api/auth/verify-otp/{id}:
 *  post:
 *    tags:
 *      - Auth
 *    summary: API use for verify-otp..
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to find"
 *      required: true
 *      type: "string"
 *    - name: body
 *      in: body
 *      required: true
 *      schema:
 *        type: object
 *        required: [ otp ]
 *        properties:
 *           otp:
 *             type: string
 *             description: otp for user
 *             example: 1234
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: Product
 *         schema:
 *           type: object
 *           description: not found
 *           properties:
 *             message:
 *               title: message
 *               type: string
 *               example: not found
 */

// reset password

/**
 * @swagger
 * /api/auth/reset-password/{id}:
 *  post:
 *    tags:
 *      - Auth
 *    summary: API use for reset paasword..
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to find"
 *      required: true
 *      type: "string"
 *    - name: body
 *      in: body
 *      required: true
 *      schema:
 *        type: object
 *        required: [ password, newPassword ]
 *        properties:
 *           password:
 *             type: string
 *             description: otp for user
 *             example: test@12345
 *           newPassword:
 *             type: string
 *             description: otp for user
 *             example: test@12345
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: Product
 *         schema:
 *           type: object
 *           description: not found
 *           properties:
 *             message:
 *               title: message
 *               type: string
 *               example: not found
 */

// update-password

// /**
//  * @swagger
//  * /api/auth/update-password/{id}:
//  *  put:
//  *    tags:
//  *      - Auth
//  *    summary: API use for update password..
//  *    security:
//  *      - bearerAuth: []
//  *    parameters:
//  *    - name: "id"
//  *      in: "path"
//  *      description: "Id of user to find"
//  *      required: true
//  *      type: "string"
//  *    - name: body
//  *      in: body
//  *      required: true
//  *      schema:
//  *        type: object
//  *        required: [ password, confirmPassword ]
//  *        properties:
//  *           password:
//  *             type: string
//  *             description: otp for user
//  *             example: test@12345
//  *           confirmPassword:
//  *             type: string
//  *             description: otp for user
//  *             example: test@12345
//  *    responses:
//  *      '200':
//  *        description: A successful response
//  *      '404':
//  *         description: Product
//  *         schema:
//  *           type: object
//  *           description: not found
//  *           properties:
//  *             message:
//  *               title: message
//  *               type: string
//  *               example: not found
//  */

// log-out

/**
 * @swagger
 * /api/auth/log-out:
 *  delete:
 *   tags:
 *     - Auth
 *   summary: API use for logout user..
 *   security:
 *     - bearerAuth: []
 *   responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: Product
 *         schema:
 *           type: object
 *           description: not found
 *           properties:
 *             message:
 *               title: message
 *               type: string
 *               example: not found
 */
