document.getElementById('apply-btn').addEventListener('click', function(){
    // const getTotalPrice = document.getElementById('total-price');
    // const getTotalPriceString = getTotalPrice.innerText;
    // const totalPrice = parseFloat(getTotalPriceString);
    
    // // Discount field
    // const discountField = document.getElementById('discount-field');
    // const getDiscountField = discountField.value;

    // if(getDiscountField === 'DOM' && typeof getDiscountField === 'string'){
    //     const thirtyPercentDiscount = totalPrice - (totalPrice*30/100);
    //     return (getTotalPrice.innerText = thirtyPercentDiscount);
    // }else{
    //     alert('Your coupon code is invalid');
    //     return discountField.value = '';
    // }


    // Amount Field
    const amountFieldElement = document.getElementById('amount-field');
    const amountFieldElementString = amountFieldElement.value;
    const amountField = parseFloat(amountFieldElementString);

    // Discount Field

    const discountFieldElement = document.getElementById('discount-field');
    const discountFieldElementString = discountFieldElement.value;
    const discountField = parseFloat(discountFieldElementString);


   

    // Coupon Field

    const couponFieldElement = document.getElementById('coupon-field');
    const couponField = couponFieldElement.value;
    

    //After disocunt Final Balance
    const finalBalanceText = document.getElementById('final-balance');
    const finalBalanceTextString = finalBalanceText.innerText;
    const finalBalance = parseFloat(finalBalanceTextString);

    

    const discounPriceText = document.getElementById('discount-price');
    const discounPriceTextString = discounPriceText.innerText;
    const discounPriceTotal = parseFloat(discounPriceTextString);

    amountFieldElement.value = ''
    discountFieldElement.value = ''
    couponFieldElement.value = ''
    
    if(couponField === 'DOM' && typeof(couponField) === 'string'){
        const afterDiscountPrice = amountField - (amountField * discountField/100)
        const discountPrice = amountField * discountField/100;
        return (finalBalanceText.innerText = afterDiscountPrice),
        (discounPriceText.innerText = discountPrice);
    }else{
        alert('Please Enter a valid Coupon'); 
        return(amountFieldElement.value = ''),
        (discountFieldElement.value = ''),
        (couponFieldElement.value = '');
    } 

    
});