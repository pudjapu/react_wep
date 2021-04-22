const express = require("express");
const router = express.Router();

const idLength = 8;

/**
 * @swagger
 * /data/root:
 *   get:
 *     summary: Returns the root
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: The root list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */

router.get("/root/", (req, res) => {
	const data = req.app.db.get("root");

	res.send(data);
});

/**
 * @swagger
 * /data/root/{name}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Root]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The method name
 *     responses:
 *       200:
 *         description: The method description by name
 *         contens:
 *           application/json:
 *             schema:
 *       404:
 *         description: The book was not found
 */

router.get("/root/:name", (req, res) => {
  const data = req.app.db.get("root").find({ name: req.params.name }).value();

  if(!data){
    res.sendStatus(404)
  }

	res.send(data);
});

/**
 * @swagger
 * /data/matrix:
 *   get:
 *     summary: Returns the matrix
 *     tags: [Matrix]
 *     responses:
 *       200:
 *         description: The matrix list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */

 router.get("/matrix/", (req, res) => {
	const data = req.app.db.get("matrix");

	res.send(data);
});

/**
 * @swagger
 * /data/matrix/{name}:
 *   get:
 *     summary: Get the matrix by name
 *     tags: [Matrix]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The method name
 *     responses:
 *       200:
 *         description: The method description by name
 *         contens:
 *           application/json:
 *             schema:
 *       404:
 *         description: The book was not found
 */

router.get("/matrix/:name", (req, res) => {
  const data = req.app.db.get("matrix").find({ name: req.params.name }).value();

  if(!data){
    res.sendStatus(404)
  }

	res.send(data);
});

module.exports = router;
