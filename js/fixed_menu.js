window.addEventListener("load",function(){

    let fixed_menu = this.document.querySelector(".fixed_menu")
    let last_scroll_top = 0
    let hide_time_out = null
    
    this.window.addEventListener("scroll",function(){
        //스크롤 했을 떄 실행되는 동작


        let scroll_top = this.document.documentElement.scrollTop
        //위에서 스크롤바가 얼만큼 내려왓는지 계산하여 변수에 저장
        if(scroll_top < last_scroll_top){
            //마우스 휠을 위로 올렸을 때
            fixed_menu.classList.add("on")

            // 이미 존재하는 예약 타임이 있다면 제거
            if(hide_time_out){
                this.clearTimeout(hide_time_out)
            }
            hide_time_out = this.setTimeout(function(){
                //2초 뒤에는 고정 메뉴가 사라진다.
                fixed_menu.classList.remove("on")
            },2000)
        }else{
            // 마우스 휠을 아래로 내렸을 때
            fixed_menu.classList.remove("on")
        }
        last_scroll_top = scroll_top
    })
    
    //fixed하단 메뉴에 마우스를 올리면 기존에 설정되어 있었던 2초 뒤에 사라지는 동작이 취소됨
    fixed_menu.addEventListener("mouseover",function(){
        clearTimeout(hide_time_out)
    })

    fixed_menu.addEventListener("mouseout",()=>{
        hide_time_out = this.setTimeout(function(){
            //2초 뒤에는 고정 메뉴가 사라진다.
            fixed_menu.classList.remove("on")
        },2000)
    })


    let btn_top = this.document.querySelector("#btn_top")
    btn_top.addEventListener("click",function(e){
        e.preventDefault()
        window.scrollTo({top:0,behavior:"smooth"})
    })
})