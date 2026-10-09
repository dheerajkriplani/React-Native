# React-Native

A React Native app built with Expo.

## Run locally

```bash
npm install
npx expo start
```

Press `a` to open on the Android emulator, or scan the QR code with the **Expo Go** app.

## Build an APK

### 1. Install EAS CLI and log in

```bash
npm install -g eas-cli
eas login
```

### 2. Configure the project

```bash
eas build:configure
```

### 3. Add the APK profile in `eas.json`

```json
{
  "build": {
    "preview": {
      "android": { "buildType": "apk" }
    }
  }
}
```

### 4. Install the dev client

```bash
npx expo install expo-dev-client
```

### 5. Start the build

```bash
eas build -p android --profile preview
```

When the build finishes, EAS prints a download link for the APK. Open the link on your phone (or download it and transfer it) to install the app.

## Commands summary

```bash
npm install -g eas-cli
eas login
eas build:configure
npx expo install expo-dev-client
eas build -p android --profile preview
```