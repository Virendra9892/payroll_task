// add-permission
/**
 * @swagger
 * /permission/:
 *  post:
 *    tags:
 *      - Permission
 *    summary: API use for giving permission..
 *    security: 
 *      - bearerAuth: []
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          required: [ actionName, description, method, baseUrl, path, role ]
 *          properties:
 *            actionName:
 *              type: string
 *              description: action for permission
 *              example: addUser
 *            description:
 *              type: string
 *              description: description for permission
 *              example: This API is for admin to add new editor.
 *            method:
 *              type: string
 *              description: method for permission
 *              example: POST
 *            baseUrl:
 *              type: string
 *              description: baseUrl for permission
 *              example: /api/permission
 *            path:
 *              type: string
 *              description: path for permission
 *              example: /
 *            role:
 *              type: string
 *              description: role for permission
 *              example: 643f73910aab581e3f030d4c
 *    responses:
 *      '201':
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

// get-all-permission

/**
 * @swagger
 * /permission/:
 *  get:
 *    tags:
 *      - Permission
 *    summary: API use for getting all permission..
 *    security: 
 *      - bearerAuth: []
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

// get-permission-by-id

/**
 * @swagger
 * /permission/{id}:
 *  get:
 *    tags:
 *      - Permission
 *    summary: API use for getting  permission by id..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to find"
 *      required: true
 *      type: "string"
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

// update-by-id

/**
 * @swagger
 * /permission/{id}:
 *  put:
 *    tags:
 *      - Permission
 *    summary: API use for updating permission..
 *    security: 
 *      - bearerAuth: []
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
 *        required: [ actionName, description, method, baseUrl, path, role ]
 *        properties:
 *          actionName:
 *            type: string
 *            description: add action for permission
 *            example: updateUser
 *          description:
 *            type: string
 *            description: description for permission
 *            example: This API is for admin to add new editor.
 *          method:
 *            type: string
 *            description: method for permission
 *            example: POST
 *          baseUrl:
 *            type: string
 *            description: baseUrl for permission
 *            example: /api/permission
 *          path:
 *            type: string
 *            description: path for permission
 *            example: /
 *          role:
 *            type: string
 *            description: role for permission
 *            example: 643f73910aab581e3f030d4c
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

// delete-permission-by-id

/**
 * @swagger
 * /permission/{id}:
 *  delete:
 *    tags:
 *      - Permission
 *    summary: API use for deleting  permission..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to find"
 *      required: true
 *      type: "string"
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
