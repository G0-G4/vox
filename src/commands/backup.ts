import fs from "fs";
import chalk from "chalk";

export function backup(options: { list?: boolean; create?: string }) {
  const files = fs.readdirSync(".");
  const backups = files.filter(f => f.includes("_backup_"));

  if (options.list) {
    console.log(chalk.cyan("📦 Доступные бэкапы:"));
    backups.forEach(f => console.log(" - " + f));
    return;
  }

  if (options.create !== undefined) {
    const name = options.create || "manual";
    const main = files.find(f => f.startsWith("main."));
    if (!main) return console.log(chalk.red("Не найден файл main.js"));

    const newBackup = `main_backup_${name}.js`;
    if (fs.existsSync(newBackup))
      return console.log(chalk.yellow(`⚠️ Бэкап '${newBackup}' уже существует.`));

    fs.copyFileSync(main, newBackup);
    console.log(chalk.green(`✅ Создан бэкап: ${newBackup}`));
  }
}
