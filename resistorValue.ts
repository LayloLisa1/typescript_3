// Rang kodlari uchun xarita (dictionary)
const colorCodeMap: { [key: string]: number } = {
    'qora': 0,
    'jigarrang': 1,
    'qizil': 2,
    'to\'q sariq': 3,
    'sariq': 4,
    'yashil': 5,
    'ko\'k': 6,
    'binafsha': 7,
    'kulrang': 8,
    'oq': 9
};

function resistorValue(colors: string[]): string {
    const firstColorValue = colorCodeMap[colors[0].toLowerCase()];
    const secondColorValue = colorCodeMap[colors[1].toLowerCase()];
    return `${firstColorValue}${secondColorValue}`;
}
console.log(resistorValue(["jigarrang", "yashil"])); // 15
console.log(resistorValue(["jigarrang", "yashil", "binafsha"])); // 15
console.log(resistorValue(["ko'k", "oq"])); // 69
