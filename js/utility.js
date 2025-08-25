function getvalueFrominputfield(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue);
    return inputNumber
}

function getvalueOfinnerText(id){
    const textValue=document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    return textNumber
}
function showTransaction(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cahout-form').classList.add('hidden')
    document.getElementById('transactions').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}