
const ulr_1 = 'https://meowfacts.herokuapp.com/?count=50'
const urls = 'https://cat-fact.herokuapp.com/facts'

const url = 'https://restcountries.com/v3.1/all';

 fetch(urls).then(
    (response) =>{ 
        return response.json()
    })
 .then(
    (data) => {
        let apis = ''
        data.map((values) => {
            console.log(values)
      
       apis += `
       <div class="card" style="width: 50%;display:flex;place-items:center;margin-left:25%;margin-top:30px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding:5px;"> 
       <div class="card-body">
         <p class="card-title">ID :${values.user}</p>
         <p class="card-text">UserID :${values._id}</p>
         <p class="card-title">Text :${values.text}</p>
         <textarea name="" id="" cols="60" rows="2" placeholder="comments..." style ='box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;border:none;outline:none;border-radius:3px;padding:2px;'></textarea>
         </div>  
     </div> 
       `
    });
    document.querySelector('.container').innerHTML = apis;
    }
 )
 .catch(
    (err) => console.log(err)  
 )

