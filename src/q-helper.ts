import { execSync } from "child_process";

export function explainErrorWithQ(errorMessage: string): void {
  console.log("\n🤖 Explaining with Amazon Q...\n");

  const command = `q chat --trust-all-tools --no-interactive "${errorMessage}. also make nessesary changes to the code."`;
  execSync(command, { stdio: "inherit" });
}
