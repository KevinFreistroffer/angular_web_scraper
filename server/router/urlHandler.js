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
						console.log(error);
					}
				);
				res.status(200).json({ data: 'data' });
// 				console.log(`savedFile`, savedFile, typeof savedFile);
// 				if (typeof savedFile === "Object") {
// 					console.log(Object.keys(savedFile));
// 				}
// 
// 				if (savedFile) {
// 					res.status(200).json({
// 						data: savedFile
// 					});
// 				} else {
// 					res.status(500).json({
// 						data: "unable to save file"
// 					});
// 				}
			}
		});
	} catch (errror) {
		console.log(`An error occured /urlHandler`, error);
		next(error);
	}
});

module.exports = router;
