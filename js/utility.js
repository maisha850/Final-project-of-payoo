function getvalueFrominputfield(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue);
    return inputNumber
}

function getvalueOfinnerText(id){
    const textValue=document.getElementById(id)
    const textNumber=parseFloat(textValue)
    return textNumber
}