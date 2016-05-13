# Redux Storage engine: localForage - Immutable.js
[Redux Storage](https://github.com/michaelcontento/redux-storage) engine powered by [localForage](https://mozilla.github.io/localForage) with support for saving [Immutable.js](https://facebook.github.io/immutable-js) data.

**This package is unstable and experimental.**

## Credits
Based on [redux-storage-engine-localforage](https://github.com/mathieudutour/redux-storage-engine-localforage). Copyright (c) 2016 Mathieu Dutour. MIT License.

## FAQ
### What's difference between redux-storage-engine-localforage and this package?
[IndexedDB](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API) can't save Immutable.js type (e.g. Map) as is, it can only save plain Javascript object. Unlike `redux-storage-engine-localforage`, this package converts the Immutable.js type to plain JS before saving it so you can saving Immutable.js type to IndexedDB. **Caveat:** Redux Storage will load the data as plain JS type, not Immutable.js type. It's your responsibility as developer to convert the loaded data back to its Immutable.js type.
