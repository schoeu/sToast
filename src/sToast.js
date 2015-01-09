
/*
*   sToast({ele:"input",msg:"信息信息",time:2000});
*   @param msg必选，其他依需求
* */
function sToast(options){
    if(options){
        var ele = options.ele,
            msg = options.msg || "",
            sec = options.time || 2000;
    }

    var s_body = document.querySelector("body"),timer=null,
        h = window.innerHeight,w = window.innerWidth;

    var st = document.createElement("p");
    st.className = "s_toast";
    st.innerHTML = msg;
    s_body.appendChild(st);
    var th = st.offsetHeight,tw = st.offsetWidth;
    st.style.left = (w-tw)/2+"px";
    st.style.top = (h-th)/2-20+"px";

    //如果不是绑定元素触发
    if(ele){
        document.querySelector(ele).addEventListener("click",ani,false);
    }else{
        ani();
    }

    function ani(){
        st.style.webkitAnimation="stShows "+sec/1000+"s ease-in-out";
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            st.style.webkitAnimation="";
            s_body.removeChild(st);
        },sec);
    }

}