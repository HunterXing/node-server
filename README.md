# node 服务端开发基础
简单的node服务端开发，博客增删改查（不使用框架）

# 使用的第三方组件

# 接口设计
| 序号 | API路径 | 请求方式 | 参数| 描述 |
| ---- | ------- | -------- | -------- | ---- |
| 1    | /api/blog | GET | author、keyword| 获取博客列表 |
| 2    | /api/blog/id | GET | id| 获取博客详情 |
| 3    | /api/blog | POST | |新建博客 |
| 4    | /api/blog | PUT || 更新博客 |
| 5    | /api/blog/id | DELETE |id| 删除博客 |
| 6    | /api/login | POST || 登录 |
| 7    | /api/register | POST || 注册 |

# 插件
- nodemon
- cross-env
- mysql