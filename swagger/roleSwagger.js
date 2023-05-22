// add-role
/**
 * @swagger
 * /role/:
 *  post:
 *    tags:
 *      - Role
 *    summary: API use for Adding Role..
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
 *          required: [ roleName, description, user ]
 *          properties:
 *            roleName:
 *              type: string
 *              description: action for permission
 *              example: admin
 *            description:
 *              type: string
 *              description: description for permission
 *              example: This API is for admin to add new role.
 *            user:
 *              type: string
 *              description: method for permission
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

// get-all-role

/**
 * @swagger
 * /role/:
 *  get:
 *    tags:
 *      - Role
 *    summary: API use for getting all role..
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

// get-role-by-id

/**
 * @swagger
 * /role/{id}:
 *  get:
 *    tags:
 *      - Role
 *    summary: API use for getting  role by id..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of role to find"
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
 * /role/{id}:
 *  put:
 *    tags:
 *      - Role
 *    summary: API use for updating role..
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of role to update"
 *      required: true
 *      type: "string"
 *    - name: body
 *      in: body
 *      required: true
 *      schema:
 *          type: object
 *          required: [ roleName, description, user ]
 *          properties:
 *            roleName:
 *              type: string
 *              description: action for permission
 *              example: admin
 *            description:
 *              type: string
 *              description: description for permission
 *              example: This API is for admin to add new role.
 *            user:
 *              type: string
 *              description: method for permission
 *              example: 643f73910aab581e3f030d4c
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

// delete-role-by-id

/**
 * @swagger
 * /role/{id}:
 *  delete:
 *    tags:
 *      - Role
 *    summary: API use for deleting  role..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of role to delete"
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
