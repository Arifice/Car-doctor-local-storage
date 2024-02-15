import Swal from "sweetalert2";
const getCartData=(email)=>{
    const storedCartData=localStorage.getItem(`cartOf${email}`);
    if(storedCartData){
        return JSON.parse(storedCartData);
    }
    return [];
}
const saveCartData=(service,id,email)=>{    
    const storedCartData=getCartData(email);
    // const users=getUserData();
    // const loginUser=users.find(user=>user.email===email);
    
    const isExist=storedCartData.find(cart=>cart?.service_id===id);
    if(!isExist){
        service.userEmail=email;
        storedCartData.push(service);
        localStorage.setItem(`cartOf${email}`,JSON.stringify(storedCartData));
        Swal.fire({
            icon: 'success',
            title: 'Yes.....',
            text: `You have successfully added to the cart`, 
            timer:1000,           
          })
    }    
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops!!..',
            text: `You have allready added this}`, 
            timer:1000           
          })
    }
}
const deleteCart=(id,email)=>{
    const storedCartData=getCartData(email);
    const remainItems=storedCartData.filter(item=>item.service_id!==id);    
    localStorage.setItem(`cartOf${email}`,JSON.stringify(remainItems));
}
const updateCart=(id,email)=>{
    const storedCartData=getCartData(email);
    const cartToUpdate=storedCartData.find(item=>item.service_id===id);
    const remainItems=storedCartData.filter(item=>item.service_id!==id);
    console.log({remainItems});
    cartToUpdate.status='confirmed',
    remainItems.push(cartToUpdate);
    console.log({remainItems});
    localStorage.setItem(`cartOf${email}`,JSON.stringify(remainItems));
}

const getUserData=()=>{
    const storedUserData=localStorage.getItem('user');
    if(storedUserData){
        return JSON.parse(storedUserData);
    }
    return [];
}
const saveUsertData=(user)=>{
    const storedUserData=getUserData();
    const isExist=storedUserData.find(storedUser=>storedUser.email===user.email);
    if(!isExist){
        storedUserData.push(user);
        localStorage.setItem('user',JSON.stringify(storedUserData));
        Swal.fire({
            icon: 'success',
            title: 'Yes.....',
            text: `You have successfully registerd`, 
            timer:1000,           
          })
    }    
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops!!..',
            text: `You have allready registerd}`, 
            timer:1000           
          })
        
    }
}
export {saveCartData,getCartData,deleteCart,updateCart,getUserData,saveUsertData}