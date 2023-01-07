const firebaseConfig = {
    apiKey: "AIzaSyBexyNPogru8Jc7sq4FoZBrFEckPrmBS8c",
    authDomain: "eronixmc.firebaseapp.com",
    databaseURL: "https://eronixmc-default-rtdb.firebaseio.com",
    projectId: "eronixmc",
    storageBucket: "eronixmc.appspot.com",
    messagingSenderId: "469680302705",
    appId: "1:469680302705:web:b2475a19ba090001e109d0",
    measurementId: "G-6Z685TD6MN"
};
firebase.initializeApp(firebaseConfig);

async function register() {
    const db = firebase.database();
    const username = document.getElementById("pseudo").value
    const email = document.getElementById("email").value
    const emailVerified = `${email}@eronix.fr`;
    const password = document.getElementById("password").value
    let userId, user;
    try {
        let userCredential = await firebase.auth().createUserWithEmailAndPassword(emailVerified, password)
        if (!userCredential?.user?.uid) {
            throw new Error("There is no UID!", userCredential);
        }
        user = userCredential.user;
        userId = userCredential.user.uid;
        console.log(`UID is: ${userId}`);

        await db.ref("users/" + userId).set({
            username: username,
            password: password,
            uid: userId,
            email: emailVerified,
        });
        window.location = ".././index.html"
    } catch (ex) {
        console.error(ex);
        document.getElementById("error").innerHTML = ex.message
    }
}
