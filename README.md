# ReactNativeCICD 🚀

[![Udemy Course](https://img.shields.io/badge/Udemy-CI%2FCD%20for%20React%20Native-blue)](https://www.udemy.com/course/continuous-integration-and-continuous-delivery-for-react-native/?couponCode=2021PM25)

## 📋 Table of Contents

- [Course Overview](#📖-course-overview)
- [Key Features](#✨-key-features)
- [Tools & Technologies](#🛠️-tools--technologies)
- [What You'll Learn](#📚-what-youll-learn)
- [Why CI/CD Matters](#💡-why-cicd-matters)
- [Target Audience](#🎯-target-audience)
- [Branching Structure/Guidelines](#🌳-branching-structureguidelines)
- [Project Structure](#🗃️-project-structure)
- [Getting Started](#🚀-getting-started)
- [Course Link](#📺-course-link)
- [Additional Learning Resource](#📹-additional-learning-resource)
- [Give a Star!](#🌟-give-a-star)

**ReactNativeCICD** is a project developed as part of the **Master CI/CD for React Native** course. The project focuses on setting up **Continuous Integration** and **Continuous Delivery** pipelines for React Native applications, enabling automated workflows for testing, building, and deployment.

## 📖 Course Overview

This project demonstrates how to streamline your React Native development process by setting up CI/CD pipelines.
You can see [screenshots](https://github.com/Abdelrahman-Yasser-1/ReactNativeCICD/blob/dev/AppCenter_Build_Guide.md) for building process and badges for building status.

> **<span style="color:red;">⚠️ Important Note:</span>**
>
> In this course, the instructor uses **Visual Studio App Center** for setting up CI/CD pipelines. However, please note that **Visual Studio App Center is scheduled for retirement on March 31, 2025**. For more information and recommended alternatives, visit [Visual Studio App Center's official website](https://appcenter.ms/).
>
> The CI/CD principles covered in this course are versatile and can be applied with various tools and services, so the knowledge you gain here will remain valuable beyond App Center. You’ll be able to implement similar CI/CD workflows with alternative platforms such as GitHub Actions, Bitrise, or CircleCI.

## ✨ Key Features

- Hands-on implementation of CI/CD pipelines.
- Automated testing, building, and deploying React Native apps.
- Use of tools like **AppCenter**.
- Workflows optimized for both Android and iOS.

## 🛠️ Tools & Technologies

- **Git**: Version Control System (VCS).
- **AppCenter**: Continuous integration and delivery platform.

## 📚 What You'll Learn

- How to create CI/CD pipelines for React Native apps.
- Automating the entire build-test-deploy process.

## 💡 Why CI/CD Matters

**Continuous Integration** (CI) and **Continuous Delivery** (CD) ensure that:

- Your app is always production-ready.
- Bugs are caught early with automated testing.
- Manual deployment processes are minimized.
- Features are delivered faster with confidence.

## 🎯 Target Audience

This project is ideal for:

- React Native developers wanting to automate their app release processes.
- Engineers interested in learning CI/CD pipelines for mobile apps.
- Developers aiming to always keep their app ready for production.

---

## 🌳 Branching Structure/Guidelines

- **`main`**: Stable, production-ready code.
- **`develop`**: Latest development features, ready for testing.
- **`test`**: Testing branch.
- **`feature/<name>`**: New features should branch off `develop`.

## 🗃️ Project Structure

```bash
🗃️ ReactNativeCICD
┣ 📂__tests__
┣ 📂android
┣ 📂app
┃ ┗ 📂src
┃   ┗ 📂main
┃     ┣ 📂assets
┃     ┗ ┗ 📜appcenter-config.json # AppCenter configuration file (Contains Android app secret)
┣ 📂ios
┣ ┗ 📜AppCenter-Config.plist  # AppCenter configuration file (Contains iOS app secret)
┣ 📂src
┃ ┣ 📂AppContent
┃ ┃ ┗ 📜App.tsx
┃ ┣ 📂components
┃ ┃ ┣ 📂Button
┃ ┃ ┣ 📂Divider
┃ ┃ ┣ 📂Screen
┃ ┃ ┣ 📂Text
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂enums
┃ ┣ 📂Navigation
┃ ┣ 📂Providers
┗ ┗ 📂screens
    ┣ 📂About
    ┣ 📂AppCenter
    ┣ 📂Counter
    ┣ 📂Home
    ┗ 📜index.ts
```

## 🚀 Getting Started

Follow these steps to clone the project and set up CI/CD for your React Native app:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/ReactNativeCICD.git
   ```

2. Change directory to project:

   ```bash
   cd ReactNativeCICD
   ```

3. Install dependencies:

   For **npm** users:

   ```bash
   npm install
   ```

   For **Yarn** users:

   ```bash
   yarn install
   ```

4. **iOS Setup**: (For users running on iOS)

   If you're developing on iOS, make sure to install CocoaPods dependencies. Navigate to the `ios` directory and run:

   ```bash
   cd ios
   pod install
   cd ..
   ```

Now, you can run your project on an iOS simulator or device.

## 📺 Course Link

Start mastering CI/CD for React Native by enrolling in the full course here:

[![Enroll Now - Master CI/CD for React Native](https://img.shields.io/badge/Enroll%20Now-green?logo=udemy&style=flat&labelColor=blue&color=green&logoColor=white&text=Master%20CI%2FCD%20for%20React%20Native)](https://www.udemy.com/course/continuous-integration-and-continuous-delivery-for-react-native/?couponCode=2021PM25)

---

## 📹 Additional Learning Resource

For more insights into React Native and CI/CD practices, check out this **YouTube Playlist** on **CI/CD in Mobile Development**. This playlist covers key concepts and practical steps to help you set up and optimize CI/CD for your React Native projects.

[![YouTube](https://img.shields.io/badge/YouTube-CI%2FCD%20in%20Mobile%20Development-red?logo=youtube)](https://www.youtube.com/playlist?list=PL0bESU04Rrw0c1ofAaI_TK3Eph7p-DzEP)

---

## 🌟 Give a Star!

If you found this project helpful or informative, feel free to **star** this repository and share it with others!

---
