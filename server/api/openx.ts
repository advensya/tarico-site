// server/api/flyers.get.ts
import { createReadStream } from "node:fs";
import { join } from "node:path";

export default defineEventHandler((event) => {
	const pdfPath = join(process.cwd(), "public/openx.pdf");

	// Définir le type de contenu en réponse
	event.node.res.setHeader("Content-Type", "application/pdf");

	// Stream le fichier PDF en réponse
	return createReadStream(pdfPath);
});
