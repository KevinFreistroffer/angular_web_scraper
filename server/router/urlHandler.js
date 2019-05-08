const express = require("express");
const path = require('path');
const router = express.Router();
const fs = require("fs");

router.post("/", async (req, res, next) => {
	try {
		// const urls = req.body.urls;
		console.log(req.body);
		const urls = ['google.com'];

		urls.forEach(async url => {
			//const scrapedHTML = await someScrapeFunction();
			const scrapedHTML = "fldafjlaks";
			if (scrapedHTML) {
				fs.writeFile(
					'./files/file.txt',
					"scrapedHTML",
					{ flag: "w" },
					(error) => {
						next(error);
					}
				);


				res.status(200).json({ data: 'fileSaved' });
			}
		});
	} catch (errror) {
		console.log(`An error occured /urlHandler`, error);
		next(error);
	}
});

module.exports = router;
