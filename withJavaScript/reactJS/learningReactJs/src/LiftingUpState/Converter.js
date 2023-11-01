const Converter = (flag,value) =>{
    const convertedValue = flag === 'c' ? Math.floor(((value-32)/9)*5*100)/100 : Math.floor((((value*9)/5)+32)*100)/100;
    return convertedValue;
    
}
export default Converter;