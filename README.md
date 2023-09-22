# Polyglot Pro

This app helps people to learn new languages in an easy and straightforward way.

## Running the application 🚀

To run the app, follow the next steps.

- Go to the root folder of the app and install the dependencies:

```bash
  npm i
```

&nbsp;

- Install pods for the iOS app:

```bash
  cd ios && pod install && cd ..
```

&nbsp;

- Run the app on iOS:

```bash
  npm run ios
```

&nbsp;

- Run the app on Android:

```bash
  npm run android
```

&nbsp;

## Considerations 🚧

The initial code commit was made after approximately 2 hours of development, and there is significant room for improvement, which will be addressed soon. Here are the upcoming tasks:

- [ ] Refactor Components: separate components into individual files to enhance code readability and maintenance. Additionally, create a color style.

&nbsp;

- [ ] Integrate Firebase's Firestore SDK: the Firebase SDK has been set up in the project, and Firestore data is present in the Firebase project. However, the app currently lacks Firestore implementation and is only reading hardcoded data.

&nbsp;

- [ ] Improve Animations: there is room to enhance animations, potentially using technologies like three.js or lottie.
