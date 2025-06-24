'use client';

import Swal from 'sweetalert2'


  const openPopup = () => {
    Swal.fire({
      title: "Гейминг ближе, чем кажется!",
      text: "Доставляем бесплатно по Москве и Московской области. В остальные регионы доставка осуществляется транспортными компаниями СДЭК, Почтой России и Boxberry, стоимость зависит от расстояния.",
      width: 500,
        color: "#716add",
      imageUrl: "/gif/delivery.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "A tall image",
      backdrop: `
    rgba(0,0,123,0.4)
  `
    });
};

export default openPopup;