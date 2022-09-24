import Text from "./Text"


export default function Footer() {  
    
     const footer= [
        {
          id: 1,
          name: "Khám phá COOLMATE",
          children: [
            "Áo Polo",
            "Áo T-shirt",
            "Áo Sơ mi",
            "Quần",
            "Quần Lót",
            "Tất (Vớ)",
            "Mũ (Nón)",
            "Phụ Kiện Khác"
          ]
        },
        {
          id: 2,
          name: "Dịch vụ khách hàng",
          children: [
            "Hỏi đáp - FAQs",
            "Chính sách đổi trả 60 ngày",
            "Liên hệ",
            "Thành viên Coolclub",
            "Khách hàng hài lòng 100%",
            "Chính sách khuyến mãi",
            "Chính sách giao hàng"
          ]
        },
        {
          id: 3,
          name: "Kiến thức mặc đẹp",
          children: ["Hướng dẫn chọn size", "Blog", "Group mặc đẹp sống chất"]
        },
        {
          id: 4,
          name: "Tài liệu - Tuyển dụng",
          children: ["Tuyển dụng", "Đăng ký bản quyền"]
        },
        {
          id: 5,
          name: "Về COOLMATE",
          children: [
            "Câu chuyện về Coolmate",
            "Nhà máy",
            "CoolClub",
            "Care & Share"
          ]
        },
        {
          id: 6,
          name: "Địa chỉ liên hệ",
          children: [
            "HUB Hà Nội: Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, TP. Hà Nội",
            "HUB Tp HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh"
          ]
        }
      ]
      return(
        
        <footer >
            <div className="footer-menu">
                {footer.map((item) => {
                    return(
                        <div className="footer-menu-item" key={item.id}>  
                            <Text className="footer-title">{item.name}</Text>
                            <ul>
                                {item.children.map((content) =>{
                                    return(
                                    <li key={content.toString()}>                                                                
                                        <a href="#">{content}</a>
                                     </li>)
                                    
                                    
                                } ) }
                            </ul>
                        </div>
                    )    })}
                
                <div className="footer-right">
                    <Text className="footer-title-right">COOLMATE lắng nghe bạn!</Text>
                    <Text className="footer-content-right">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý
                         kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</Text>
                    
                    <a href="#" className="sent-idea">Gửi ý kiến</a>
                    <div className="hotline">
                        <img src="./src/img/icon-hotline.svg" alt="" />
                        <div>
                            <Text> Hotline</Text>
                            <Text> 1900.272737 (028.7777.2737)</Text>
                        </div>                        
                    </div>
                    <div className="hotline">
                        <img src="./src/img/icon-email.svg" alt="" />
                        <div>
                            <Text> Email</Text>
                            <Text> Cool@coolmate.me</Text>
                        </div>                        
                    </div>
                    <div className="social">
                        <a href=""><img src="./src/img/icon-facebook.svg" alt="" /></a>
                        <a href=""><img src="./src/img/icon-instar.svg" alt="" /></a>
                        <a href=""><img src="./src/img/icon-youtube.svg" alt="" /></a>
                    
                    
                    
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="company">
                    <h6>@ CÔNG TY TNHH FASTECH ASIA</h6>
                     <span>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</span>

               </div>
                <div className="footer-bottom-right">
                    <a href="#"><img src="./src/img/handle_cert.png" alt="" /></a>
                     <a href="#"><img src="./src/img/dmca_protected_15_120.png" alt="" /></a>
                    <a href="#"><img src="./src/img/coolmate-info.png" alt="" /></a>
                     <a href="#"><img src="./src/img/logoSaleNoti.png" alt="" /></a>

                
               </div>
             </div>
            
        </footer>


      )    
    }
    
