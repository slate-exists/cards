class Card {
	constructor() {
		this.m_elements = [];
		this.m_parent = null;
	}
	
	// Append the elements to a new parent
	setParent(parent) {
		this.m_parent = parent;
		
		for (let i = 0; i < this.m_elements.length; ++i) {
			this.m_elements[i].remove();
			parent.append(this.m_elements[i]);
		}
	}
	
	updateElements() {
		this.setParent(this.m_elements);
	}
}