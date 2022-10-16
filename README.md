# Babel decorator error reproduction

Invocation:

```
npx babel-node main.js
```

Actual output:

```
staticAcc function
protoMethod function
=== Instantiation ===
```

Expected output:

```
staticAcc function
=== Instantiation ===
protoMethod object
```

With the accessor commented out, the output is:

```
=== Instantiation ===
protoMethod object
```
