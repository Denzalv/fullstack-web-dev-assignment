class Phone {
    constructor(brand, storage, ram) {
    	this.brand = brand;
   	this.storage = storage;
   	this.ram = ram;
    }
    getBrandName() {
        return this.brand
    }
    setBrandName(brn) {
        this.brand = brn
    }
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(str, ram) {
        this.storage = str
        this.ram = ram
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();
