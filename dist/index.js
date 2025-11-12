#!/usr/bin/env node
import { Command } from "commander";
import { publish } from "./commands/publish.js";
import { rollback } from "./commands/rollback.js";
import { backup } from "./commands/backup.js";
import { init } from "./commands/init.js";
const program = new Command();
program
    .name("vox")
    .description("CLI для управления сценариями VoxEngine")
    .version("1.0.0");
program
    .command("publish <file>")
    .option("--no-backup", "Публикация без создания резервной копии")
    .description("Публикация сценария с авто-бэкапом")
    .action(publish);
program
    .command("rollback")
    .option("--target <backup>", "Откат на конкретный бэкап")
    .option("--list", "Показать доступные бэкапы")
    .description("Управление откатами")
    .action(rollback);
program
    .command("backup")
    .option("--list", "Показать список бэкапов")
    .option("--create [name]", "Создать бэкап вручную")
    .description("Управление резервными копиями")
    .action(backup);
program
    .command("init")
    .option("--force", "Синхронизация с платформой (init --force)")
    .description("Инициализация проекта VoxEngine")
    .action(init);
program.parse();
