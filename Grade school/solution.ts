export namespace GradeSchool {
	interface DB {
		[key: number]: string[];
	}

	export class GradeSchool {
		_roster: DB = {};

		roster() { return JSON.parse(JSON.stringify(this._roster)) };

		add(name: string, grade: number) {
			this.deDupe(name);
			this._roster[grade] ?
				this._roster[grade].push(name) : this._roster[grade] = [name];
			this._roster[grade].sort();
		}

		grade(grade: number) { return this.roster()[grade] ?? [] };

		deDupe(name: string) {
			for (let grade in this._roster) {
				let names = this._roster[grade];
				if (names.indexOf(name) != -1) { names.splice(names.indexOf(name), 1); break };
			}
		}
	}
}