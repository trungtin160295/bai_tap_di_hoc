var navbar = document.getElementById("navbar");
    navbar.className=("navbar");
var navbarLeft = document.createElement("div");
    navbarLeft.className=("navbar-left");
    navbar.appendChild(navbarLeft)
var listButton = ["Bài viết","Giới thiệu","Bạn bè","Ảnh","video","Check in","Xem thêm"];
    listButton.forEach(function(nameButton,buttonId){
        let button = document.createElement("button");
            button.innerHTML=nameButton;
            button.id="buttom"+buttonId;
        navbarLeft.appendChild(button)
    });



var navbarRight = document.createElement("button");
    navbar.appendChild(navbarRight);
    navbarRight.innerHTML="Chỉnh sửa";
    
