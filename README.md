<div style="display:flex; align-items:center">
<img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" style="height:50px">
<img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_white.png" style="height:50px">
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" style="height:50px">
</div>

# Django Rest Framework and React with Firebase Authentication
This project demonstrates how to use Firebase Authentication with Django Rest Framework (DRF) as a backend and React as a frontend for user authentication and management. This project is a fork of [teshank2137's project](https://github.com/teshank2137/django-react-firebase-auth), but instead of using _Chakra UI_ for styling, I use _styled-components_ for integration into my own projects.

## Django

<img src="https://github.com/prolenodev/django-react-firebase-auth/blob/master/localhost-8000.PNG"/><br/>

Edit `server\core\firebase_auth\secrets\firebaseconfig.json`

Generate new private key

```
Firebase Console > Project Overview > Project Settings > Service Accounts > Firebase Admin SDK > Generate New Private Key > Download JSON file
```

Link: https://console.firebase.google.com/project/{project-name}/settings/serviceaccounts/adminsdk

Example:
```
{
  "type": "service_account",
  "project_id": "replace-with-your-own",
  "private_key_id": "0ab00c00c0f000d000cec00f00dedc00dc00000c",
  "private_key": "-----BEGIN PRIVATE KEY-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-nnnnn@nnnnnnnn.iam.gserviceaccount.com",
  "client_id": "114000000000000000000",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-.iam.gserviceaccount.com"
}
```

Django admin overview:
```
http://localhost:8000/admin
http://localhost:8000/admin/auth/user/
```
API endpoints:
```
http://localhost:8000/api/register
http://localhost:8000/api/verified
```

## React

Edit `myapp\src\FirebaseUtils.js`

Get the config from Firebase Console

```
Firebase Console > Project Overview > Project Settings > General > Web Apps > SDK Setup and Configuration > npm
```

Link: https://console.firebase.google.com/project/{project-name}/settings/general

Example:
```
const firebaseConfig = {
  apiKey: "AIabCdE0Fghij_0ab0AAbcdE0abcAb0AbCcddEE",
  authDomain: "replace-with-your-own.firebaseapp.com",
  projectId: "replace-with-your-own",
  storageBucket: "__BUCKET__",
  messagingSenderId: "___sender_id__",
  appId: "__appid__",
  measurementId: "optional",
};

<img src="https://github.com/prolenodev/django-react-firebase-auth/blob/master/localhost-3000.PNG"/><br/>

```

## Firebase

You can find the list of users in your Firebase Authentication console:
```
Firebase Console > Authentication > Users
```

Link: https://console.firebase.google.com/project/{project-name}/authentication/users

<img src="https://github.com/prolenodev/django-react-firebase-auth/blob/master/firebase-console-users.png"/><br/>


---