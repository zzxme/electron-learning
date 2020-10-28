const { Menu, BrowserWindow } = require('electron')
var template = [
  {
    label: 'xx',
    submenu: [
      { label: 'xx-xx', },
      { label: 'xx+xx' }
    ]
  },
  {
    label: '阿里巴巴',
    submenu: [
      {
        label: '支付宝',
        click: () => {
          var win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true
            }
          })
          win.loadFile('remote.html')
          win.on('closed', () => {
            mainWindow = null
          })
        }
      },
      { label: '余额宝' }
    ]
  },
  {
    label: '腾讯企鹅',
    submenu: [
      { label: '微信' },
      { label: '秋秋' }
    ]
  }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)
