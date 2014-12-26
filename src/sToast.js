
/*
*   sToast("input","信息",2000);
* */
function sToast(ele,msg,sec){
    var s_body = document.querySelector("body"),timer=null,
        h = window.innerHeight,w = window.innerWidth;

    var st = document.createElement("p");
    st.className = "s_toast";
    st.innerHTML = msg;
    s_body.appendChild(st);
    var th = st.offsetHeight,tw = st.offsetWidth;
    st.style.left = (w-tw)/2+"px";
    st.style.top = (h-th)/2-20+"px";
    document.querySelector(ele).addEventListener("click",function(){
        st.style.webkitAnimation="stShows "+sec/1000+"s ease-in-out";
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            st.style.webkitAnimation="";
        },sec);
    },false);
}