// tạo danh sách ảnh 

var listImage = document.getElementById("list-image");
var group = document.createElement("div");
group.classList = ["group-image"];

for (let i = 0; i < 9; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];
 
  group.appendChild(image);
}

listImage.appendChild(group);


// tạo danh sách avatar

var listAvatar = document.getElementById("lits-avatar");
var avatar1 = document.createElement("div");
avatar1.classList = ["group-avatar"];

for (let x = 10; x < 20; x++) {
  let avatar2 = document.createElement("img");
  avatar2.src = "https://picsum.photos/200/300?random=" + x;
  avatar2.classList = ["avatar list-avatar-friends"];
    avatar1.appendChild(avatar2);
}

listAvatar.appendChild(avatar1);

// tạo danh sách bạn bè

var containerFriends = document.getElementById("container-friend");
  containerFriends.classList =("container-friend");
  
var containerFriendsHeader = document.createElement("div");
  containerFriendsHeader.classList=("container-friends-header");
  containerFriends.appendChild(containerFriendsHeader);
var friend =document.createElement("a");
  friend.href = "#";
  friend.innerHTML="Bạn bè";
  containerFriendsHeader.appendChild(friend);
var seeAll =document.createElement("button");
  seeAll.innerHTML = "Xem tất cả bạn bè";
  containerFriendsHeader.appendChild(seeAll);
var amountFriends = document.createElement("span");
  amountFriends.innerHTML = "800 bạn bè";
  containerFriends.appendChild(amountFriends);
  
var listImage = document.createElement("div");
var group = document.createElement("div");
group.classList = ["group-friends"];

for (let a = 0; a < 9; a++) {
  let friend = document.createElement("div");
  friend.classList = ["friend1"];
  let avatar = document.createElement("img");
  avatar.classList = ["avatar2"]
    avatar.src="https://picsum.photos/200/300?random=" + a;
   friend.appendChild(avatar);

  let name = document.createElement("span");
  name.innerHTML="bạn số " + a;
  friend.appendChild(name)
  group.appendChild(friend);
}
  

listImage.appendChild(group);
containerFriends.appendChild(listImage);






