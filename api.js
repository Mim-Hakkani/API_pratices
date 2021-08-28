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
