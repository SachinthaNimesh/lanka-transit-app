# Mobile App Project

This project is a mobile application built using React Native for the frontend and an ASP.NET backend. The application is designed to provide a seamless user experience and is structured to facilitate easy development and deployment.

## Project Structure

```
mobile-app-project
├── .github
│   └── workflows
│       ├── android-build.yml      # GitHub Actions workflow for building the Android APK
│       └── backend-deploy.yml      # GitHub Actions workflow for deploying the ASP.NET backend
├── mobile
│   ├── android
│   │   ├── app
│   │   │   ├── build.gradle         # Gradle build configuration for the Android app module
│   │   │   └── src
│   │   │       └── main
│   │   │           ├── AndroidManifest.xml  # Manifest file for the Android application
│   │   │           └── java         # Java source code for the Android application
│   │   └── build.gradle             # Gradle build configuration for the Android project
│   └── src
│       ├── App.js                   # Main entry point for the mobile application
│       └── components               # Reusable components for the mobile application
├── backend
│   ├── Controllers                  # Controller classes for handling HTTP requests
│   ├── Models                       # Model classes representing data structure
│   ├── Program.cs                   # Entry point for the ASP.NET application
│   ├── Startup.cs                   # Configuration for services and request pipeline
│   └── appsettings.json             # Configuration settings for the ASP.NET application
├── .gitignore                       # Specifies files and directories to be ignored by Git
└── README.md                        # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js and npm installed for the mobile application.
- Java Development Kit (JDK) installed for building the Android application.
- .NET SDK installed for the ASP.NET backend.

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mobile-app-project
   ```

2. **Mobile Application:**
   - Navigate to the `mobile` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Run the application:
     ```
     npm start
     ```

3. **Backend Application:**
   - Navigate to the `backend` directory.
   - Restore dependencies:
     ```
     dotnet restore
     ```
   - Run the application:
     ```
     dotnet run
     ```

### Deployment

- The Android APK will be built automatically using GitHub Actions and will be available as an artifact upon new releases.
- The ASP.NET backend will be deployed automatically with every commit to the main branch using GitHub Actions.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.