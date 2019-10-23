class Entity {
	constructor(name, height){
		this.name = name;
		this.height = height;
	}

	greet() {
		console.log(`Hi! I'm ${this.name} from Ukraine!`)
	}
}

export default Entity;