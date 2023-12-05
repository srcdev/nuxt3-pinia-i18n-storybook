import { promises as fsPromises } from "fs";
import path from "path";

const packageJsonPath = path.join("node_modules", "storybook-addon-nuxt", "package.json");

async function fixStorybookPackageJson() {
  try {
    const packageJsonContent = await fsPromises.readFile(packageJsonPath, "utf-8");
    const packageJson = JSON.parse(packageJsonContent);

    if (!packageJson.type) {
      packageJson.type = "module";
      await fsPromises.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log("Fixed package.json for storybook-addon-nuxt");
    } else {
      console.log("package.json already contains the 'type' property.");
    }
  } catch (error) {
    console.error("Error fixing package.json:", error.message);
  }
}

fixStorybookPackageJson();
