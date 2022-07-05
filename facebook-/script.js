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

var containerFriends =document.getElementById("container-friends");

var containerFriendsHeader =document.createElement("div");
containerFriends.appendChild(containerFriendsHeader);
containerFriendsHeader.classList =["container-friends-header"];
var friends = document.createElement("a");
  friends.classList = "friends";
  friends.innerHTML =("Bạn bè");


