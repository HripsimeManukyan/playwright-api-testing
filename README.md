# 🚀 API Testing with Playwright

[![CI](https://github.com/your-username/playwright-api-testing/actions/workflows/tests.yml/badge.svg)](https://github.com/your-username/playwright-api-testing/actions)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Playwright](https://img.shields.io/badge/Playwright-latest-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This repository demonstrates **API testing** using the [Playwright Test](https://playwright.dev/docs/test-intro) framework with the [JSONPlaceholder](https://jsonplaceholder.typicode.com) fake REST API.

---

## 📂 Project Structure

```
├── tests/
│   └── api.spec.ts       # API test specifications
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies & scripts
└── .github/
    └── workflows/        # GitHub Actions workflow
```

---

## ✅ Prerequisites

* [Node.js](https://nodejs.org/) (LTS recommended)
* [npm](https://docs.npmjs.com/) (comes with Node.js)

---

## ⚙️ Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/playwright-api-testing.git
   cd playwright-api-testing
   ```
2. Install dependencies:

   ```sh
   npm install
   ```

---

## 🧪 Test Scenarios

The test suite ([tests/api.spec.ts](tests/api.spec.ts)) covers the following endpoints:

* `GET /posts` → Retrieve all posts
* `GET /posts/{id}` → Retrieve a specific post
* `GET /posts/{id}/comments` → Retrieve comments for a post
* `GET /comments?postId={id}` → Retrieve comments by post ID
* `POST /posts` → Create a new post
* `PUT /posts/{id}` → Update an existing post
* `PATCH /posts/{id}` → Partially update a post
* `DELETE /posts/{id}` → Delete a post

---

## ▶️ Running Tests

Run all tests:

```sh
npx playwright test
```

Run tests with UI:

```sh
npx playwright test --ui
```

Run in debug mode:

```sh
npx playwright test --debug
```

---

## 📊 Test Reports

After execution, Playwright generates an **HTML report** in the `playwright-report` folder.
Open it with:

```sh
npx playwright show-report
```

---

## 🔄 CI/CD Integration

This project includes a **GitHub Actions** workflow that automatically runs tests on every push and pull request to `main` or `master`.

---

## 🌐 API Base URL

All tests are executed against:

```
https://jsonplaceholder.typicode.com
```

---

## 🛠️ Tech Stack

* [Playwright Test](https://playwright.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [GitHub Actions](https://docs.github.com/en/actions)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).



