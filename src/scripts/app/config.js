/**
 * baseUrl——用于加载模块的根路径。
 * paths——用于映射不存在根路径下面的模块路径。
 * shims——配置在脚本/模块外面并没有使用RequireJS的函数依赖并且初始化函数。假设underscore并没有使用  RequireJS定义，但是你还是想通过RequireJS来使用它，那么你就需要在配置中把它定义为一个shim。
 * deps——加载依赖关系数组
 */
var version = '1.0';

require.config({
  baseUrl: 'scripts/app',
  urlArgs: 'v=' + version,
  map: {
    '*': {
      'css': '../../components/require-css/css.min'
    }
  },
  paths: {
    'lib': '../lib',
    'pace': '../../components/PACE/pace.min',
    'domReady': '../../components/domReady/domReady',
    'bootstrap': '../../components/bootstrap/dist/js/bootstrap.min',
    'jquery': '../../components/jquery/dist/jquery.min',
    'vue': '../../components/vue/dist/vue',
    'layer': '../../components/layer/build/layer',
    'jquery.validate': '../../components/jquery-validation/dist/jquery.validate.min',
    'additional.methods': '../../components/jquery-validation/dist/additional-methods'
  },
  // load backbone as a shim
  shim: {
    'pace': {
      deps: ['css!../../components/PACE/themes/orange/pace-theme-flash']
    },
    'layer': {
      deps: ['jquery', 'css!../../components/layer/build/skin/default/layer']
    },
    'additional.methods': {
      exports: '$',
      deps: ['jquery.validate']
    },
    'jquery.validate': {
      exports: '$',
      deps: ['jquery']
    }
  }
});

require(['pace'], function(pace){
  pace.start({
    ajax: false, // disabled
    document: false // disabled
  });
});
