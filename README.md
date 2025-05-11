# 🔧 AI Automated Error Review & AI Refactor Helper – Crushing the Command Line Challenge

An intelligent command-line tool that detects issues in your project (TypeScript/Node.js), explains them using Amazon Q Developer CLI, and helps you fix bugs faster by streamlining your debugging process.

---

## 🚀 Why This Project?

As a backend engineer, debugging and fixing issues quickly is essential — but hunting through compiler errors, linter warnings, and failing tests can be time-consuming. This project uses:

- 🧠 **Amazon Q Developer CLI** (interactive `q chat`)
- 🧪 TypeScript + Node.js
- 🧰 Native linters and compilers
- ⚙️ Modular architecture with full CommonJS support

> **Goal:** Automate error discovery, get intelligent explanations from Amazon Q, and assist developers in faster resolutions — all from the terminal.

---

## 📦 Features

✅ TypeScript compiler diagnostics
✅ ESLint error scanning
✅ Unit test failure detection (coming..)
✅ Interactive explanations using Amazon Q's `q chat`
✅ Modular, pluggable architecture (coming ..)
✅ Built for CLI workflows (no IDE required!)

---

## 📸 Demo (How It Works)

(all the code in /src directory)

```bash
npx ts-node src/index.ts ./src
```

1. ✅ Scans your project with `tsc`, ESLint, and tests.
2. 🔴 Detects and shows the errors.
3. 🤖 Offers to explain errors using Amazon Q (`q chat`).
4. 🧛 Prompts you to interactively debug with guidance.
5. 👨‍💻 Automatically update the codebase and resolve the errors

---

## 🧠 Architecture

```
/src
├── index.ts        # Entry point
├── errors.ts       # Lint/build/test scanning
├── q-helper.ts     # Amazon Q CLI chat integration
└── test.ts         # Test file with linter errors
```

---

## 📂 Folder Structure

```bash
crush-review/
├── src/
│   ├── index.ts
│   ├── errors.ts
│   ├── q-helper.ts
│   └── test.ts
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## ⚙️ Installation & Usage

### 1. Clone and Install

```bash
git clone git@github.com:gulzerr/crush-review.git
cd crush-review
yarn install
```

### 2. Install Amazon Q CLI

Follow [AWS Q CLI setup guide](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/install-q.html) to install and authenticate.

```bash
q login
```

### 3. Run the Assistant

```bash
npx ts-node src/index.ts ./src
```

---

## 🥪 Example Output

```
🔍 Scanning project at: /Users/shopup/Documents/personal-projects/crush-review/src

🔴 Error Found:

❌ ESLint Error:
/Users/shopup/Documents/personal-projects/crush-review/src/test.ts: line 2, col 29, Error - Unexpected any. Specify a different type. (@typescript-eslint/no-explicit-any)
/Users/shopup/Documents/personal-projects/crush-review/src/test.ts: line 4, col 3, Error - Unexpected var, use let or const instead. (no-var)
/Users/shopup/Documents/personal-projects/crush-review/src/test.ts: line 17, col 7, Error - 'unusedVar' is never reassigned. Use 'const' instead. (prefer-const)
/Users/shopup/Documents/personal-projects/crush-review/src/test.ts: line 17, col 7, Error - 'unusedVar' is assigned a value but never used. (@typescript-eslint/no-unused-vars)

4 problems


🤖 Explaining with Amazon Q...
I see you're encountering several ESLint errors in your test.ts file. Let me help you understand and fix these issues.

Let's first look at the file content to better understand the context:
```

---

## 🏐 How It Works

### 1. `errors.ts`

Collects errors using:

```ts
npx eslint . --format compact
```

### 2. `q-helper.ts`

Launches Amazon Q chat for explanations:

```ts
execSync(`q chat --trust-all-tools --no-interactive "${errorMessage}`);
```

### 3. `test.ts`

A sample ts file with linter errors

---

## 💪 Educational Value

- Learn how to build robust CLI tools with TypeScript.
- See how to automate diagnostics with compilers and linters.
- Explore integration patterns with AI developer tools like Amazon Q.
- Reinforce best practices for command-line development.

---

## 🔪 Supported Languages

- ✅ TypeScript / Node.js
- (Extendable to Python or Go with minor adjustments.)

---

## 🏆 Judging Criteria

| Criteria             | How This Project Meets It                                      |
| -------------------- | -------------------------------------------------------------- |
| ✅ Amazon Q usage    | Integrated via `q chat` CLI for real-time error explanations   |
| ✅ Educational value | Teaches error handling, CLI dev, and Q integration             |
| ✅ Originality       | Unique AI-assisted debugging from terminal (no IDE dependency) |
| ✅ Writing quality   | Well-commented, modular code + full documentation provided     |

---

## 🛠 Future Improvements

- Auto-suggest fixes usings CodeWhisperer
- Add support for Python and Go
- Highlight errors in source files using ASTs
- Integrate CI/CD feedback loop

---

## 👤 Author

**Bulbul Gulzer Deb** — Master Student at TU Ilmenau, Germany and Backend Engineer (Node.js, TypeScript, Python, Go)

[LinkedIn](https://www.linkedin.com/in/deb/) [Github](https://github.com/gulzerr)

---

## 📜 License

MIT License — feel free to use, fork, and improve!
