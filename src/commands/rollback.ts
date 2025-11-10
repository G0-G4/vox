import fs from "fs";
import chalk from "chalk";

export function rollback(options: { target?: string; list?: boolean }) {
  const files = fs.readdirSync(".");
  const backups = files.filter(f => f.includes("_backup_"));

  if (options.list) {
    console.log(chalk.cyan("📜 Доступные бэкапы:"));
    backups.forEach(f => console.log(" - " + f));
    return;
  }

  const target =
    options.target || backups.sort().reverse()[0];

  if (!target) return console.log(chalk.red("❌ Нет доступных бэкапов."));

  const mainFile = target.split("_backup_")[0] + ".js";
  fs.copyFileSync(target, mainFile);
  console.log(chalk.green(`🔄 Откат выполнен на ${target}`));
}
