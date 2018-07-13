function Hover() {
    this.ul = $(".content ul");
    this.mian = $(".mian")
    
    this.init();
}
$.extend(Hover.prototype,{
    init:function(){
        this.event()
    },
    event:function(){
        var _this= this;
        this.ul.on("mouseover","li",function(){
            $(this).css("transform","translate3d(0px,-2px,0px)")
            $(this).css("box-shadow","0 10px 15px rgba(0,0,0,0.07)")
            $(this).find(".mian").css("display","block")
            $(this).find(".mian").css("transform","translate3d(0px,-110px,0px)")
         
      
           
            
        })
        this.ul.on("mouseout","li",function(){
            $(this).css("transform","")
            $(this).css("box-shadow","")
            $(this).find(".mian").css("display","none")
            $(this).find(".mian").css("bottom","")
        })
       
    }
})
new Hover();