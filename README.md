# 数据分析技术学习网站

一个面向商务数据分析与应用专业学生的纯前端学习网站，采用科技风设计风格。

## 🎯 项目简介

本项目是一个数据分析技术学习平台，提供完整的课程体系与互动学习体验，帮助学生掌握数据分析的核心技能。

## 📚 课程内容

- **Python基础** - 学习数据分析必备的Python编程基础
- **数据来源与类型** - 了解数据分析的数据来源、数据类型和数据结构
- **数据采集** - 学习网络爬虫、API调用等数据采集技术
- **数据清洗** - 学习数据清洗技术，处理缺失值、异常值和重复数据
- **数据可视化** - 使用Matplotlib、Seaborn等工具创建各种图表

## ✨ 功能特性

- 🎨 **科技风设计** - 深色主题、粒子背景、霓虹色调
- 📖 **结构化学习** - 清晰的课程章节和知识点展示
- ✏️ **课后练习** - 选择题、判断题、编程题
- 📝 **答案解析** - 详细解析和关键知识点总结
- 📱 **响应式设计** - 支持桌面、平板和移动端

## 🛠️ 技术栈

- React 18 + TypeScript
- Vite 构建工具
- Tailwind CSS 样式框架
- Zustand 状态管理
- React Router 路由管理
- Lucide React 图标库

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
src/
├── components/        # 组件目录
│   ├── Navbar.tsx     # 导航栏
│   ├── CourseCard.tsx # 课程卡片
│   └── ParticleBg.tsx # 粒子背景
├── pages/             # 页面目录
│   ├── Home.tsx       # 首页
│   ├── CourseLearning.tsx # 课程学习页
│   ├── Homework.tsx   # 课后作业页
│   └── Solution.tsx   # 答案解析页
├── data/              # 数据目录
│   └── courses.ts     # 课程数据
├── store/             # 状态管理
│   └── useStore.ts    # Zustand状态
└── App.tsx            # 主应用
```

## 📄 许可证

MIT License

## 👨‍💻 作者

商务数据分析与应用专业学习项目