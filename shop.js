let merch = [{
    id: 1,
    name: "PUMA T-Shirt",
    size: "M",
    color: "red",
    price: 799,
    image: "product-1.jpg",
    description: "Round neck Puma T-shirt",
  },
  {
    id: 2,
    name: "Black Wrist Watch",
    size: "Normal",
    color: "Black",
    price: 699,
    image: "product-9.jpg",
    description: "This watch tells the time.",
  },

  {
    id: 3,

    name: "Track Pant",
    size: "XL",
    color: "grey",
    price: 499,
    image: "product-3.jpg",
    description: "Double brested grey suit",
  },

  {
    id: 4,
    name: "T-Shirt",
    size: "L",
    color: "__",
    price: 699,
    image: "product-4.jpg",
    description: "T-shirt to wear.",
  },

  {
    id: 5,
    name: "Shoes",
    size: "8",
    color: "White",
    price: 899,
    image: "product-5.jpg",
    description: "Party wear orange tuxedo",
  },

  {
    id: 6,
    name: "T-shirt",
    size: "M",
    color: "black",
    price: 999,
    image: "product-6.jpg",
    description: "Its a T-shirt.",
  },
  {
    id: 7,
    name: "Combo Socks",
    size: "Normal",
    color: "black , white , grey",
    price: 299,
    image: "product-7.jpg",
    description: "HRx socks",
  },
  {
    id: 8,
    name: "Wrist Watch",
    size: "Normal",
    color: "black",
    price: 1999,
    image: "product-8.jpg",
    description: "Good looking suit",
  },
  {
    id: 9,
    name: "Watch",
    size: "Normal",
    color: "black",
    price: 2999,
    image: "product-9.jpg",
    description: "classy Watch",
  },
  {
    id: 10,
    name: "Sports Shoes",
    size: "8",
    color: "redish black",
    price: 1699,
    image: "product-10.jpg",
    description: "damn looking jacket",
  },
  {
    id: 11,
    name: "Shoes",
    size: "9",
    color: "White",
    price: 899,
    image: "product-11.jpg",
    description: "Black oxford for gentlemen's collection",
  },
  {
    id: 12,
    name: "Red T-Shirt",
    size: "XXL",
    color: "Red",
    price: 599,
    image: "product-1.jpg",
    description: "single brested suit with long coat",
  },
];
let cart = [];
let count = 0;

function displaymerch(merchd, type = "main", place = "card") {
  console.log(merchd);
  let strmerch = "";
  let arrmerch = "";
  merchd.forEach(function (ele, index) {
    if (type == "main") {
      strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="/images/${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
        </p>
      </div>
      </div>`;
      arrmerch += strmerch;
    }

    if (type == "cartd") {
      strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="/images/${ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
        </p>
      </div>
      </div>`;

      arrmerch += strmerch;

    }
  });

  document.getElementById(place).innerHTML = arrmerch;

}


function getProductByID(mercha, id) {
  return mercha.find(function (ele) {
    return ele.id == id;
  });
}
let flag = false;

function addToCart(id) {
  flag = false;
  let item = getProductByID(merch, id);

  cart.forEach(function (element) {
    if (element.id == item.id) {
      flag = true;

    }


  })
  if (flag) {
    return 0;
  }
  cart.push(item);
  count += 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displaymerch(cart, type, place);

}


function search() {
  console.log("calling");
}

function deletemerch(id) {
  let item = getProductByID(merch, id);
  let index = cart.findIndex(function (item1) {
    return item1.id == id;
  });
  cart.splice(index, 1);
  count -= 1;
  document.getElementById("numb").innerText = count;
  let type = "cartd";
  let place = "cartcard";
  displaymerch(cart, type, place);
}

function filter() {
  let minv = document.getElementById("minp").value;
  let maxv = document.getElementById("maxp").value;
  let items = merch.filter(function (itemsl) {
    return itemsl.price >= minv && itemsl.price <= maxv;
  })
  displaymerch(items);
  document.getElementById("minp").value = "";
  document.getElementById("maxp").value = "";
}

function search() {
  let str = document.getElementById("serstr").value;
  console.log(str);
  let items = merch.filter(function (ele) {
    return ele.name.indexOf(str) != -1;
  });
  displaymerch(items);


}
displaymerch(merch);