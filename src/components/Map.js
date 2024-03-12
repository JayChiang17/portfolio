import React from "react";

const MapComponent = () => {
  return (
    <iframe
      title="UCSC" // 添加一个独特的标题
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50996.86012183197!2d-122.1006529750716!3d36.97868197076049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e41a2ff8cbf4f%3A0x3a8e3b7c928320d5!2z6IGW5aGU5YWL6a2v6Iyy5Yqg5Yip56aP5bC85Lqe5aSn5a24!5e0!3m2!1szh-TW!2sus!4v1698173136121!5m2!1szh-TW!2sus"
      width="100%"
      height="450"
      style={{ border: "0" }} // 将样式改为对象格式
      allowFullScreen="" // React 中使用驼峰命名法
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" // React 中使用驼峰命名法
    ></iframe>
  );
};

export default MapComponent;
