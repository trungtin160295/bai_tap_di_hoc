


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