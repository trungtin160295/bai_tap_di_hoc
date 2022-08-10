// tạo danh sách ảnh 
var imageOld = [
  'img/anh-em.jpg',
  'img/nha_tho_o_nam_dinh_5.jpg',
  'img/Bao-bien-dong.jpg',
  'img/ca-voi-san-moi.jpg',
  'img/cau-rong-Da-Nang.jfif',
  'img/cau-vang.jfif',
  'img/nui-rung.jfif',
  'img/thac-nuoc.jfif',
  'img/quang-hai.jpeg',
]
var listImage = document.getElementById("list-image");
var group = document.createElement("div");
group.classList = ["group-image"];

imageOld.forEach((images) => {
  let image = document.createElement("img");
  image.src = images;
  image.classList = ["image-old"];
 
  group.appendChild(image);
});

listImage.appendChild(group);


// tạo danh sách avatar


var listFriend ={
  friend1:{
      name:'Ngọc Sơn',
      avatar:'./img/list-avatar-friend/Son.jpg',        
  },
  friend2:{
      name:'Nguyễn Hướng',
      avatar:'./img/list-avatar-friend/huong.jpg',        
  },
   friend3 : {
      name : 'Đinh Trường',
      avatar : './img/list-avatar-friend/truong.jpg',        
  },
   friend4 : {
      name : 'Đinh Quyết',
      avatar :'./img/list-avatar-friend/quyet.jpg',        
  }, 
  friend5 : {
      name :'Đinh Hoàng',
      avatar :'./img/list-avatar-friend/hoang.jpg',        
  },
  friend6:{
      name :'Cao Vương',
      avatar :'./img/list-avatar-friend/ca-heo-vuong.jpg',        
  },
  friend7 : {
      name :'Đinh Long',
      avatar :'./img/list-avatar-friend/long.jpg',        
  },
  friend8: {
      name :'Nông dân',
      avatar :'./img/list-avatar-friend/nong-dan.jpg',        
  },
  friend9:{
      name:'Dân chơi',
      avatar:'./img/list-avatar-friend/ngoai.jpg',        
  },

};

// tạo danh sách avatar
var listAvatar = document.getElementById("lits-avatar");
var avatar1 = document.createElement("div");
avatar1.classList = ["group-avatar"];

var list = Object.values(listFriend);
list.forEach ( function (avatarFriend) {
  
  let avatar2 = document.createElement("img");
avatar2.src = avatarFriend.avatar;
avatar2.classList = ["avatar list-avatar-friends"];
  avatar1.appendChild(avatar2);
}
)
listAvatar.appendChild(avatar1);

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

list.forEach ( function (friends) {
    let friend = document.createElement("div");
  friend.classList = ["friend1"];
  let avatar = document.createElement("img");
  avatar.classList = ["avatar2"];
    avatar.src = friends.avatar;
   friend.appendChild(avatar);

  let name = document.createElement("a");
  name.href= "#";
  name.innerHTML = friends.name;
  friend.appendChild(name);
  group.appendChild(friend);
});

  

listImage.appendChild(group);
containerFriends.appendChild(listImage);


// function clickMenu(id){
  
//   // document.getElementById(id).classList.toggle("show")
//   console.log(document.getElementById(id).classList);
// }
// function clickMenu1() {    
                 
//   console.log(aaaaaaaaaaaaaa);
// }

// window.onclick = function(event) {
//   if (!event.target.matches('button')) {
//     var buttons = document.getElementsByTagName("button");
    
//     for (let i = 0; i < buttons.length; i++) {
      
//       if (buttons[i].classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

