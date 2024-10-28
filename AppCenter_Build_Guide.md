## AppCenter Android build problem
In the `Build configuration`, you need to add an `Environment variable` for setting up the correct Java path. Here’s how to configure it:
- **Environment Variable:**
  - **Key:** `JAVA_HOME`
  - **Value:** `$(JAVA_HOME_17_X64)`
>> This setup configures AppCenter to use Java 17, required for compatibility with the latest Android SDK versions.

![image](https://github.com/user-attachments/assets/2d511539-62e4-4ab4-acbb-c5f0635a2d94)

---

## Screenshots
## App Diagnostics

### iOS Diagnostics
![iOS Diagnostics Screenshot](https://github.com/user-attachments/assets/314cc95b-3847-4ecc-a166-4da5ec561e8e)

### Android Diagnostics
![Android Diagnostics Screenshot](https://github.com/user-attachments/assets/39d40f90-8009-439a-8ebd-48e622eb6518)

---

## App Analytics

### iOS Analytics
| Screen 1 | Screen 2 | Screen 3 |
|----------|----------|----------|
| ![iOS Analytics Screen 1](https://github.com/user-attachments/assets/bd82902e-6e1c-48d0-8d3b-f2837a6785e2) | ![iOS Analytics Screen 2](https://github.com/user-attachments/assets/b6b0bffd-6372-45e3-be13-cd2eadcfd702) | ![iOS Analytics Screen 3](https://github.com/user-attachments/assets/23b9649d-2854-46e9-955a-dfa1eba4438c) |

### Android Analytics
| Screen 1 | Screen 2 | Screen 3 |
|----------|----------|----------|
| ![Android Analytics Screen 1](https://github.com/user-attachments/assets/10220ca5-82c2-4b07-8b33-8032d6cda834) | ![Android Analytics Screen 2](https://github.com/user-attachments/assets/94c85c17-12b2-4a8a-9e70-868f93409dc9) | ![Android Analytics Screen 3](https://github.com/user-attachments/assets/39efc9de-9b6a-40ec-8966-9706807430d9) |

---

## Build Details

### iOS Build Details
| Screen 1 | Screen 2 | Build Details |
|----------|----------|---------------|
| ![iOS Build Screen 1](https://github.com/user-attachments/assets/acf7d5b3-d858-43db-895c-7f704b9aa7c7) | ![iOS Build Screen 2](https://github.com/user-attachments/assets/a925ea65-3e95-4ff1-9348-ad69608e3b30) | ![iOS Build Details](https://github.com/user-attachments/assets/03bcdf84-e9ef-4612-bb07-fb7349053100) |

### Android Build Details
| Screen 1 | Screen 2 | Build Details |
|----------|----------|---------------|
| ![Android Build Screen 1](https://github.com/user-attachments/assets/fea7f96d-de8b-4cff-8a8d-d69ef12450c0) | ![Android Build Screen 2](https://github.com/user-attachments/assets/85ad1056-0069-4f6e-a9ab-9c4d09b648bd) | ![Android Build Details](https://github.com/user-attachments/assets/4d77c609-c165-48c4-8278-30c7e8ad6f34) |

---

## PR Checks

| Check 1 | Check 2 | Check 3 |
|---------|---------|---------|
| ![PR Check 1](https://github.com/user-attachments/assets/b36ac5e1-0920-40a0-8884-b008aa2697da) | ![PR Check 2](https://github.com/user-attachments/assets/f3663a09-7d43-496c-9829-b7980b152051) | ![PR Check 3](https://github.com/user-attachments/assets/b755a446-8383-4088-a5d3-734373066cae) |

| Check 4 | Check 5 |
|---------|---------|
| ![PR Check 4](https://github.com/user-attachments/assets/8c137706-d9d0-4ed0-8b2b-cae12f25cd3d) | ![PR Check 5](https://github.com/user-attachments/assets/61f78cba-3b35-4a89-a648-dc471e111d40) |

---

### Build Status

| Branch   | iOS Build                                                                                                                              | Android Build                                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Main** | [![Build Status](https://build.appcenter.ms/v0.1/apps/55babc6d-d25f-4387-b78a-89a6df7a9fca/branches/main/badge)](https://appcenter.ms) | [![Build Status](https://build.appcenter.ms/v0.1/apps/79826600-a50e-4036-99a2-6b66aee1fafa/branches/main/badge)](https://appcenter.ms) |
| **Dev**  | [![Build Status](https://build.appcenter.ms/v0.1/apps/55babc6d-d25f-4387-b78a-89a6df7a9fca/branches/dev/badge)](https://appcenter.ms)  | [![Build Status](https://build.appcenter.ms/v0.1/apps/79826600-a50e-4036-99a2-6b66aee1fafa/branches/dev/badge)](https://appcenter.ms)  |
| **Test** | [![Build Status](https://build.appcenter.ms/v0.1/apps/55babc6d-d25f-4387-b78a-89a6df7a9fca/branches/test/badge)](https://appcenter.ms) | [![Build Status](https://build.appcenter.ms/v0.1/apps/79826600-a50e-4036-99a2-6b66aee1fafa/branches/test/badge)](https://appcenter.ms) |
