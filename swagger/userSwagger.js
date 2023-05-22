// add-user
/**
 * @swagger
 * /api/users/:
 *  post:
 *    tags:
 *      - User
 *    summary: API use for Adding user..
 *    consumes:
 *      - application/json
 *    parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          required: [ name, email, password, role_id ]
 *          properties:
 *            name:
 *              type: string
 *              description: name of the user
 *              example: smith steven
 *            email:
 *              type: string
 *              description: email of the user
 *              example: youremail@gmail.com
 *            password:
 *              type: string
 *              description: password of user
 *              example: '#Testing12345'
 *            phone:
 *              type: string
 *              description: otp for user
 *              example: "1256456434"
 *            role_id:
 *              type: string
 *              description: role id
 *              example: 643fdbc8bef5cc00298eef73
 *            isActive:
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

// get-all-user

/**
 * @swagger
 * /api/users/:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for getting all users..
 *    consumes: 
 *      - application/json
 *    parameters: 
 *      - in: query
 *        name: offset
 *        required: true
 *      - in: query 
 *        name: limit
 *        required: true
 *        schema: 
 *          type: integer
 *          required: [offset, limit]
 *    security: 
 *      - bearerAuth: []
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

// get-user-by-id

/**
 * @swagger
 * /api/users/user-by-Id/{id}:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for getting user by id..
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
 * /api/users/update-user/{id}:
 *  put:
 *    tags:
 *      - User
 *    summary: API use for updating user..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to update"
 *      required: true
 *      type: "string"
 *    - name: body
 *      in: body
 *      required: true
 *      schema:
 *          type: object
 *          required: [ name, email, password, otp, role, isActive ]
 *          properties:
 *            name:
 *              type: string
 *              description: name of the user
 *              example: smith steven
 *            email:
 *              type: string
 *              description: email of the user
 *              example: youremail@gmail.com
 *            password:
 *              type: string
 *              description: password of user
 *              example: #Testing12345
 *            otp:
 *              type: string
 *              description: otp for user
 *              example: "1234"
 *            role:
 *              type: string
 *              description: role id
 *              example: 643fdbc8bef5cc00298eef73
 *            isActive:
 *              type: Boolean
 *              description: check user is active or deleted.
 *              example: true
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

// delete-user-by-id

/**
 * @swagger
 * /api/users/delete-one-user/{id}:
 *  delete:
 *    tags:
 *      - User
 *    summary: API use for deleting user..
 *    security: 
 *      - bearerAuth: []
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to delete"
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

// create a fresh user

// /**
//  * @swagger
//  * /api/user/add-recruiter:
//  *  post:
//  *    tags:
//  *      - User
//  *    summary: API use for Adding fresh user..
//  *    consumes:
//  *      - application/json
//  *    parameters:
//  *      - name: body
//  *        in: body
//  *        required: true
//  *        schema:
//  *          type: object
//  *          required: [ name, email, password, otp, role, isActive ]
//  *          properties:
//  *            name:
//  *              type: string
//  *              description: name of the user
//  *              example: smith steven
//  *            email:
//  *              type: string
//  *              description: email of the user
//  *              example: youremail@gmail.com
//  *            password:
//  *              type: string
//  *              description: password of user
//  *              example: #Testing12345
//  *            otp:
//  *              type: string
//  *              description: otp for user
//  *              example: "1234"
//  *            role:
//  *              type: string
//  *              description: role id
//  *              example: 643fdbc8bef5cc00298eef73
//  *            isActive:
//  *              type: Boolean
//  *              description: check user is active or deleted.
//  *              example: true
//  *    responses:
//  *      '201':
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

// restore-user

/**
 * @swagger
 * /api/users/restore-user/{id}:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for restoring user..
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Id of user to restore"
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


// get recruiter/candidate


/**
 * @swagger
 * /api/users/get-users/{id}:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for getting candidate/recruiter by id..
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

// get jobs

/**
 * @swagger
 * /api/users/get-jobs:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for getting jobs .
 *    security: 
 *      - bearerAuth: []
 *    parameters:
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

// update-recruiter

/**
 * @swagger
 * /api/users/update-recruiter/{id}:
 *  put:
 *    tags:
 *      - User
 *    summary: API use for updating recruiter by id..
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

// export-candidate/recruiter


/**
 * @swagger
 * /api/users/export-users/{id}:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for exporting user/candidate by id..
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

// get user-with-jobs

/**
 * @swagger
 * /api/users/export-candidates/{id}:
 *  get:
 *    tags:
 *      - User
 *    summary: API use for exporting user-with-jobs by id..
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
