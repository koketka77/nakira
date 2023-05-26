const container = document.querySelector(".container")

const input = document.querySelector("#input")
const button = document.querySelector("#getPosts")
const requiredBlock = document.querySelector(".requiredBlock")

const getPosts = async () => {
    const inpVal = input.value
    

    if(inpVal < 0){
        requiredBlock.innerHTML = `<h1>ERROR</h1>`
    }else{
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${inpVal}`)
    const res = await data.json()
    requiredBlock.innerHTML = `
    <div class="graham">userId: ${res.userId}
      <li>id: ${res.id}</li>
      <li>${res.body}</li>
    </div>
  `
    }
}




const kikiol = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()
    const users = response.filter(user => user.userId === 1 )

    if (users.length > 0) {
        const postsHTML = users.map(user => `
          <div class="graham">userId: ${user.userId}
            <li>id: ${user.id}</li>
            <li>${user.body}</li>
          </div>
        `).join(' ')
    
        container.innerHTML = postsHTML
      }

}
button.addEventListener("click", getPosts)
kikiol()