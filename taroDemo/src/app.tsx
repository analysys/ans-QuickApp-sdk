import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.styl'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import AnalysysAgent from "./sdk/AnalysysAgent_QuickApp_SDK.custom.es6.min.js"
// import AnalysysEncryption from './sdk/AnalysysAgent_encryption.es6.min.js';
let AnalysysEncryption = require('./sdk/AnalysysAgent_encryption.min.js')
console.log(55555, AnalysysEncryption)

AnalysysAgent.encrypt = AnalysysEncryption;   //加密模块的方法赋值给AnalysysAgent，方便调用。
AnalysysAgent.debugMode = 2;
// AnalysysAgent.uploadURL = "http://192.168.220.105:8089"
AnalysysAgent.appkey = 'heatmaptest0916'
AnalysysAgent.autoProfile = false
AnalysysAgent.encryptType = 0; //使用加密文件的时候 放开赋值。（直接放开不会报错）


AnalysysAgent.uploadURL = 'https://arkpaastest.analysys.cn:4089'   // 明文
// AnalysysAgent.uploadURL = 'https://arksdk.analysys.cn:4089'    //密文

// AnalysysAgent.uploadURL = 'https://arksdktest.analysys.cn:4069'    //密文

class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        pages: [
            'pages/index/index',
            'pages/logs/logs'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }

    componentDidMount() { }

    componentDidShow() {
        console.log("show")
        AnalysysAgent.appStart({})
    }

    componentDidHide() { }

    componentDidCatchError() { }
    globalData = {
        "AnalysysAgent": AnalysysAgent,
        'system': 'ios'
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Index />
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
