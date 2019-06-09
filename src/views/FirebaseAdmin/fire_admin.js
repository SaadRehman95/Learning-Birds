import * as admin from './node_modules/firebase-admin';

import serviceAccount from './learning-birds-database-firebase-adminsdk-kixf4-c4485039ad.json.js';


  var firebaseAdmin = admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://learning-birds-database.firebaseio.com"
 });

   

 export default firebaseAdmin;