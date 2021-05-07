// CAHT
let miaulement = 0;

export function chat() {
    setTimeout(() => {
        console.log("Miaouw");
        miaulement++;

        if (miaulement < 10) {
            chat();
        }
    }, 2000);
}


// AVEC INTERVAL

// export function chat() {
//     setInterval(() => { 
//         console.log("Miaouw"); 
//     }, 2000);
// }
