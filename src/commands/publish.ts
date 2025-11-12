import fs from "fs";
import path from "path";
import chalk from "chalk";

export function publish(file: string, options: { backup?: boolean }) {
  const basename = path.basename(file, path.extname(file));
  const ext = path.extname(file);
  const now = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
  const backupName = `${basename}_backup_${now}${ext}`;

  if (options.backup !== false) {
    fs.copyFileSync(file, backupName);
    console.log(chalk.green(`✅ Создан бэкап: ${backupName}`));
  }

  console.log(chalk.yellow(`Готовимся опубликовать ${file}`));
  const confirm = true; // можно добавить ввод подтверждения позже
  if (confirm) console.log(chalk.green("📤 Сценарий опубликован!"));
}
