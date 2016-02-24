System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "app": {
      "main": "./main.ts",
      "defaultExtension": "ts"
    }
  },

  map: {
    "app": "./src",
    "material-design-lite": "github:google/material-design-lite@1.1.1",
    "typescript": "npm:typescript@1.8.2"
  }
});
