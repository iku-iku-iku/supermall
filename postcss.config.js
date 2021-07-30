module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: ["ignore"], // 不需转换的类
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBarItem\.vue$/] // 不需转换的文件
      // 不转换即仍可以用px作为单位，这样在任何分辨率下大小都是一样的
    }
  }
};
