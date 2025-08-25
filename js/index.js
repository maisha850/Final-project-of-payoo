document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()
    const mobile=getvalueFrominputfield('input-num')
    const pin=getvalueFrominputfield('input-pin')
    
    if(isNaN(mobile)){
        return 'Invalid Number'
    }
    if(mobile.length===11 && pin===1234){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid Input! please try again')
    }
})