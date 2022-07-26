var images =[
  image1 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-bien-thien-nhien-dep-nhat-the-gioi_041753368.jpg",
  image2 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-trong-tu-nhien_041753399.jpg",
  image3 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg",
  image4 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-phong-canh-thien-nhien-dep-nhat_041753602.jpg",
  image5 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-bien-dep-nhat-the-gioi_041753649.jpg",
  image6 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-cuc-dep_041753727.jpg",
  image7 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-dep-hung-vi-nhat_041753806.jpg",
  image8 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-dep-va-la-nhat-the-gioi_041753977.jpg",
  image9 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-nui-dep-nhat-the-gioi_041754587.jpg", 
  image1 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-bien-thien-nhien-dep-nhat-the-gioi_041753368.jpg",
  image2 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-trong-tu-nhien_041753399.jpg",
  image3 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg",
  image4 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-phong-canh-thien-nhien-dep-nhat_041753602.jpg",
  image5 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-bien-dep-nhat-the-gioi_041753649.jpg",
  image6 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-cuc-dep_041753727.jpg",
  image7 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-dep-hung-vi-nhat_041753806.jpg",
  image8 = "https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-dep-va-la-nhat-the-gioi_041753977.jpg",
  image9 = "img./1.jpg", 
];


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

images.forEach(function(anh,name1)  {
  var friend = document.createElement("div");
    friend.classList = ["friend1"];
  var avatar = document.createElement("img");
  avatar.classList = ["avatar2"]
    avatar.src=anh;
    friend.appendChild(avatar);
  let name = document.createElement("span");
  name.innerHTML="bạn số " + name1;
  friend.appendChild(name);
  group.appendChild(friend);
});



listImage.appendChild(group);
containerFriends.appendChild(listImage);