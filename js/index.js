window.addEventListener("load",function(){
    const swiper = new Swiper('.station1', {
        // Optional parameters
        direction: 'horizontal',
        autoHeight:true,
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable:true,
        },
        slidesPerView:1,
        autoplay:{
            delay: 4000,
          },
        speed:1000,
        scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      
    },

      });
      const swiper2 = new Swiper('.station2', {
        // Optional parameters
        direction: 'horizontal',
        autoHeight:true,
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        slidesPerView:1,
        autoplay:{
            delay: 4000,
          },
        speed:700,
        scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
      });

    const station3 = new Swiper(".station3",{
      loop: true,
      autoplay:true,
      effect: `fade`,
      
    })
    const station4 = new Swiper(".station4")

    station3.on(`slideChange`, function(){
      console.log(station3.realIndex);
      station4.slideToLoop(station3.realIndex)
    })
})