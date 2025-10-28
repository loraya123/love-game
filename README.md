# Couple Air Chess — Static MVP (双语)

这个压缩包包含一个可部署的静态网站 MVP（纯 HTML + CSS + JS），用于展示“情侣飞行棋”产品与品牌信息，具备 SEO 基础设置与双语切换功能。

## 文件列表
- index.html — 首页
- product.html — 产品页
- about.html — 关于页
- contact.html — 联系方式页（含 WhatsApp 占位链接）
- styles.css — 样式
- lang.js — 双语切换脚本（中文/英文）
- sitemap.xml — 简单 sitemap
- robots.txt — 基本 robots
- README.md — 部署说明

## WhatsApp 占位链接
在 `contact.html` 中，WhatsApp 链接当前为：
```
https://wa.me/YOUR_PHONE_NUMBER
```
部署前请将 `YOUR_PHONE_NUMBER` 替换为你的国际格式手机号码（不含 `+`），例如 `8617316895054`。

## 部署（三种常见方式）
1. **GitHub Pages**
   - 将文件推到 GitHub 仓库的 `main` 分支。
   - 在仓库设置 -> Pages，选择 `main` 分支并开启。
2. **Netlify / Vercel**
   - 拖拽或连接仓库进行部署，选择静态站点托管，默认配置即可。
3. **传统主机 / FTP**
   - 将文件上传到你的服务器的 WWW 根目录。

## SEO 建议（MVP 后）
- 替换 `example.com` 为你的真实网站域名（在 meta canonical、og:url、schema.org 中）。
- 准备高质量产品图片并替换占位 SVG。
- 添加多语言 hreflang 或为英文独立路径（例如 `/en/`）以利搜索引擎。
- 配置 HTTPS（证书），优化加载性能与图片大小。

