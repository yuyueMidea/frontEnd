# validator 

[![Build Status](https://travis-ci.org/jaywcjlove/validator.js.svg?branch=master)](https://travis-ci.org/jaywcjlove/validator.js) [![CircleCI](https://circleci.com/gh/jaywcjlove/validator.js.svg?style=svg)](https://circleci.com/gh/jaywcjlove/validator.js) ![](http://jaywcjlove.github.io/sb/status/no-dependencies.svg) [![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/validator.tool) [![](http://jaywcjlove.github.io/sb/ico/bower.svg)]() 

轻量级的JavaScript表单验证，字符串验证。没有依赖，支持UMD，`~3kb`。

## 安装使用

### 模块

在应用中引用 `validator.min.js` 文件

```bash
# npm 安装
$ npm install validator.tool --save
# bower 安装
$ bower info validator.tool
```

在 `.js` 文件中调用

```js
// 字符串验证
var validator = require('validator.tool');
var v = new validator();
v.isEmail('wowohoo@qq.com');
v.isIp('192.168.23.3');
v.isFax('');

// 表单验证
var a = new validator('example_form',[
    {...}
],function(obj,evt){
    if(obj.errors){
        // 判断是否错误
    }
})
```



## 客户端使用

在应用中引用 `validator.min.js` 文件, 手动下载并链接HTML中的 [validator.min.js](https://github.com/jaywcjlove/validator.js/tree/master/dist)

```html
<script type="text/javascript" src="dist/validator.min.js"></script>
```

也可以通过 [UNPKG](https://unpkg.com/validator.tool/) 下载：

```html
<script type="text/javascript" src="https://unpkg.com/validator.tool/dist/validator.min.js"></script>
```

在JS中使用方法。

```html 
<script type="text/javascript">
  var v = new Validator();
  v.isEmail('wowohoo@qq.com');
  v.isIp('192.168.23.3');
</script>
```

应用在表单中的方法。

```html 
<form id="example_form">
    <div>
        <label for="email">邮箱验证</label>
        <input type="email" name="email" id="email" class="form-control" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="passworld">密码:</label>
        <input type="passworld" name="passworld" id="passworld" class="form-control" placeholder="输入密码">
    </div>

    <div class="form-group">
        <label for="repassworld">确认密码:</label>
        <input type="repassworld" name="repassworld" id="repassworld" class="form-control" placeholder="输入密码">
    </div>
</form>
<script type="text/javascript">
  var validator = new Validator('example_form',[
    {
        //name 字段
        name: 'email',
        display:"你输入的不{{email}}是合法邮箱|不能为空|太长|太短",
        // 验证条件
        rules: 'is_emil|max_length(12)'
        // rules: 'valid_email|required|max_length(12)|min_length(2)'
    },{
      name:"passworld",
      display:"必填",
      rules: 'required'
    },{
      name:"repassworld",
      display:"密码不一致",
      rules: 'same(passworld)'
    }
  ],function(obj,evt){
      if(obj.errors){
          // 判断是否错误
      }
  })
</script>
```


## 说明文档

> new Validator(formName, option, callback)


### formName

`formName` 是标签中`<form>` 中的 `id` 或者 `name` 的值，如上面的`example_form`

### option

- `name` -> input 中 `name` 对应的值
- `display` -> 验证错误要提示的文字 `{{这个中间是name对应的值}}` 
- `rules` -> 一个或多个规则(中间用`|`间隔)

    - `is_email` -> 验证合法邮箱
    - `is_ip` -> 验证合法 ip 地址
    - `is_fax` -> 验证传真
    - `is_tel` -> 验证座机
    - `is_phone` -> 验证手机
    - `is_url` -> 验证URL
    - `is_money` -> 金额格式验证
    - `is_english` -> 字母验证⚠️
    - `is_chinese` -> 中文验证
    - `is_percent` -> 验证百分比⚠️
    - `required` -> 是否为必填
    - `max_length` -> 最大字符长度
    - `min_length` -> 最小字符长度
    - `same(field)` -> 指定字段内容是否相同
    - `different(field)` -> 拒绝与某个字段相等,比如登录密码与交易密码情况
    - `contains(field)` -> 直接判断字符串是否相等
    - `accepted(field)` -> 用于服务条款,是否同意时相当有用,不限制checkbox与radio,有可能submit button直接附带value情况

```js 
{
    //name 字段
    name: 'email',
    display:"你输入的不{{email}}是合法邮箱|不能为空|太长|太短",
    // 验证条件
    rules: 'is_email|max_length(12)'
    // rules: 'valid_email|required|max_length(12)|min_length(2)'
}
```

### 自定义正则

自定义正则，以`regexp_`开始

```js
{
  //name 字段
  name: 'sex',
  // 对应下面验证提示信息
  display:"请你选择性别{{sex}}|请输入数字",
  //自定义正则`regexp_num`
  regexp_num:/^[0-9]+$/,
  // 验证条件，包括应用自定义正则`regexp_num`
  rules: 'required|regexp_num'
}
```

### callback

```js 
var validator = new Validator('example_form',[
    {...},{...}
],function(obj,evt){
    //obj = {
    //  callback:(error, evt, handles)
    //  errors:Array[2]
    //  fields:Object
    //  form:form#example_form
    //  handles:Object
    //  isCallback:true
    //  isEmail:(field)
    //  isFax:(field)
    //  isIp:(field)
    //  isPhone:(field)
    //  isTel:(field)
    //  isUrl:(field)
    //  maxLength:(field, length)
    //  minLength:(field, length)
    //  required:(field)
    //} 
    if(obj.errors.length>0){
        // 判断是否错误
    }
})
```

### 特殊情况直接提交

```js
var validator = new Validator('example_form',[
    {...},{...}
],function(obj,evt){
    //obj = {
    //} 
    if(obj.errors.length>0){
        // 判断是否错误
    }
})
validator.passes().form.submit();
```

## 例子

### 字符串验证 

```js
var v = new Validator();
v.isEmail('wowohoo@qq.com'); // -> 验证合法邮箱  |=> 返回布尔值
v.isIp('192.168.23.3'); // -> 验证合法 ip 地址  |=> 返回布尔值
v.isFax(''); // -> 验证传真  |=> 返回布尔值
v.isPhone('13622667263'); // -> 验证手机  |=> 返回布尔值
v.isTel('021－324234-234'); // -> 验证座机  |=> 返回布尔值
v.isUrl('http://JSLite.io'); // -> 验证URL  |=> 返回布尔值
v.maxLength('JSLite',12); // -> 最大长度  |=> 返回布尔值
v.minLength('JSLite',3); // -> 最小长度  |=> 返回布尔值
v.required('23'); // -> 是否为必填(是否为空)  |=> 返回布尔值
```

### 表单中验证

**点击按submit按钮验证** 

```js 
var validator = new Validator('example_form',[
    {
        //name 字段
        name: 'email',
        display:"你输入的不{{email}}是合法邮箱|不能为空|太长|太短",
        // 验证条件
        rules: 'is_email|max_length(12)'
        // rules: 'valid_email|required|max_length(12)|min_length(2)'
    },{
        //name 字段
        name: 'sex',
        display:"请你选择性别{{sex}}",
        // 验证条件
        rules: 'required'
    }
],function(obj,evt){
    if(obj.errors){
        // 判断是否错误
    }
})
```

**没有submit验证**

```js 
var validator = new Validator('example_form',[
    {
        //name 字段
        name: 'email',
        display:"你输入的不{{email}}是合法邮箱|不能为空|太长|太短",
        // 验证条件
        rules: 'is_email|max_length(12)'
        // rules: 'valid_email|required|max_length(12)|min_length(2)'
    },{
        //name 字段
        name: 'sex',
        display:"请你选择性别{{sex}}|请输入数字",
        regexp_num:/^[0-9]+$/,
        // 验证条件
        rules: 'required|regexp_num'
    }
],function(obj,evt){
    if(obj.errors){
        // 判断是否错误
    }
})
validator.validate()
```


## 参考

借鉴这些优秀的库，撸出此玩意儿。

- [chriso/validator.js](https://github.com/chriso/validator.js)一个字符串验证器和转换类型的库
- [rickharrison/validate.js](https://github.com/rickharrison/validate.js) validate.js是一个轻量级的JavaScript表单验证库灵感来源[CodeIgniter](http://codeigniter.org.cn/user_guide/libraries/form_validation.html)。
