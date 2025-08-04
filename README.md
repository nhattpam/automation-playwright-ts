# 🧪 SauceDemo UI Automation Testing

End-to-end UI testing project for [SauceDemo](https://www.saucedemo.com) using **Playwright**, **Cucumber**, **TypeScript**, and **Page Object Model (POM)**.  

---

## 🧰 Tech Stack

- 🎭 Playwright – browser automation
- 🥒 Cucumber – BDD with Gherkin
- ⌨️ TypeScript – strict typing
- 📐 Page Object Model – reusable page abstraction
- 🧪 Playwright assertions

---

## 📁 Project Structure

```
src/
├── pages/             # Page Object Model classes
│   ├── authentication/  # LoginPage.ts
│   ├── inventory/       # InventoryPage.ts
│   └── cart/            # CartPage.ts
│
├── test/
│   ├── ui/
│   │   ├── features/   # Gherkin feature files
│   │   └── steps/      # Step definitions
│   └── support/
│       ├── world.ts    # CustomWorld context
│       └── hooks.ts    # Before/After hooks
│
└── cucumber.js         # Cucumber configuration
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run all UI tests

```bash
npm run test
```

### 3. Run a specific feature

```bash
npm run test src/test/ui/features/authentication/login.feature
npm run test src/test/ui/features/inventory/inventory.feature
npm run test src/test/ui/features/cart/cart.feature
```

---

## ✅ Features Covered

| Feature      | Description                                  |
|--------------|----------------------------------------------|
| `login`      | Valid/invalid login, locked-out user         |
| `inventory`  | Add/remove items, verify product listing     |
| `cart`       | Cart add/remove, checkout button             |
| `UI checks`  | Verify UI elements across pages              |

---

## 💡 Sample Scenario

```gherkin
Scenario: Add a product to cart
  Given I am on the SauceDemo login page
  When I login with username "standard_user" and password "secret_sauce"
  And I add "Sauce Labs Backpack" to the cart
  Then the cart badge should show 1
```

---

## 📌 Notes

- SauceDemo is a **UI-only demo site** – no real API.
- This project is for **demo, practice, and portfolio use**.
- Followed **Page Object Model (POM)** for clean architecture.

---

## 📄 License

Nhat Pham (https://www.linkedin.com/in/nhattpam02/)
