# mindsql.github.io

个人网站：**https://mindsql.github.io**

Astro 构建，GitHub Pages 托管，push 到 main 后 Actions 自动部署。

## 写博客

在 `src/content/blog/` 新建一个 `.md` 文件：

```markdown
---
title: 文章标题
description: 一句话简介（可选）
pubDate: 2026-10-28
---

正文，Markdown。
```

提交推送即自动上线。

## 本地开发

```bash
npm install
npm run dev      # 开发服务器 http://localhost:4321
npm run build    # 构建到 dist/
```

## 设计

- 设计令牌全部在 `src/styles/tokens.css` 的 `:root`，改主色/字体改这里
- 布局按 Hallmark 规则体系（Index-First 结构、低饱和纸白 + 雾蓝主题、诚实空状态）
