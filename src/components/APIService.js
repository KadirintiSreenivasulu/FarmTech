export default class APIService{
    // Insert an article
    static insertNewUser(body){
        return fetch('http://localhost:5000/addnewuser',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }
}