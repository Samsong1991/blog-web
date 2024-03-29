export function getCookie(cName: string) {
    if (document.cookie.length > 0) {
        let cStart = document.cookie.indexOf(cName + "=");
        if (cStart !== -1) {
            cStart = cStart + cName.length + 1;
            let cEnd = document.cookie.indexOf(";", cStart);
            if (cEnd === -1) cEnd = document.cookie.length;
            return unescape(document.cookie.substring(cStart, cEnd));
        }
    }
    return "";
}

export function timestampToTime(timestamp: Date | any, dayMinSecFlag: boolean) {    
    const date = new Date(timestamp);    
    const Y = date.getFullYear() + "-";    
    const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";    
    const D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";    
    const h = date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";    
    const m = date.getMinutes() < 10 ? "0" + date.getMinutes() + ":" : date.getMinutes() + ":";    
    const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();    
    if (!dayMinSecFlag) {
        return Y + M + D; 
    }    
    return Y + M + D + h + m + s;
}

// fn是我们需要包装的事件回调, delay是时间间隔的阈值
export function throttle(fn: Function, delay: number) {
    let last = 0,
        timer: any = null;
    return function (this: any) {
        let context = (this as any);
        let args = arguments;
        let now = +new Date();

        if (now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, delay);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

//根据 QueryString 参数名称获取值
export function getQueryStringByName(name: string) {
    let result = window.location.search.match(
        new RegExp("[?&]" + name + "=([^&]+)", "i")
    );
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

//获取页面顶部被卷起来的高度
export function getScrollTop() {
    return Math.max(
        //chrome
        document.body.scrollTop,
        //firefox/IE
        document.documentElement.scrollTop
    );
}

//获取页面文档的总高度
export function getDocumentHeight() {
    //现代浏览器（IE9+和其他浏览器）和IE8的document.body.scrollHeight和document.documentElement.scrollHeight都可以
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );
}

//页面浏览器视口的高度
export function getWindowHeight() {
    return document.compatMode === "CSS1Compat"
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
}
