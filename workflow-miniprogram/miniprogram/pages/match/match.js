Page({
  data: {
    list: [
      {
        id: '1',
        name: '2019年3月',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader']
      },
      {
        id: '2',
        name: '2019年5月',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      },
      {
        id: '3',
        name: '2019年6月',
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      },
      {
        id: '4',
        name: '2019年9月',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: '5',
        name: '2019年10月',
        open: false,
        pages: ['searchbar']
      },
      {
        id: '6',
        name: '2019年11月',
        open: false,
        pages: ['searchbar']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});