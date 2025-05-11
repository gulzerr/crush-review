import { exec } from "child_process";
import { promisify } from "util";

async function runCommand(command: string, cwd: string) {
  try {
    const execasync = promisify(exec);
    const res = await execasync(command + cwd);
    return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return (
      error.stdout?.toString() ||
      error.stderr?.toString() ||
      error.message ||
      "Unknown error"
    );
  }
}

export async function collectErrors(projectPath: string): Promise<string[]> {
  const errors: string[] = [];

  // const tsError = await runCommand("npx tsc --noEmit ", projectPath);
  // if (tsError) errors.push(`TypeScript Error:\n${tsError}`);

  const lintError = await runCommand(
    `npx eslint . --format compact `,
    projectPath
  );
  if (lintError) errors.push(`ESLint Error:\n${lintError}`);

  return errors;
}

// collectErrors("./src");
