// Simple bilingual script (Chinese / English) using data-i18n attributes
(function(){
  const translations = {
    "nav_home": {"zh":"首页","en":"Home"},
    "nav_product": {"zh":"产品","en":"Product"},
    "nav_about": {"zh":"关于","en":"About"},
    "nav_contact": {"zh":"联系我们","en":"Contact"},
    "hero_title": {"zh":"情侣飞行棋 — 为两人的约会设计","en":"Couple Air Chess — Designed for two"},
    "hero_sub": {"zh":"离屏互动 · 情感话题 · 轻松重玩","en":"Off-screen interaction · Conversation prompts · Replayable fun"},
    "cta_shop": {"zh":"查看产品","en":"View Product"},
    "cta_contact": {"zh":"联系销售","en":"Contact Sales"},
    "feat_title": {"zh":"产品亮点","en":"Product Highlights"},
    "feat_1": {"zh":"两人专用玩法：专为情侣设计的互动机制","en":"2-player mechanics tailored to couples"},
    "feat_2": {"zh":"任务卡系统：促进对话与情感交流","en":"Task cards that spark conversation"},
    "feat_3": {"zh":"可订阅的扩展包与数字纪念","en":"Subscription card packs & digital keepsakes"},
    "mc_title": {"zh":"快速验证 & 众筹建议","en":"Validation & Crowdfunding"},
    "mc_text": {"zh":"建议通过众筹（Kickstarter）验证需求并建立早期社区。","en":"Recommend validating demand via crowdfunding (Kickstarter) and building an early community."},
    "about_title": {"zh":"关于 Couple Air Chess","en":"About Couple Air Chess"},
    "about_p1": {"zh":"我们是一支专注于“情感与体验化桌游”的小团队。目标是把传统的飞行棋玩法，打造成专属于情侣的互动体验。","en":"We are a small team focused on emotional, experience-driven tabletop games. We aim to transform classic games into couple-centric experiences."},
    "about_mission": {"zh":"使命","en":"Mission"},
    "about_mission_text": {"zh":"在离屏社交日益稀缺的时代，提供高质量的两人互动工具，帮助伴侣创造更有趣、有意义的约会时刻。","en":"In an age of screen-first socializing, we provide high-quality two-player experiences to help couples create meaningful date moments."},
    "prod_title": {"zh":"产品与定价","en":"Product & Pricing"},
    "prod_basic": {"zh":"基础版","en":"Basic Edition"},
    "prod_basic_desc": {"zh":"纸质棋盘 + 任务卡 60 张 + 规则书 — 入门约会套装。","en":"Paper board + 60 task cards + rulebook — starter date pack."},
    "buy_now": {"zh":"联系购买","en":"Contact to Buy"},
    "specs_title": {"zh":"规格与扩展","en":"Specs & Extensions"},
    "spec_1": {"zh":"豪华版：升级棋子材质、礼盒包装","en":"Premium edition: upgraded pieces & gift box"},
    "spec_2": {"zh":"订阅卡包：每月主题任务卡（可选）","en":"Subscription: monthly themed card packs (optional)"},
    "spec_3": {"zh":"数字纪念：App / Web 记录情侣成就","en":"Digital keepsakes: App/Web to record couple achievements"},
    "contact_title": {"zh":"联系我们","en":"Contact Us"},
    "contact_p": {"zh":"了解报价、批发与定制请通过以下方式联系（部署前请替换占位链接为真实号码）：","en":"For pricing, wholesale and custom orders contact us below (replace placeholder WhatsApp link before deployment)."},
    "contact_whatsapp": {"zh":"WhatsApp","en":"WhatsApp"},
    "contact_whatsapp_note": {"zh":"点击按钮打开 WhatsApp 聊天（请在部署前替换链接中的占位号码）。","en":"Click the button to open WhatsApp chat (replace placeholder number before deployment)."},
    "contact_email": {"zh":"Email","en":"Email"},
    "footer_rights": {"zh":"保留所有权利","en":"All rights reserved"}
  };

  const defaultLang = localStorage.getItem('site_lang') || 'zh';

  function applyLang(lang){
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(translations[key]){
        el.textContent = translations[key][lang === 'zh' ? 'zh' : 'en'];
      }
    });
    localStorage.setItem('site_lang', lang);
  }

  // attach event listeners
  window.addEventListener('DOMContentLoaded', function(){
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    zhBtn && zhBtn.addEventListener('click', ()=> applyLang('zh'));
    enBtn && enBtn.addEventListener('click', ()=> applyLang('en'));
    applyLang(defaultLang);
  });
})();
