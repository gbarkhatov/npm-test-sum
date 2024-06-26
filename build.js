import { build } from "esbuild"

// import { dependencies, peerDependencies } from "./package.json" assert { type: "json" };

// console.log("dependencies", dependencies)

const shared = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true
  // external: Object.keys(dependencies || {}).concat(
  //   Object.keys(peerDependencies || {})
  // )
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
