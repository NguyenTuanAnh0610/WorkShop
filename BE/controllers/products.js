const products= [
    {
      "id": 1,
      "name": "Điện thoại iPhone 14 Pro",
      "price": 29990000,
      "in_stock":true,
      "description": "iPhone 14 Pro với chip A16 Bionic, màn hình OLED và hệ thống camera cải tiến.",
      "image": "https://example.com/images/iphone14pro.jpg"
    },
    {
      "id": 2,
      "name": "Laptop Dell XPS 13",
      "price": 34990000,
      "in_stock":true,
      "description": "Laptop Dell XPS 13 với màn hình InfinityEdge, hiệu năng cao và thiết kế mỏng nhẹ.",
      "image": "https://example.com/images/dellxps13.jpg"
    },
    {
      "id": 3,
      "name": "Smart TV Samsung 55 inch",
      "price": 15990000,
      "in_stock":false,
      "description": "Smart TV Samsung 55 inch 4K UHD với công nghệ HDR và hệ điều hành Tizen.",
      "image": "https://example.com/images/samsungtv.jpg"
    },
    {
      "id": 4,
      "name": "Máy giặt LG Inverter 8kg",
      "price": 7990000,
      "in_stock":true,
      "description": "Máy giặt LG Inverter tiết kiệm điện, khối lượng giặt 8kg, công nghệ giặt hơi nước.",
      "image": "https://example.com/images/lgwashingmachine.jpg"
    },
    {
      "id": 5,
      "name": "Điều hòa Daikin 1.5 HP",
      "price": 11990000,
      "in_stock":false,
      "description": "Điều hòa Daikin 1.5 HP, làm lạnh nhanh và tiết kiệm điện với công nghệ Inverter.",
      "image": "https://example.com/images/daikinac.jpg"
    },
    {
      "id": 6,
      "name": "Loa Bluetooth JBL Flip 5",
      "price": 2490000,
      "in_stock":true,
      "description": "Loa Bluetooth JBL Flip 5 với âm thanh mạnh mẽ, chống nước IPX7, pin sử dụng 12 giờ.",
      "image": "https://example.com/images/jblflip5.jpg"
    },
    {
      "id": 7,
      "name": "Bàn phím cơ Razer BlackWidow",
      "price": 2990000,
      "in_stock":true,
      "description": "Bàn phím cơ Razer BlackWidow với switch cơ học Razer Green, LED RGB và độ bền cao.",
      "image": "https://example.com/images/razerblackwidow.jpg"
    },
    {
      "id": 8,
      "name": "Máy ảnh Canon EOS 90D",
      "price": 35990000,
      "in_stock":false,
      "description": "Máy ảnh Canon EOS 90D với cảm biến 32.5MP, quay phim 4K và hệ thống lấy nét tự động.",
      "image": "https://example.com/images/canoneos90d.jpg"
    },
    {
      "id": 9,
      "name": "Tai nghe Sony WH-1000XM4",
      "price": 6990000,
      "in_stock":true,
      "description": "Tai nghe Sony WH-1000XM4 chống ồn chủ động, pin lên đến 30 giờ, kết nối Bluetooth 5.0.",
      "image": "https://example.com/images/sonywh1000xm4.jpg"
    },
    {
      "id": 10,
      "name": "Máy hút bụi Xiaomi Mi Vacuum",
      "price": 4990000,
      "in_stock":true,
      "description": "Máy hút bụi Xiaomi Mi Vacuum với công nghệ lực hút mạnh mẽ, thiết kế không dây tiện dụng.",
      "image": "https://example.com/images/mivacuum.jpg"
    }
  ];

 export const getProduct =(req, res) =>{
           res.json(products);
 }