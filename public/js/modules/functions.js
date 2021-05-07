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