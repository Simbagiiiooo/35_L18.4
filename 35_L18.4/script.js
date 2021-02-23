// A

const addTheWordCool = (array) => {
        array.push("cool");
        return array;
        
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat:Add cool: ["nice", "awesome", "tof", "cool"]

// B

const amountOfElementsInArray = (number) => {
    return number.length;
    
};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// resultaat: 3

// C

const selectBelgiumFromBenelux = (country) => {
    return country[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: Belgie

// D

const lastElementInArray = (last) => {
    return (last[last.length -1]);
    
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

//  E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = (array) => {
    return(array.slice(1));
}
const impeachTrumpSplice = (array) => {
    return(array.splice(1));
}

console.log(impeachTrumpSlice(presidents)); 
// ["Obama", "Bush", "Clinton"]
// The original array will NOT be modified!!!!
console.log(impeachTrumpSplice(presidents)); 
// ["Obama", "Bush", "Clinton"]
// The splice() method changes the contents of an array 
// The original array will be modified!!!!

//  F

const stringsTogether = (together) => {
    return (together.join(" "));
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

// G

const combineArrays = () => {
    let num1 = [1,2,3];
    let num2 = [4,5,6];
    return(num1.concat(num2));
};

console.log(combineArrays());
// resultaat: [1,2,3,4,5,6]