export namespace DiffieHellman {
	export class DiffieHellman {
		p: number;
		g: number;

		constructor(p: number, g: number) {
			if (!this.isPrime(p) || !this.isPrime(g)) {
				throw new Error("number is not prime");
			}
			this.p = p;
			this.g = g;
		}

		public getPublicKey(privateKey: number): number {
			if (privateKey <= 1 || privateKey >= this.p) {
				throw new Error("private key error");
			}
			const publicKey = Math.pow(this.g, privateKey) % this.p;
			return publicKey;
		}

		public getSecret(theirPublicKey: number, myPrivateKey: number): number {
			const secretKey = Math.pow(theirPublicKey, myPrivateKey) % this.p;
			return secretKey;
		}
		
		private isPrime(num: number): boolean {
			for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
				if (num % i === 0) return false;
			}
			return num > 1;
		}
	}
}