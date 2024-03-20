const { build } = require("esbuild")
const { Generator } = require("npm-dts")

const { dependencies, peerDependencies } = require("./package.json")

new Generator({
  entry: "src/index.ts",
  output: "dist/index.d.ts"
}).generate()

const shared = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies || {}).concat(
    Object.keys(peerDependencies || {})
  )
}

build({
  ...shared,
  platform: "node", // for CJS
  outfile: "dist/index.js"
})

build({
  ...shared,
  platform: "neutral", // for ESM
  outfile: "dist/index.esm.js",
  format: "esm"
})
