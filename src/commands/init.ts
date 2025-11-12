import { execSync } from "child_process";
import chalk from "chalk";

export function init(options: { force?: boolean }) {
  const command = options.force
    ? "npx voxengine-ci init --force"
    : "npx voxengine-ci init";

  console.log(chalk.cyan(`Выполняется: ${command}`));

  try {
    execSync(command, { stdio: "inherit" });
    console.log(chalk.green("Инициализация завершена!"));
  } catch {
    console.log(chalk.red("Ошибка при выполнении инициализации((("));
  }
}
