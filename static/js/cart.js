var updateBtns=document.getElementsByClassName('update-cart')

for(i=0; i<updateBtns.length; i++)
{
    updateBtns[i].addEventListener('click', function(){
        var productId=this.dataset.product
        var action=this.dataset.action
        //console.log('productId:', productId, 'Action:', action)

        //console.log('USER:', user)
       
        if(user == 'AnonymousUser')
        {
            addCookieItem(productId, action)
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action)
{
    //send post request to view (updateItem)
    //to upload json data
    var url='/update_item/'
    console.log('URL:', url)
    /* The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline,
        such as requests and responses.
        fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500
        fetch() won't receive cross-site cookies
        fetch won’t send cookies, unless you set the credentials init option.
    */
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId': productId, 'action': action})
    })
    /* This is just an HTTP response, not the actual JSON */
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        location.reload()
    });
}

function addCookieItem(productId, action)
{
    console.log('User is not authenticated')
    if(action=='add')
    {
        if(cart[productId]==undefined)
        {
            cart[productId]={'quantity':1}
        }
        else
        {
            cart[productId]['quantity'] += 1
        }
    }

    if(action=='remove')
    {
        cart[productId]['quantity'] -= 1

        if(cart[productId]['quantity'] <= 0)
        {
            console.log('Item should be deleted')
            delete cart[productId];
        }
    }
    console.log('CART:', cart)
    document.cookie='cart='+JSON.stringify(cart)+";domain=;path=/"
    location.reload()
}