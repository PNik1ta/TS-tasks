export namespace LinkedList {
	class Node<T> {
		data: T;
		prev: Node<T> | null;
		next: Node<T> | null;

		constructor(data: T) {
			this.data = data;
			this.prev = null;
			this.next = null;
		}
	}

	export class LinkedList<T> {
		head: Node<T> | null;
		tail: Node<T> | null;

		constructor() {
			this.head = null;
			this.tail = null;
		}

		get isEmpty(): boolean {
			return this.head === null;
		}

		public push(data: T) {
			const newNode = new Node(data);

			if (this.isEmpty) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				newNode.prev = this.tail;
				this.tail!.next = newNode;
				this.tail = newNode;
			}
		}

		public pop(): T | undefined {
			if (this.isEmpty) {
				return;
			}
			const deletedEl = this.tail;
			if (this.head === this.tail) {

				this.head = null;
				this.tail = null;
				return deletedEl?.data!;
			} else {
				this.tail = this.tail!.prev;
				this.tail!.next = null;
				return deletedEl?.data!;
			}
		}

		public shift(): T | undefined {
			if (this.isEmpty) {
				return;
			}
			const deletedEl = this.head;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				return deletedEl?.data!;
			} else {
				this.head = this.head!.next;
				this.head!.prev = null;
				return deletedEl?.data!;
			}
		}

		public unshift(data: T) {
			const newNode = new Node(data);
			if (this.isEmpty) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				newNode.next = this.head;
				this.head!.prev = newNode;
				this.head = newNode;
			}
		}

		public delete(data: T): void {
			let current = this.head
			while (current !== null) {
				if (current.data === data) {
					if (current === this.head) {
						this.head = current.next;
						if (this.head !== null) {
							this.head.prev = null;
						}
					} else if (current === this.tail) {
						this.tail = current.prev;
						if (this.tail !== null) {
							this.tail.next = null;
						}
					} else {
						current.prev!.next = current.next;
						current.next!.prev = current.prev;
					}
					return;
				}
				current = current.next;
			}
		}

		public count(): number {
			let counter = 0;
			let current = this.head;
			while (current !== null) {
				counter++;
				current = current.next;
			}
			return counter;
		}
	}
}