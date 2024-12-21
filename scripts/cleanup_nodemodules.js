import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packagesDir = path.resolve(__dirname, "../packages");

fs.readdirSync(packagesDir).forEach((pkg) => {
    const packagePath = path.join(packagesDir, pkg);
    const nodeModulesPath = path.join(packagePath, "node_modules");

    if (fs.existsSync(nodeModulesPath)) {
        fs.rmSync(nodeModulesPath, { recursive: true, force: true });
        console.log(`Removed node_modules from ${pkg}`);
    } else {
        console.log(`No node_modules folder found in ${pkg}`);
    }
});
