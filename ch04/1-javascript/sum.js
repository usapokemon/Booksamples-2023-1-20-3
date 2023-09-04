let additionFunction = (arrays) => {
    let sum = 0;
    for (let i in arrays){
        sum += arrays[i];
    }
    return sum;
}   
export default additionFunction;