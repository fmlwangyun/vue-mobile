export const getUrlKey = (name:string) => {//获取url 参数
    // alert("location.href code = "+"====="+location.href);
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}