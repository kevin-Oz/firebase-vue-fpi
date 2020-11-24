import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyBJOrh4HKwP-L2diCYfbBraUHH4HX8UFxg",
    authDomain: "fpi-ads.firebaseapp.com",
    databaseURL: "https://fpi-ads.firebaseio.com",
    projectId: "fpi-ads",
    storageBucket: "fpi-ads.appspot.com",
    messagingSenderId: "951058068871",
    appId: "1:951058068871:web:b08d186269ae5fa8bccf22"
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const anuncios = db.collection('anuncios').get()
.then(res => {
    let lista= [];

    res.forEach(doc => {
        let anuncio = doc.data()
        anuncio.id = doc.id
        lista.push(anuncio)
    })
    return lista;
  })

// export utils/refs
export {
  db,
  anuncios
}