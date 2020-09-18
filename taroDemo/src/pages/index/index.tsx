import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.styl'

const app = Taro.getApp();

const AnalysysAgent = app._def.globalData.AnalysysAgent;

console.log(3333, AnalysysAgent)


export default class Index extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() {
        console.log(111)
    }

    componentDidMount() {
        console.log(222)
    }

    componentWillUnmount() {
        console.log(33333)
    }

    componentDidShow() {
        console.log(44444)
        AnalysysAgent.appStart({});

    }

    componentDidHide() { }
    getPresetProperties() {
        // console.log(1111, AnalysysAgent)
        console.log(55555)
        AnalysysAgent.appStart({});
        AnalysysAgent.pageView();
        AnalysysAgent.registerSuperProperty("wewe", "dedede")
    }

    onShareAppMessage = () => {
        // console.log("来到这里")
        let shareObj = {
            'path': "pages/index/index?id=33333",
            'title': "框架版分享标识"
        }
        let anshare = AnalysysAgent.share(shareObj);
        return anshare;
    }

    pageView = () => {
        let pageInfo = {
            "commodityName": "iPhone",
            "commodityPrice": 8000
        }
        AnalysysAgent.pageView("商品页", pageInfo)
    }
    alias = () => {
        AnalysysAgent.alias("sanban", "yiban")
    }
    identify = () => {
        AnalysysAgent.identify("userName")
    }
    reset = () => {
        AnalysysAgent.reset()
    }
    registerSuperProperty = () => {
        AnalysysAgent.registerSuperProperty("age", 20)
    }
    registerSuperProperties = () => {
        let superProperty = {
            "age": 20,
            "member": "VIP"
        }
        AnalysysAgent.registerSuperProperties(superProperty)
    }
    unRegisterSuperProperty = () => {
        AnalysysAgent.unRegisterSuperProperty("age")
    }
    clearSuperProperties = () => {
        AnalysysAgent.clearSuperProperties()
    }
    getSuperProperty = () => {
        AnalysysAgent.getSuperProperty("member")
    }
    getSuperProperties = () => {
        AnalysysAgent.getSuperProperties()
    }
    track = () => {
        let eventInfo = {
            "money": 2000
        }
        console.log("track")
        AnalysysAgent.track("payment", eventInfo)
    }
    profileSet = () => {
        let profiles = {
            "Email": "yonghu@163.com",
            "WeChatID": "微信号"
        }
        AnalysysAgent.profileSet(profiles)
    }
    profileSetOnce = () => {
        let setOnceProfiles = {
            "activationTime": "1521594686781",
            "loginTime": "1521594726781"
        }
        AnalysysAgent.profileSetOnce(setOnceProfiles)
    }
    profileIncrement = () => {
        let profies = {
            "age": 20,
            "integral": 200
        }
        AnalysysAgent.profileIncrement(profies)
    }
    profileAppend = () => {
        AnalysysAgent.profileAppend("Movies", "霸王别姬")
    }
    profileAppendObject = () => {
        let propertyObject = { 'Movies': '霸王别姬', 'Music': ['一无所有', '花房姑娘'] }
        AnalysysAgent.profileAppend(propertyObject)
    }
    profileAppendArray = () => {
        let properties = ["海上钢琴师", "指环王"]
        AnalysysAgent.profileAppend("Movies", properties)
    }
    profileUnset = () => {
        AnalysysAgent.profileUnset("Movies")
    }
    profileDelete = () => {
        AnalysysAgent.profileDelete()
    }
    appProperty() {
        let obj = {
            openId: 200000,
            age: 2000
        };
        AnalysysAgent.appProperty(obj);
    }
    getDistinctId() {
        AnalysysAgent.getDistinctId();
        console.log(AnalysysAgent.getDistinctId())
    }
    nextPage() {
        console.log("跳转")
        Taro.navigateTo({
            url: 'pages/logs/logs'
        })
    }
    render() {
        return (
            <View className='index'>
                <Text className="button head">超级属性系列</Text>
                <Text onClick={this.registerSuperProperty} className="button"> registerSuperProperty </Text>
                <Text onClick={this.registerSuperProperties} className="button">registerSuperProperties</Text>
                <Text onClick={this.unRegisterSuperProperty} className="button">unRegisterSuperProperty</Text>
                <Text onClick={this.registerSuperProperties} className="button">getSuperProperty</Text>
                <Text onClick={this.getSuperProperty} className="button">getSuperProperties</Text>
                <Text onClick={this.clearSuperProperties} className="button">clearSuperProperties</Text>
                <Text className="button head">profile 系列</Text>
                <Text onClick={this.profileSet} className="button">profileSet</Text>
                <Text onClick={this.profileSetOnce} className="button">profileSetOnce</Text>
                <Text onClick={this.profileIncrement} className="button">profileIncrement</Text>
                <Text onClick={this.profileAppend} className="button">profileAppend 单个属性</Text>
                <Text onClick={this.profileAppendArray} className="button">profileAppend 多个属性集合</Text>
                <Text onClick={this.profileAppendObject} className="button">profileAppend 列表类型属性</Text>
                <Text onClick={this.profileUnset} className="button">profileUnset</Text>
                <Text onClick={this.profileDelete} className="button">profileDelete</Text>
                <Text className="button head">其他</Text>
                <Text onClick={this.getPresetProperties} className="button">getPresetProperties</Text>
                <Text onClick={this.pageView} className="button">pageView</Text>
                <Text onClick={this.track} className="button">track</Text>
                <Text onClick={this.identify} className="button">identify</Text>
                <Text onClick={this.reset} className="button">reset</Text>
                <Text onClick={this.appProperty} className="button">appProperty</Text>
                <Text onClick={this.registerSuperProperties} className="button">share</Text>
                <Text onClick={this.getDistinctId} className="button">getDistinctId</Text>
                <Text onClick={this.nextPage} className="button">下一页</Text>
            </View>
        )
    }
}
