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
✅ Unit test failure detection
✅ Interactive explanations using Amazon Q's `q chat`
✅ Modular, pluggable architecture
✅ Built for CLI workflows (no IDE required!)

---

## 📸 Demo (How It Works)

```bash
npx ts-node src/index.ts ./my-project
```

1. ✅ Scans your project with `tsc`, ESLint, and tests.
2. 🔴 Detects and shows the errors.
3. 🤖 Offers to explain errors using Amazon Q (`q chat`).
4. 🧛 Prompts you to interactively debug with guidance.

---

## 🧠 Architecture

```
/src
├── index.ts        # Entry point
├── errors.ts       # Lint/build/test scanning
├── q-helper.ts     # Amazon Q CLI chat integration
└── utils.ts        # Prompting and CLI I/O
```

---

## 📂 Folder Structure

```bash
q-debug-assist/
├── src/
│   ├── index.ts
│   ├── errors.ts
│   ├── q-helper.ts
│   └── utils.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation & Usage

### 1. Clone and Install

```bash
git clone https://github.com/your-username/q-debug-assist.git
cd q-debug-assist
npm install
```

### 2. Install Amazon Q CLI

Follow [AWS Q CLI setup guide](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/install-q.html) to install and authenticate.

```bash
q login
```

### 3. Run the Assistant

```bash
npx ts-node src/index.ts ./my-project
```

---

## 🥪 Example Output

```
🔍 Scanning project at: ./my-project

🔴 Error Found:
Type 'undefined' is not assignable to type 'string'.

🤖 Explaining with Amazon Q...
(launches `q chat` in your terminal)
```

---

## 🏐 How It Works

### 1. `errors.ts`

Collects errors using:

```ts
npx tsc --noEmit
npx eslint . --format compact
npm test
```

### 2. `q-helper.ts`

Launches Amazon Q chat for explanations:

```ts
execSync("q chat", { stdio: "inherit" });
```

### 3. `utils.ts`

Prompts the user to confirm if they'd like to get AI help.

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

- Auto-suggest fixes using OpenAI or CodeWhisperer
- Add support for Python and Go
- Highlight errors in source files using ASTs
- Integrate CI/CD feedback loop

---

## 👤 Author

**You** — Backend Engineer (Node.js, TypeScript, Python, Go)
Twitter/GitHub/LinkedIn: _Add links here_

---

## 📜 License

MIT License — feel free to use, fork, and improve!
