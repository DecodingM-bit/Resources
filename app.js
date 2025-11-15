/* app.js */
console.log("App loaded.");
// You can add more functionality here.
// app.js (updated)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service Worker Registered', registration))
        .catch(error => console.error('Service Worker Registration Failed:', error));
}
