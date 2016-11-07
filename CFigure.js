/*CFigure BY JORDAN 2016.07.29.Author Home:xusenlin.com*/
var CFigure = {
    option: {"id": "", "img": {}, "with": 1170, "height": 510, "time": 2000}, config: function (op) {
        for (var k in this.option) {
            if (op[k])this.option[k] = op[k];
        }
        this.init();
    },
    init: function () {
        var container = document.getElementById(this.option.id);
        var html = '';
        var imgData = this.option.img;
        var imgWidth = this.option.with;
        var imgLenght = Object.keys(imgData).length;
        var userTime = this.option.time;
        html += '<div class="cfigure" style="width: ' + imgWidth + 'px;height: ' + this.option.height + 'px">' + '<ul id=' + this.option.id + '-ul' + ' class="cfigure-photo" style="width: ' + imgWidth * imgLenght + 'px;height: ' + this.option.height + 'px">';
        for (var i in imgData) {
            html += '<li  style="width: ' + imgWidth + 'px;height: ' + this.option.height + 'px" class="cfigure-photo-li"><a target="_blank" href="';
            html += imgData[i][1];
            html += '" class="cfigure-photo-a"';
            html += 'title="' + i + '"';
            html += '><img src="';
            html += imgData[i][0];
            html += '" alt="';
            html += i;
            html += '" class="cfigure-img"></a></li>';
        }
        html += '</ul>';
        html += '<ul class="cfigure-point" id="' + this.option.id + '-point' + '">';
        for (var i = 0; i < imgLenght; i++) {
            html += '<li class="cfigure-point-li"></li>';
        }
        ;
        html += '</ul></div>';
        container.innerHTML = html;
        var imgBox = document.getElementById(this.option.id + '-ul');
        var pointGroup = document.getElementById(this.option.id + '-point');
        var point = pointGroup.querySelectorAll('.cfigure-point-li');
        point[0].className = 'cfigure-point-li active';
        var varImg = 1;
        var interval = setInterval(function () {
            if (varImg == imgLenght) {
                varImg = 0;
            }
            ;
            for (var i = 0; i < point.length; i++) {
                point[i].className = 'cfigure-point-li';
            }
            ;
            point[varImg].className = 'cfigure-point-li active';
            imgBox.style.left = -(imgWidth * varImg) + 'px';
            varImg++;
        }, userTime);
        pointGroup.onmousemove = function () {
            clearInterval(interval);
        };
        pointGroup.onmouseout = function () {
            interval = setInterval(function () {
                if (varImg == imgLenght) {
                    varImg = 0;
                }
                ;
                for (var i = 0; i < point.length; i++) {
                    point[i].className = 'cfigure-point-li';
                }
                ;
                point[varImg].className = 'cfigure-point-li active';
                imgBox.style.left = -(imgWidth * varImg) + 'px';
                varImg++;
            }, userTime);
        };
        for (var i = 0; i < point.length; i++) {
            (function () {
                var p = i;
                point[i].onclick = function () {
                    varImg = p;
                    for (var i = 0; i < point.length; i++) {
                        point[i].className = 'cfigure-point-li';
                    }
                    ;
                    point[varImg].className = 'cfigure-point-li active';
                    imgBox.style.left = -(imgWidth * varImg) + 'px';
                    varImg++;
                };
            })();
        }
        ;
    }
};