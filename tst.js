const print1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(resolve.toString());
            resolve('g')
        }, 1000); 
    })
    
}
const print2 = ()=>{
    return new Promise((resolve, reject) => {
        console.log('hi2')
        resolve()
    })
    
}
//upload everything to github for device transfer
print1().then(print2)