<script setup lang="ts">
import { ref } from 'vue'

interface Contact {
  name: string
  icon: string
  color: string
  subtitle?: string
  account: string
  accountLabel: string
  qr: string
  qrNote: string
  link: string
  linkText: string
}

const contacts: Contact[] = [
  {
    name: '微信',
    icon: 'i-ri-wechat-line',
    color: '#1aad19',
    subtitle: '橘光光 · 冰岛',
    account: '橘光光',
    accountLabel: '微信昵称',
    qr: '/qrcode/wechat-card.jpg',
    qrNote: '扫码加好友',
    link: '',
    linkText: '',
  },
  {
    name: 'QQ',
    icon: 'i-ri-qq-line',
    color: '#12b7f5',
    subtitle: '阿光不懒',
    account: '1023972205',
    accountLabel: 'QQ 号',
    qr: '/qrcode/qq-card.jpg',
    qrNote: '扫码加好友',
    link: '',
    linkText: '',
  },
  {
    name: '抖音',
    icon: 'i-ri-tiktok-line',
    color: '#000000',
    subtitle: '睡个懒觉',
    account: '54008837196',
    accountLabel: '抖音号',
    qr: '/qrcode/douyin-card.jpg',
    qrNote: '扫码关注',
    link: '',
    linkText: '',
  },
  {
    name: '邮箱',
    icon: 'i-ri-mail-line',
    color: '#8e71c1',
    account: '103972205@qq.com',
    accountLabel: '邮箱',
    qr: '',
    qrNote: '邮箱一般不用二维码，点下面的发邮件就行',
    link: 'mailto:103972205@qq.com',
    linkText: '发邮件',
  },
  {
    name: 'GitHub',
    icon: 'i-ri-github-line',
    color: '#6e5494',
    account: 'china355',
    accountLabel: 'GitHub',
    qr: '',
    qrNote: 'GitHub 一般直接点主页链接就行',
    link: 'https://github.com/china355',
    linkText: '打开 GitHub 主页',
  },
]

const selected = ref<Contact | null>(null)
const copied = ref(false)

function open(item: Contact) {
  selected.value = item
  copied.value = false
}

function copyAccount() {
  if (!selected.value || selected.value.account.startsWith('待填写'))
    return
  navigator.clipboard?.writeText(selected.value.account).then(() => {
    copied.value = true
  }).catch(() => {
    copied.value = false
  })
}
</script>

<template>
  <div class="contact-grid">
    <button
      v-for="item in contacts"
      :key="item.name"
      class="contact-card"
      :title="item.name"
      :aria-label="item.name"
      @click="open(item)"
    >
      <span class="contact-icon" :class="item.icon" />
    </button>
  </div>

  <div v-if="selected" class="contact-modal-backdrop" @click.self="selected = null">
    <div class="contact-modal">
      <button class="contact-close" @click="selected = null">
        ✕
      </button>
      <h3>{{ selected.name }}</h3>
      <p v-if="selected.subtitle" class="contact-subtitle">
        {{ selected.subtitle }}
      </p>

      <div v-if="selected.qr" class="contact-qr">
        <img :src="selected.qr" :alt="`${selected.name}二维码`">
      </div>

      <p><strong>{{ selected.accountLabel }}：</strong>{{ selected.account }}</p>

      <div class="contact-actions">
        <button v-if="!selected.account.startsWith('待填写')" @click="copyAccount">
          {{ copied ? '已复制' : '复制账号' }}
        </button>
        <a v-if="selected.link" :href="selected.link" target="_blank" rel="noopener">
          {{ selected.linkText }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem 0;
}
.contact-card {
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.contact-card:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 18px rgb(0 0 0 / 18%);
}
.contact-icon {
  font-size: 1.7rem;
  color: #111;
}
.contact-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
}
.contact-modal {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 420px;
  width: 100%;
  position: relative;
  text-align: center;
}
.contact-close {
  position: absolute;
  top: 0.6rem;
  right: 0.8rem;
  border: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.contact-qr img {
  display: block;
  max-width: 240px;
  width: 100%;
  margin: 0 auto;
  border-radius: 16px;
}
.contact-qr-placeholder {
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: #888;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contact-actions {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 1rem;
}
.contact-actions button,
.contact-actions a {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
