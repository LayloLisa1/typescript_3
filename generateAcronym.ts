function generateAcronym(phrase: string): string {
    const cleanPhrase = phrase.replace(/[^\w\s-]/g, '');
    const words = cleanPhrase.split(/[\s-]+/);
    const acronym = words.map(word => word[0].toUpperCase()).join('');
    
    return acronym;
}
console.log(generateAcronym("As Soon As Possible"));
console.log(generateAcronym("Liquid-crystal display")); 
console.log(generateAcronym("Thank George It's Friday!")); 
