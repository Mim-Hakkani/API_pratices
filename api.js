/* start of user api section

   1.fetch the json api 
   2.response and data convert
   3.when button click then data is loaded
   4.create the js div and set some class of div 
   5.finally append the child

*/

const user_load=()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>userdata(data))
}

const userdata =(userDetails) =>{
   const userid = document.getElementById("user-id");
   for(const userdata of userDetails){
       console.log(userdata);
      const div =document.createElement('div');

      div.classList.add('col-md-4');
      div.classList.add('user-info');
      div.classList.add('border-info');
      div.classList.add('border');
        
      div.innerHTML =`
      <h2 style ="color:green">Name : ${userdata.name}</h2>
      <h4 style ="color:voilet">Email: ${userdata.email}</h4>
      <h6 style ="color:orange">City:${userdata.address.city}</h6>
      `
      userid.appendChild(div);


   }
}

/* End of user api section */

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>res.json())
.then(data =>fbpost(data))

const fbpost = (fpost) =>{
   const posts = document.getElementById('facebook-posts');
  // console.log(fpost);
  fpost.forEach(post =>{
      
   const div = document.createElement('div')
   div.classList.add('col-md-6')
   div.innerHTML =`

      <h5 class="text-danger">Post No : ${post.id}</h5>
      <h3 class="text-primary">${post.title}</h3>
      <p class="text-justify text-muted">${post.body}</p>

   `
   posts.appendChild(div);

   })

}


/* Facebbok Posts Images ....*/

const myimages =() =>{
   fetch('https://jsonplaceholder.typicode.com/photos')
   .then(res=>res.json())
   .then(data=>postimgs(data))
}

const postimgs =(images)=>{

   const fbimgeid = document.getElementById('fb-img');
 

 (images.slice(0,20)).forEach(image=>{
    // console.log(image);
      const div = document.createElement('div');
      div.classList.add('col-md-4');
      div.innerHTML =`
                  <div class="card">
                     <p>${image.id}</p>
                     <img src="${image.thumbnailUrl}" class="card-img-top" alt="" height="100" width="100">
                     <div class="card-body">
                        <h5 class="card-title">${image.title}</h5>
                        <p class="card-text">Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                 </div>  
      
      `
      fbimgeid.appendChild(div);


   })

} 

/* Quote the niti kotha ,,,,,  */
const newqote = ()=>{
   fetch('https://api.kanye.rest/')
   .then(res=>res.json())
   .then(data =>QuoteText(data))
}


 const QuoteText=(text)=>{
    const qiv = document.getElementById('quote')
    qiv.innerText =text.quote;
 }


 /* random user  with his picture ,name ,cell */
 
 fetch('https://randomuser.me/api/?results=6')
 .then(res=>res.json())
 .then(data =>Rusers(data.results))

 const Rusers =(users)=>{
  const randomDiv = document.getElementById('random');
  users.forEach(user =>{
     console.log(user);
     const mimDiv = document.createElement('div');
      mimDiv.classList.add('col-md-4');
      mimDiv.innerHTML =`
            <img src="${user.picture.medium}" alt="" style="height: 200px; width: 200px; border-radius: 50%;">
            <h3>Name : ${user.name.title}. ${user.name.first} ${user.name.last}</h3>
            <h3>Cell :${user.cell}</h3>
            <h3>Gender:${user.gender}</h3>
      
      `
      randomDiv.appendChild(mimDiv)

  })

 }