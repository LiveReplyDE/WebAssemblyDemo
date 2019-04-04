# 🦀🕸️ `Webassembly demo`

### 🎁 LOCAL

#### 1. Init WWW
```
cd www
npm install
```

#### 2. NPM LINK

This should be done each time you install a package in www
```
cd pkg
npm link
cd ../www
npm link wasm-1
```

#### 3. BUILD WASM
```
wasm-pack build
```

#### 4. Start WWW
```
cd www
npm start
```

and then open http://127.0.0.1:8080

