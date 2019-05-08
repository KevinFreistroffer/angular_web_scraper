const express = require("express");
const path = require('path');
const router = express.Router();
const fsp = require("fs").promises;
const rp = require('request-promise');
const sanitize = require("sanitize-filename");

router.post("/", async (req, res, next) => {
	try {
		// const urls = req.body.urls;
		console.log(req.body.urls);
		const urls = ['https://www.google.com'];

		req.body.urls.forEach(async (url) => {
			let urlReference = url;
			let sanitizedUrl  = sanitize(urlReference);
			const fileName = './files/' + sanitizedUrl + '.txt';
			const scrapedHTML = await rp(url);
			if (scrapedHTML) {
				await fsp.writeFile(
					fileName,
					scrapedHTML,
					{ flag: "w" }
				);
			}
		});

		res.status(200).json({ data: 'fileSaved' });
	} catch (error) {
		console.log(`An error occured /urlHandler`, error);
		next(error);
	}
});

module.exports = router;
