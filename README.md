<h1 align="center">@catpawx/openapi</h1>

<div align="center">
🐾 猫爪联盟前端团队@catpawx/openapi,用于结合内部规范，批量生成api
</div>

# 全局安装

```bash
npm install -g @catpawx/openapi
```

# 使用

后端文档配合改造（重要！）
在打tag时候，改为形如 @ApiTags('用户管理-UserController')，在之前的中文tag后面加上-Controller名称，这样可以生成对应的文件

```bash
cpx-openapi --schemaPath https://nest-admin.dooring.vip/prod-api/swagger-ui-json --serversPath ./services --projectName api  --namespace API
```

# 参数说明

基于@umijs/openapi的扩展，所以参数跟@umijs/openapi一致，只是进行了定制化

| 属性        | 备注                              | 类型   | 默认值 |
| ----------- | --------------------------------- | ------ | ------ |
| serversPath | 生成的文件夹的路径                | string | -      |
| schemaPath  | Swagger 2.0 或 OpenAPI 3.0 的地址 | string | -      |
| projectName | 项目名称                          | string | -      |
| namespace   | 命名空间名称                      | string | API    |

# 测试

test文件夹有一个nest启动的服务端，启动后访问http://localhost:3000/swagger-ui-json即可获取swagger的json数据
