<script setup lang="ts">
interface Project {
  name: string
  subtitle: string
  desc: string
  stack: string[]
  features: string[]
  repo: string
  repoLabel: string
  demo?: string
  status: string
}

const projects: Project[] = [
  {
    name: '启算 QiSuan',
    subtitle: 'DSA AI 个性化学习平台',
    desc: '面向数据结构与算法学习的 AI 个性化学习平台，以知识点为粒度，自动生成学习内容并管理整个学习过程。',
    stack: ['Vue 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Chroma', 'DeepSeek', 'Docker'],
    features: [
      '个性化学习路径：阶段 / 章节 / 知识点三级组织，按进度解锁',
      'AI 内容生产：讲义、思维导图、练习题、代码题、讲解视频与阶段测评',
      'RAG 知识库：教材上传后向量化，问答时检索增强',
      '测评与考试：阶段测评、正式考试、错题本、学习画像、备考工作流',
      '管理后台：用户、知识点、教材、资源、题库与系统健康管理',
    ],
    repo: 'https://github.com/china355/--.git',
    repoLabel: 'china355/--',
    status: '进行中',
  },
  {
    name: 'AI 图片去水印',
    subtitle: 'wm-eraser · 上传、框选、修复三步出图',
    desc: 'AI 图片去水印工具：上传图片后自动检测水印区域，用户可以手动微调框选，再调用修复接口输出干净图片。',
    stack: ['uni-app', 'Vue 3', 'FastAPI', 'LangGraph', 'Qwen-VL', 'SQLite', 'Nginx'],
    features: [
      'AI 自动检测水印框，支持拖动、缩放、新增、删除',
      '检测 → 人工确认 → 修复 → 校验的人机协同流程',
      '前后对比滑块，修复结果可直接保存',
      '纯云 API 路线，单张成本约 0.03 元，轻量服务器即可运行',
      'MVP 已上线，全链路实测通过',
    ],
    repo: 'https://github.com/china355/picture.git',
    repoLabel: 'china355/picture',
    demo: 'http://120.46.175.101/',
    status: 'MVP 已上线',
  },
  {
    name: 'yang 的小站',
    subtitle: '个人博客 · Valaxy + Yun 静态站',
    desc: '自己的个人博客：展示项目、歌单和联系方式的静态站，文章用 Markdown 写，构建后生成网页，不用数据库和后端。',
    stack: ['Vue 3', 'Valaxy', 'Yun', 'Decap CMS', 'Cloudflare Worker', 'Nginx'],
    features: [
      '纯静态部署：构建产物直接由 nginx 提供访问，和去水印工具共用一台服务器、分站点互不影响',
      '浏览器写文章：打开 /admin 登录后就能写文章、发文章，文章以 Markdown 提交到仓库',
      '内容都在站里：项目页、歌单页、联系方式都在首页和导航里直接展示',
      '搭建过程有记录：《博客是怎么搭起来的：思路、技术和踩过的坑》写了选型、部署和踩过的坑',
    ],
    repo: 'https://github.com/china355/valaxy-blog',
    repoLabel: 'china355/valaxy-blog',
    demo: 'https://xiutu.site',
    status: '已上线',
  },
]
</script>

<template>
  <div class="project-list">
    <article v-for="item in projects" :key="item.name" class="project-card">
      <div class="project-head">
        <h3>{{ item.name }}</h3>
        <span class="project-status">{{ item.status }}</span>
      </div>
      <p class="project-subtitle">
        {{ item.subtitle }}
      </p>
      <p class="project-desc">
        {{ item.desc }}
      </p>
      <div class="project-tags">
        <span v-for="tag in item.stack" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
      <ul class="project-features">
        <li v-for="feature in item.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
      <div class="project-links">
        <a :href="item.repo" target="_blank" rel="noopener">
          GitHub：{{ item.repoLabel }}
        </a>
        <a v-if="item.demo" :href="item.demo" target="_blank" rel="noopener">
          在线演示
        </a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1.5rem 0;
}
.project-card {
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  background: #fff;
  box-shadow: 0 2px 12px rgb(0 0 0 / 6%);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  will-change: transform;
}
.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  border-color: #93c5fd;
  box-shadow: 0 16px 32px rgb(0 0 0 / 14%);
}
.project-card:hover .project-head h3 {
  color: #2563eb;
}
.project-links a {
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.project-links a:hover {
  transform: translateY(-2px);
  background: #eef4ff;
}
.project-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.project-head h3 {
  margin: 0;
}
.project-status {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: #f0f7ff;
  color: #2563eb;
  white-space: nowrap;
}
.project-subtitle {
  color: #666;
  margin: 0.5rem 0;
}
.project-desc {
  margin: 0.5rem 0 1rem;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.project-tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: #f5f5f5;
}
.project-features {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
.project-links a {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  color: inherit;
  text-decoration: none;
}
</style>
