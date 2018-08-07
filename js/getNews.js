axios.get('http://v.juhe.cn/toutiao/index?type=top&key=2eddebe0bfeb8056ed0673821d901908').then(res => {
        var data = res.data.result.data
        if (data.length > 0) {
            var str = ''
            data.forEach(v => {
                if (v.thumbnail_pic_s02) {
                    str +=
                        `<li class="list-item">
                            <a href="${v.url}"><h5>${v.title}</h5></a>
                            <div class="img-wrapper">
                                <img src="${v.thumbnail_pic_s}" alt="图1">
                                <img src="${v.thumbnail_pic_s02}" alt="图2">
                            </div>
                        </li>`
                } else if (v.thumbnail_pic_s03) {
                    str +=
                        `<li class="list-item">
                            <a href="${v.url}"><h5>${v.title}</h5></a>
                            <div class="img-wrapper">
                                <img src="${v.thumbnail_pic_s}" alt="图1">
                                <img src="${v.thumbnail_pic_s02}" alt="图2">
                                <img src="${v.thumbnail_pic_s03}" alt="图3">
                            </div>
                        </li>`
                } else {
                    str +=
                        `<li class="list-item">
                            <a href="${v.url}"><h5>${v.title}</h5></a>
                            <div class="img-wrapper">
                                <img src="${v.thumbnail_pic_s}" alt="图1">
                            </div>
                        </li>`
                }
            })
            document.querySelector('.list').innerHTML = str
        } else {
            document.querySelector('.list').innerHTML = `<li class="empty">没有数据哟o(╥﹏╥)o</li>`
        }
    })
    .catch(err => {
        document.querySelector('.list').innerHTML = `<li class="empty">没有数据哟o(╥﹏╥)o</li>`
        throw new Error(err)
    })