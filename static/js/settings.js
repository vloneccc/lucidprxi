var titleTab = document.getElementById("titleTab");

var iconTab = document.getElementById("iconTab");


function aboutBlankCloaking() {
    if (document.getElementById("aboutBlankCloaking").checked) {

        localStorage.setItem('aboutBlankCloaking', 'true');

    } else {

        localStorage.setItem('aboutBlankCloaking', 'false');
    }

}


function proxySelect() {
    if (document.getElementById("uv").checked) {

        localStorage.setItem('proxySelect', 'ultraviolet');

    } else {

        localStorage.setItem('proxySelect', 'rhodium');
    }

}

function proxySelect2() {
    if (document.getElementById("rhodium").checked) {

        localStorage.setItem('proxySelect', 'rhodium');

    } else {

        localStorage.setItem('proxySelect', 'ultraviolet');
    }

}

(function hello() {
    if (localStorage.getItem('aboutBlankCloaking') === 'true') {

        document.getElementById("aboutBlankCloaking").checked = true;


    } else {
        document.getElementById("aboutBlankCloaking").checked = false;
    }

    if (localStorage.getItem('proxySelect') === 'ultraviolet') {

        document.getElementById("uv").checked = true;
        document.getElementById('rhodium').checked = false;

    } else if (localStorage.getItem('proxySelect') === 'rhodium') {


        document.getElementById('rhodium').checked = true;
        document.getElementById('uv').checked = false;

    }

    window.setInterval(hello, 100);


})();


if ((localStorage.getItem('tabTitle')) != null) {

    document.title = localStorage.getItem('tabTitle');
}

if (localStorage.getItem('tabIcon') != null) {

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = localStorage.getItem('tabIcon');

    document.getElementsByTagName('head')[0].appendChild(link);


}

document.getElementById("tabTitle").addEventListener("click", function() {

    localStorage.setItem('tabTitle', titleTab.value.trim());

    document.title = titleTab.value.trim();
})

document.getElementById("tabIcon").addEventListener("click", function() {

    localStorage.setItem('tabIcon', iconTab.value.trim());

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconTab.value.trim();

    document.getElementsByTagName('head')[0].appendChild(link);

})