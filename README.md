# Example Monorepo: Expo + Next.js

## 🚀 Overview
This repository is a monorepo combining **Expo** (React Native) and **Next.js** (React for Web). It enables seamless development across mobile and web using shared components.

## What's Inside?  
This monorepo uses [pnpm](https://pnpm.io) as its package manager and includes multiple applications and shared packages.  
Each package and application is built with **100% [TypeScript](https://www.typescriptlang.org/)**, ensuring strong type safety and developer-friendly code.  

### 📂 Folder Structure
```bash
example-monorepo-expo-nextjs/
├── apps/
│   ├── mobile/          # Expo mobile application
│   ├── web/             # Next.js web application
├── packages/
│   ├── eslint-config/   # Shared ESLint configuration for code consistency
│   ├── hello-ui/        # Shared UI components used by both `web` and `mobile` apps
│   ├── tsconfig/        # Shared TypeScript configurations across the monorepo
├── package.json         # Root package management and dependencies
├── README.md            # Project documentation and guidelines
├── jest.config.ts       # Jest configuration for testing
├── tailwind.config.js   # Tailwind CSS configuration for styling
```

## 🛠️ Setup & Installation
### Prerequisites
Node.js v20+
PNPM (recommended)

### Install Dependencies
Run the following in the root directory:
```sh
pnpm install
```

### Run Development Servers
Mobile (Expo):
```sh
cd apps/mobile
pnpm dev
```

Web (Next.js):
```sh
cd apps/web
pnpm dev
```

Run the following command in the root directory to start development for all apps and packages:
```
pnpm run dev
```

## 🏗️ Build Apps
Mobile (Expo):
```sh
cd apps/mobile
pnpm build
```

Web (Next.js):
```sh
cd apps/web
pnpm build
```

Run the following command in the root directory to start build for all apps and packages:
```sh
pnpm  build
```

## 🚀 Remote Caching (Turbo)
### Enable Turbo Remote Caching with:

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm dlx turbo login
```
This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## 📝 License
This project is licensed under the **MIT License**.  
You are free to use, modify, distribute, and contribute to this project within the terms of the license.  
For full details, refer to the official MIT License documentation:  
[MIT License](https://opensource.org/licenses/MIT)

## 🤝 Contribution Guidelines
We welcome contributions to improve this project! Follow these steps to contribute:

### **1️⃣ Fork the Repository**
Click the **Fork** button in the top right corner of this repository to create your own copy.

### **2️⃣ Clone Your Forked Repository**
Use the following command to clone the project locally:
```sh
git clone https://github.com/YOUR_USERNAME/example-monorepo-expo-nextjs.git
```

### **3️⃣ Create a New Branch**
```sh
git checkout -b feature-branch
```

### **4️⃣ Make Your Changes & Commit**
Modify the code or documentation as needed, then commit your changes:
```sh
git add .
git commit -m "Added new feature"
```

### **5️⃣ Push Changes**
```sh
git push origin feature-branch
```

### **6️⃣ Open a Pull Request**
* Navigate to the original repository on GitHub.

* Click New Pull Request.

* Select your forked repository and the branch you made changes in.

* Describe the modifications and submit the pull request.

## 🚀 Happy Coding! 
By contributing, you agree to maintain code quality, follow best practices, and help build a better development experience. Feel free to suggest improvements via issues or discussions.
