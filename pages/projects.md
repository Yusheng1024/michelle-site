---
layout: page
title: 專題與研究
permalink: /projects/
lead: 正在進行與規劃中的專題。內容會隨著進度更新。
---
{% assign ps = site.projects | sort: "order" %}
{% if ps.size > 0 %}
<ul class="project-list">
  {% for p in ps %}{% include project-item.html project=p %}{% endfor %}
</ul>
{% else %}
<p>[請在此加入第一個專題]</p>
{% endif %}
