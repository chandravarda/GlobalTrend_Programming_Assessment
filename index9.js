class HashMap {
    constructor() {
        this.map = {};
    }

    // Hash function to generate keys
    hash(key) {
        // Convert the key to a string and get its hash code
        let hash = 0;
        const strKey = String(key);
        for (let i = 0; i < strKey.length; i++) {
            hash = (hash << 5) - hash + strKey.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    // Method to put a key-value pair into the HashMap
    put(key, value) {
        const hashedKey = this.hash(key);
        this.map[hashedKey] = value;
    }

    // Method to get a value by key from the HashMap
    get(key) {
        const hashedKey = this.hash(key);
        return this.map.hasOwnProperty(hashedKey) ? this.map[hashedKey] : undefined;
    }

    // Method to remove a key-value pair from the HashMap
    remove(key) {
        const hashedKey = this.hash(key);
        if (this.map.hasOwnProperty(hashedKey)) {
            delete this.map[hashedKey];
        }
    }
}

// Example usage:
const myHashMap = new HashMap();
myHashMap.put("name", "John");
console.log(myHashMap.get("name")); // Output: "John"
myHashMap.put("age", 30);
console.log(myHashMap.get("age")); // Output: 30
myHashMap.remove("name");
console.log(myHashMap.get("name")); // Output: undefined
console.log(myHashMap.get("age")); // Output: 30
