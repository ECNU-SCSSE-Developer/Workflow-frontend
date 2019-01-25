# Workflow-frontend
workflow小程序前端设计

招聘

- 主要功能
  - 用于进行项目组队+活动报名
- 详细设计
  - 界面顶部可以进行招聘启事和最近活动筛选，可以根据比赛/招聘职位筛选招聘启事，根据活动种类筛选活动
  - 界面中部为招聘启事和最近活动列表，不同用户根据自定义的标签生成不同的列表，每个item点进去可以查看详细情况，可以在启事的详细情况中点击比赛查看比赛的详细介绍
  - 界面右下角的按钮可以添加新的招聘启事
  - 有新增的应聘者或关注者会给相关人员发送消息提醒
- 主界面展示

  <img src="https://syj-image-1258575893.cos.ap-shanghai.myqcloud.com/1_recruit.png" style="width:80px height:300px">

工作流

- 主要功能
  - 用于展示图形化工作流
- 详细设计
  - 界面展示工作任务列表
  - 列表中的每个item点进去是echarts中的树图，用于展示工作任务的进展情况，小程序中的树图以展示为主，编辑功能暂不考虑
  - 界面右下角的按钮可以添加新的工作任务
  - 工作任务有新的进展时会给相关人员发送消息提醒
- 主界面展示

  <img src="https://syj-image-1258575893.cos.ap-shanghai.myqcloud.com/2_workflow.png" style="width:100px height:500px">



赛事

- 主要功能
  - 用于展示未来两年内的各项市级/国家级大型赛事
- 详细设计
  - 目前考虑以日历和列表两种方式进行展示，最后根据实施难度进行筛选
  - 可以收藏感兴趣的比赛，系统会在比赛阶段的关键时间点给关注用户发送消息提醒
  - 用户还可以添加相关的备忘，系统会在指定时间点给用户发送消息提醒
- 主界面展示

  <img src="https://syj-image-1258575893.cos.ap-shanghai.myqcloud.com/3_match_calendar.png" style="width:100px height:500px">
  <img src="https://syj-image-1258575893.cos.ap-shanghai.myqcloud.com/4_matchlist.png" style="width:100px height:500px">
  



我的

- 主要功能
  - 用于展示个人相关信息
- 详细设计
  - 用于展示和设置个人基本信息和感兴趣的标签
  - 用于接收和查看最近的提醒消息（已读+未读）
  - 用于便捷查看创建的，关注的，应聘的招聘信息
- 主界面展示

  <img src="https://syj-image-1258575893.cos.ap-shanghai.myqcloud.com/5_mine.png" style="width:100px height:500px">



