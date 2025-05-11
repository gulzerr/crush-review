import path from "path";
import { collectErrors } from "./errors";
import { explainErrorWithQ } from "./q-helper";

async function main() {
  const [targetDir] = process.argv.slice(2);

  if (!targetDir) {
    console.error("❌ Usage: ts-node src/index.ts <project-path>");
    process.exit(1);
  }

  const fullPath = path.resolve(targetDir);
  console.log(`🔍 Scanning project at: ${fullPath}`);

  const errors = await collectErrors(fullPath);

  if (errors.length === 0) {
    console.log("✅ No errors detected. All good!");
    return;
  }

  for (const error of errors) {
    console.log("\n🔴 Error Found:\n");
    console.log("❌", error);

    explainErrorWithQ(error);
  }
}

main();
