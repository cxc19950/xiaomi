function Table() {
    this.list = document.querySelector(".list")
    this.del = document.querySelectorAll(".del")
    this.que = document.querySelector(".que")
    this.qu = document.querySelector(".qu")
    this.fitter = document.querySelector("#fitter")
    this.box = document.querySelector("#box")
    this.p = document.querySelector(".p")
    this.init()
}
Table.prototype = {
    init: function () {
        this.event()
        this.ded();
        this.tuo();
    },
    event: function () {
        var _this = this
        var str = ""
        ajax("post", "json/shop.json", {}, function (data) {
            var data = JSON.parse(data)

            for (var i = 0; i < data.length; i++) {
                str += ` <tr>
              
                <td>${data[i].name}</td>
                <td>${data[i].prcie}</td>
                <td>${(data[i].prcie)}</td>
                <td><input type="text" value="1" class="input">
                        <button class="add">+</button>
                        <button class="sub">-</button></td>
                <td><button class="del">删除</button><td>
            </tr>`

            }
            _this.list.innerHTML += str;
        })


    },
    ded: function () {

        var _this = this;
        this.list.onclick = function (e) {
            var e = e || event
            var target = e.target || e.srcElement

            if (target.className == "del" && target.tagName == "BUTTON") {
                _this.box.style.display = "block"
                _this.fitter.style.display = "block"
                _this.que.onclick = function () {
                    target.parentNode.parentNode.remove();
                    _this.box.style.display = "none"
                    _this.fitter.style.display = "none"
                }
                _this.qu.onclick = function () {
                    _this.box.style.display = "none"
                    _this.fitter.style.display = "none"
                }
            }


        }
    },
    tuo:function(){
        var _this= this;
      
        this.box.onmousedown= function(e){
            var e = e||event
            var disX = e.offsetX;
	        var disY = e.offsetY;
            _this.p.onmousemove =function(e){
                _this.box.style.left = e.clientX-disX+'px';
                _this.box.style.top = e.clientY-disY+'px';
               
            }
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }

}
new Table()