export namespace ProteinTranslation {
	export function translate(rna: string): string[] {
		let proteins: string[] = [];
		let dontStop = true;
		let pattern = /(?:AUG|UUU|UUC|UUA|UUG|UCU|UCC|UCA|UCG|UAU|UAC|UGU|UGC|UGG|UAA|UAG|UGA)/g;
		let codons = rna.match(pattern);

		try {
			if (codons != null) {
				for (let codon of codons) {
					let protein = getProteinFromCodon(codon);

					if (protein == "STOP") {
						dontStop = false;
						break;
					} else {
						proteins.push(protein);
					}
				}

				if (!(rna.length % 3 == 0) && dontStop) {
					throw new Error("Invalid codon");
				}
			} else {
				throw new Error("Invalid codon");
			}
		} catch (err) {
			throw err;
		}

		return proteins;
	}

	function getProteinFromCodon(codon: string): string {
		let protein = "";

		switch (codon) {
			case "AUG": protein = "Methionine";
				break;
			case "UUU": case "UUC": protein = "Phenylalanine";
				break;
			case "UUA": case "UUG": protein = "Leucine";
				break;
			case "UCC": case "UCA": case "UCU": case "UCG": protein = "Serine";
				break;
			case "UAU": case "UAC": protein = "Tyrosine";
				break;
			case "UGU": case "UGC": protein = "Cysteine";
				break;
			case "UGG": protein = "Tryptophan";
				break;
			case "UAA": case "UAG": case "UGA": protein = "STOP";
				break;
			default: break;
		}
		return protein;
	}
}

