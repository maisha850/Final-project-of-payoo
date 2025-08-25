document.getElementById('add-btn').addEventListener('click',function(e){
e.preventDefault()
const inputValue=getvalueFrominputfield('input-amount')
const pin=getvalueFrominputfield('input-pin')
const bankAC=getvalueFrominputfield('input-num')
if(isNaN(inputValue)){
    alert('Please input invalid number')
    return
}
if(bankAC===12345678910 && pin===1234){
    const currentBalance=getvalueOfinnerText('money');
    const balance=currentBalance+inputValue
document.getElementById('money').innerText=balance
const showTransaction=document.getElementById('show-transaction')
const div=document.createElement('div')

div.innerHTML=`
<div class=""> 
<h3 class="font-semibold text-lg "> Add money</h3>
<div class="w-[400px] bg-white shadow-md rounded-xl p-5 mt-3"> 

<h2><span class="font-medium">CashOut:</span> ${inputValue} Tk <br>
<span class="font-medium">Current Balance:</span> ${balance} Tk</h2>
</div>
</div>`
showTransaction.appendChild(div)
}
else{
    alert('Invalid Input! Please try again')
}
})