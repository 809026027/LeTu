LeTu项目基于阿里移动端开源框架Weex，使用weexpack工具打包，整合了Weex官方demo项目 Hacker News。

## 编译项目文件

安装依赖：

```
npm install

# 鉴于国外镜像服务器访问较慢的问题，建议使用cnpm命令，使用国内淘宝镜像进行环境安装，后续命令npm替换为cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装weexpack：

```bash
# 生成 Web 平台和 native 平台可用的 bundle 文件
cnpm install -g weexpack
```

编译文件：

```bash
# 编译android工程
weexpack build android

# 编译ios工程
weexpack build ios

# 编译web工程
weexpack build web
```

### 启动 Web 服务

```
cnpm run serve
```

启动服务后会监听 1337 端口，访问 http://127.0.0.1:1337/index.html 即可在浏览器中预览页面。

### 启动 Android 项目

首先应该安装 [Android Studio](https://developer.android.com/studio/index.html) 和必要的 Android SDK，配置好基本的开发环境。

使用 Android Studio 打开 `android` 目录中的项目，等待自动安装完依赖以后，即可启动模拟器或者真机预览页面。

### 启动 iOS 项目

首先应该配置好 [iOS 开发环境](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html) 并且安装 [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 工具。

进入 `ios` 目录，使用 CocoaPods 安装依赖：

```
pod install
```

使用 Xcode 打开 `ios` 目录中的项目（`HackerNews.xcworkspace`），然后即可启动模拟器预览页面。

> 注：如果想要在真机上查看效果，还需要配置开发者签名等信息。
