
var listImage = document.getElementById("list-image");
var group = document.createElement("div");
group.classList = ["group-image"];

for (let i = 0; i < 10; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];
 
  group.appendChild(image);
}

listImage.appendChild(group);