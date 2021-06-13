
// SCHEMAS
/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - Title
 *         - Note
 *         - Tags
 *       properties:
 *         id:
 *           type: string
 *           description: auto-generated id of the note
 *         title:
 *           type: string
 *           description: title of the note
 *         note:
 *           type: string
 *           description: texts of the note
 *         tags:
 *           type: string
 *           description: tags of the note
 *       example:
 *         id: 23snd4d
 *         title: Example Note
 *         note: lorem ipsum
 *         tags: example, eg.
 */


// TITLE
/**
 * @swagger
 * tags:
 *   name: Mininotes
 *   description: Mininote's Documentation API
 */

//GET REQUEST
/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Returns all list of notes
 *     tags: [Mininotes]
 *     responses:
 *       200:
 *         description: The list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 */

//POST REQUEST
/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Mininotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       201:
 *         description: The note was created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       409: 
 *         description: There was a problem with the server
 */

//PATCH REQUEST
/**
 * @swagger
 * /notes/{id}:
 *  patch:
 *     summary: Update the notes by id
 *     tags: [Mininotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id's note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       404:
 *         description: No notes found with that id
 */

//DELETE REQUEST
/**
 * @swagger
 * /notes/{id}:
 *  delete:
 *    summary: Delete the notes by id
 *    tags: [Mininotes]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id's note
 *    responses:
 *      404:
 *        description: No notes found with that id
 */