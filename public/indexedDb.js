/* const { db } = require("../models/transaction");
 */

if (!window.indexedDB) {
      console.log("Your browser doesn't support a stable version of IndexedDB.");
      return false;
    }; 


let request = window.indexedDB.open('budgetDB', 1),
    db,
    tx,
    store,
    index;

request.onupgradeneeded = function(e) {
    const db = request.result;
    store = db.createObjectStore("budgetData", { autoIncrement : true, keyPath: "_id" });
};

request.onerror = function(e) {
    console.log("There was an error");
};


request.onsuccess = function(e) {
db = request.result;
tx = db.transaction(storeName, "readwrite");
store = tx.objectStore(storeName);

db.onerror = function(e) {
    console.log("error");
};
if (method === "put") {
    store.put(object);
} else if (method === "get") {
    const all = store.getAll();
    all.onsuccess = function() {
    resolve(all.result);
    };
} else if (method === "delete") {
    store.delete(object._id);
}
tx.oncomplete = function() {
    db.close();
};
};


  useIndexedDb();