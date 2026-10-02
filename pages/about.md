---
layout: about
title: 關於我
permalink: /about/
---
{% assign s = site.data.site %}

我是 {{ s.name }}，目前就讀{{ s.university }}{{ s.department }}，是{{ s.grade }}學生。

## 簡介

[請在此輸入自我介紹]

## 我在學什麼、對什麼有興趣

我的科系是{{ s.department }}（{{ s.department_en }}）。目前有興趣的方向包含：

{% include tags.html group="academic" %}

## 日常裡的我

{% include tags.html group="personal" %}

[請在此補充更多個人興趣的描述]
