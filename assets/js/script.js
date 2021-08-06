
    // SideNav Initialization
    $(".button-collapse").sideNav();


jQuery(document).ready(function () {
    jQuery("button#learn-more").click(function () {
        jQuery("#hidden-details").show();
        jQuery("button#hide").show();
        jQuery("button#learn-more").hide();
    });
    jQuery("button#hide").click(function () {
        jQuery("#hidden-details").hide();
        jQuery("button#learn-more").show();
        jQuery("button#hide").hide();
    });
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyBSmPAx5BThIyxo8mL-9nasB9NIAmJDAhU",
    authDomain: "assisted-shopping.firebaseapp.com",
    projectId: "assisted-shopping",
    storageBucket: "assisted-shopping.appspot.com",
    messagingSenderId: "111005798119",
    appId: "1:111005798119:web:4ea77834750df772d39c42",
    measurementId: "G-Y098QVPDCQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Initialize variables to hold data
let data = $('#data');
let data2 = $('#data-2');
let data3 = $('#data-3');
let data4 = $('#data-4');
let beautyNum = $('#beauty-num');
let bookNum = $('#book-num');
let phoneNum  = $('#phone-num');
let hardwareNum = $('#hardware-num');
let phoneName = $('#phone-name');
let phonePrice = $('#phone-price');
let phoneCategory = $('#phone-category');
let bookName = $('#book-name');
let bookPrice = $('#book-price');
let bookCategory = $('#book-category');
let beautyName = $('#beauty-name');
let beautyPrice = $('#beauty-price');
let beautyCategory = $('#beauty-category');
let prodNames = [];
// const dbRef = firebase.database().ref();
// const prodRef = dbRef.child('products');
let db = firebase.firestore();
db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        //data.append(doc.id);
        prodNames.push(doc.id);
       
    });
    console.log(prodNames);
    data.append(prodNames[0]);
    data2.append(prodNames[1]);
    data3.append(prodNames[2]);
    data4.append(prodNames[3]);
    bookCategory.append(prodNames[1]);
    beautyCategory.append(prodNames[0]);
    phoneCategory.append(prodNames[2]);


});

// var docRef = db.collection("products").doc("Beauty");

// docRef.get().then((doc) => {
//     if (doc.exists) {
    
//         console.log("Document data:", doc.data());
//         data = doc.data();
//         num = Object.keys(data).length
//         beautyNum.append(num);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
let docUpdate = (dbName, docName, pageRef) => {
    let docRef = db.collection(dbName).doc(docName);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            data = doc.data();
            num = Object.keys(data).length
            // console.log(Object.keys(data));
            pageRef.append(num);
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    
}
docUpdate("products", "Books", bookNum);
docUpdate("products", "Beauty", beautyNum);
docUpdate("products", "hardware", hardwareNum);
docUpdate("products", "Phones", phoneNum);

let phoneRef = db.collection("products").doc("Phones");

phoneRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Phone data:", doc.data());
        data = doc.data();
        let keys = Object.keys(data).forEach((key) => {
            // console.log(key);
            phoneName.append(key);
        }); 
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

let bookRef = db.collection("products").doc("Books");

bookRef.get().then((doc) => { 
    if (doc.exists) {
        console.log("Book data:", doc.data());
        data = doc.data();
        let keys = Object.keys(data).forEach((key) => {
            // console.log(key);
            bookName.append(key);
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

let beautyRef = db.collection("products").doc("Beauty");

beautyRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Beauty data:", doc.data());
        data = doc.data();
        let keys = Object.keys(data).forEach((key) => {
            // console.log(key);
            beautyName.append(key);
            
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
phoneId = 'Iphone 8 Plus';
storeRef = phoneRef.collection(phoneId).doc();
let batch = db.batch();
console.log(storeRef)
// storeRef.get().then((doc) => {  
//     if (doc.exists) {
//         console.log("Store data:", doc.data());
//         data = doc.data();
//         phonePrice.append(data.price);
//         phoneCategory.append(data.category);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
// console.log(storeRef);