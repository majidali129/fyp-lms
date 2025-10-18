import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
rules: {
 // Error prevention
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-unused-vars": "off", // TypeScript handles this
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],

      // Code style
      "semi": ["error", "always"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "comma-dangle": ["error", "always-multiline"],

 // React specific
      "react/self-closing-comp": "error",
      "react/no-unused-prop-types": "error",
      'react/prop-types': 'error',
      "react/jsx-sort-props": ["error", {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true
      }], 
       // Import rules
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }],

       // TypeScript specific
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-non-null-assertion": "warn"
    
    }
  })
  ,
  {
    
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  eslintConfigPrettier
 
];

export default eslintConfig;
