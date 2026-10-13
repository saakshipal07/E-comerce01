
// const cartItem=[];
let cartItem = JSON.parse(
    localStorage.getItem("data")
) || [];

const container=document.querySelector('.container');
const cartbag=document.querySelector('#items')
const nextpagediv=document.querySelector('#cartContainer')

window.addEventListener('load', datashow);

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6",
    rating: 4.8,
    views: 1250,
    description:
      "A hardy indoor plant with tall leaves that needs little water and thrives in low-light conditions."
  },
  {
    id: 2,
    name: "Peace Lily",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYNLPj1xGSSw3wsMTIqlxgfd8eXfZ_2FdFUfCzHiPPw&s=10",
    rating: 4.7,
    views: 980,
    description:
      "A beautiful flowering indoor plant with elegant white blooms, known for improving indoor air quality."
  },
  {
    id: 3,
    name: "Money Plant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpSWmEJtCvfeXuwnVsv8bZUeZlG2sCu4PiEn9IliAxQ&s=10",
    rating: 4.6,
    views: 2100,
    description:
      "A popular low-maintenance climber with heart-shaped leaves, perfect for homes, offices, and decorative spaces."
  },
  {
    id: 4,
    name: "Aloe Vera",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    rating: 4.9,
    views: 1780,
    description:
      "A useful succulent with medicinal properties that requires plenty of sunlight and very little watering."
  },
  {
    id: 5,
    name: "Areca Palm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheZHBUfoabE4aZZLreZrbeSs024AnCoOCkK2gquaJZQ&s=10",
    rating: 4.5,
    views: 860,
    description:
      "A graceful tropical palm with lush green foliage that adds freshness and a natural feel to interiors."
  },
  {
    id: 6,
    name: "Rubber Plant",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    rating: 4.7,
    views: 1430,
    description:
      "A stylish indoor plant featuring large glossy leaves, growing well in bright indirect sunlight and warm environments."
  },
  {
    id: 7,
    name: "Spider Plant",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    rating: 4.6,
    views: 1120,
    description:
      "An easy-growing houseplant with attractive striped leaves that produces small baby plants along its long stems."
  },
  {
    id: 8,
    name: "Jade Plant",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    rating: 4.8,
    views: 1340,
    description:
      "A charming succulent with thick oval leaves, often associated with prosperity and requiring minimal maintenance."
  },
  {
    id: 9,
    name: "Monstera",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    rating: 4.9,
    views: 2560,
    description:
      "A trendy tropical plant recognized by its large split leaves, making it an attractive statement piece indoors."
  },
  {
    id: 10,
    name: "Fiddle Leaf Fig",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2Znh5vnRk6aAuj4JwdJJ6kxOXzwDOpQlmFnVdzYhAg&s=10",
    rating: 4.5,
    views: 920,
    description:
      "A striking indoor tree with large violin-shaped leaves that brings an elegant tropical appearance to modern spaces."
  },
  {
    id: 11,
    name: "ZZ Plant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLm6gi8e1Q2Cb8pJqzmS__Lc4Wu4xup3AkCebgI7tkg&s=10",
    rating: 4.8,
    views: 1560,
    description:
      "An extremely durable indoor plant with shiny leaves that tolerates low light, drought, and occasional neglect."
  },
  {
    id: 12,
    name: "Boston Fern",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwsLP6cHBuEH1UtxrMXG5BWs74KO7RVGBy0nME0Sg1g&s=10",
    rating: 4.4,
    views: 740,
    description:
      "A lush fern with delicate arching fronds that looks beautiful in hanging baskets and humid indoor environments."
  },
  {
    id: 13,
    name: "Lucky Bamboo",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
    rating: 4.7,
    views: 1890,
    description:
      "A decorative plant commonly associated with good fortune, easily grown in water or well-draining soil."
  },
  {
    id: 14,
    name: "Calathea",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczGQs17u05jnOAr-up1pB-pp8MsI23Zj3WoPfSi6AlA&s=10",
    rating: 4.6,
    views: 1050,
    description:
      "A colorful tropical plant with beautifully patterned leaves that prefers humidity, indirect light, and consistent moisture."
  },
  {
    id: 15,
    name: "Croton",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
    rating: 4.5,
    views: 890,
    description:
      "A vibrant tropical plant with colorful red, yellow, orange, and green foliage that brightens indoor and outdoor spaces."
  }
];

function updatestorage(){
  localStorage.setItem('data',JSON.stringify(cartItem))
  

}


function datashow(){ 
  if(cartItem.length > 0){
    
    const itemcount=document.createElement('span')
    itemcount.classList.add('countspan');
    itemcount.textContent=`${cartItem.length}`
    
    bagdata.append(itemcount)
    
    const itemdiv=document.createElement('div');

     cartItem.forEach((elm)=>{
    console.log(elm)
     const itemh2=document.createElement('h2');
   
    itemh2.textContent =`${elm.name}`;
    itemdiv.append(itemh2)
 nextpagediv.appendChild(itemdiv)
  })

   }
  else{
    console.log("Empty")
  }
  plants.forEach((ele)=>{
    
    const divCart=document.createElement('div');
divCart.classList.add('cart');

const divImg=document.createElement('div');
divImg.classList.add('img-container')
const img=document.createElement('img');

img.src=`${ele.image}`

const rating=document.createElement('div')
const starspan=document.createElement('span')
starspan.textContent=`${ele.rating}⭐|`
const viewspan=document.createElement('span')
viewspan.textContent=`${ele.views}`

const ProductInfo=document.createElement('div');
ProductInfo.classList.add('ProductInfo');
const productName=document.createElement('h1');
productName.classList.add('productName')
const productdescrition=document.createElement('p')
productdescrition.classList.add('productDescription');
productName.textContent=`${ele.name}`
productdescrition.textContent=`${ele.description}`;

const cartbtn=document.createElement('button');
cartbtn.classList.add('cartBtn')
cartbtn.textContent="Add to Cart"

cartbtn.addEventListener('click', ()=>{
  ItemAdding(ele)
})

divImg.appendChild(img);

rating.append(starspan)
rating.append(viewspan)
ProductInfo.append(productName)
ProductInfo.append(productdescrition);


divCart.appendChild(divImg)
divCart.appendChild(rating);
divCart.appendChild(ProductInfo)
divCart.appendChild(cartbtn);

// container.append(divCart);
  
})
}


function ItemAdding(ele){
  console.log("Data is addded here")
  console.log(ele)
 
  cartItem.push(ele)
  updatestorage()
console.log(cartItem);
if(cartItem.length > 0){
    console.log(cartItem)
    const itemcount=document.createElement('span')
    itemcount.classList.add('countspan');
    itemcount.textContent=`${cartItem.length}`
    
    bagdata.append(itemcount)
   }
  else{
    console.log("Empty")
  }

}

cartbag.addEventListener('click',cartItemcount)


const bagdata=document.querySelector('.context')


function cartItemcount (){
  // e.preventDefault();
  
  console.log("cart data loaded........");

 
}






