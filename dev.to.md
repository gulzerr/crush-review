_This is a submission for the [Amazon Q Developer "Quack The Code" Challenge](https://dev.to/challenges/aws-amazon-q-v2025-04-30): Crushing the Command Line_

---

## 🛠 What I Built

I created an **AI Debugging Assistant**, a powerful command-line tool built with TypeScript that helps backend developers automatically detect, explain, and fix issues in their projects. This tool scans your code using TypeScript, ESLint, and test runners, and when errors are found, it integrates with **Amazon Q Developer CLI** to offer intelligent explanations and suggestions directly from the terminal.

It solves the common pain point of context-switching between terminal and browser or IDE for debugging — bringing AI assistance to the CLI where developers spend a lot of time.

---

## 📲 Demo

```bash
npx ts-node src/index.ts ./my-project
```

- Detects and displays TypeScript, ESLint, and test errors
- Prompts to open `q chat` using Amazon Q Developer CLI
- Provides AI explanations for faster debugging without needing an IDE

![Demo Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8h4gt8mlitynul0e3ey3.png)
![Demo Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wp4jr4amjaai90ul8f26.png)

If you can't run it, here's a short [video demo](https://example.com/demo-video.mp4) <!-- Replace with your video link -->

---

## 📂 Code Repository

- GitHub: [https://github.com/your-username/q-debug-assist](https://github.com/your-username/q-debug-assist)
- License: MIT

---

## 🧠 How I Used Amazon Q Developer

Amazon Q Developer CLI's `q chat` was the key integration for this tool.

Once errors are found using static analysis or test execution, the tool prompts the user to invoke:

```bash
q chat
```

This opens an interactive chat session in the terminal, where developers can:

- Ask for explanations of compiler or linter errors
- Get suggestions on how to refactor or fix the code
- Discuss possible reasons why a test might be failing

### Tips:

- You can pipe files or error messages into `q chat` for detailed discussions.
- Combine this tool with CI/CD to flag and debug errors more intelligently.
- This tool works great in terminal-first workflows or headless environments.

---

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- ⚠️ Please leave this comment in your submission if you or your teammates are currently students. Remove this comment if you're not a student. -->

<!-- ⚠️ By submitting this entry, you agree to receive communications from AWS regarding products, services, events, and special offers. You can unsubscribe at any time. Your information will be handled in accordance with [AWS's Privacy Policy](https://aws.amazon.com/privacy/). Additionally, your submission and project may be publicly featured on AWS's social media channels or related promotional materials. -->
