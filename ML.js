class moduleLoader {
	constructor(path) {
		//Constructs the path into the loader, this loads any module;
		//If the path isn't relative, then the node.js
		//loader will automatically assume that the module has been installed.
		
		//Holds all the paths for the modules loaded. Convert this to dict to hot reload.
		this.path = []
		this.functions = []
		//Adds the inital path to the object. Needs to have a path else cannot be added.
		if (!path) //Checks if the path is undefined/null/empty
		{
			throw new Error('Empty or Undefined Path.');
		}
		this.path.push(path);
		this.functions = require(path);
		this.fkeys = Object.keys(this.functions);
	}
	addModule(path) {
		if (!path) //Checks if the path is undefined/null/empty
		{
			throw new Error('Empty or Undefined Path.');
		}
		this.path.push(path);
		this.functions = Object.assign(this.functions, require(path));
		this.fkeys = Object.keys(this.functions);
		return this;
	}
	funcs() {
		console.log(this.functions);
	}
	Callfunc(func, ...args) {
		if (this.fkeys.includes(func) == true)
			this.functions[func](...args);
	}

}

module.exports = moduleLoader;