class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;
		this.length--;
	}
}

let myLinkedList = new LinkList(4);
