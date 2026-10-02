---
layout: page
title: 我的歷程
permalink: /timeline/
---
{% assign s = site.data.site %}
<ol class="timeline">
  {% for e in site.data.timeline.entries %}
  <li>
    <p class="when">{{ e.when }}</p>
    {% if e.type == "current" %}
      <p class="what">{{ s.university }}{{ s.department }}　{{ s.grade }}</p>
    {% else %}
      <p class="what">{{ e.title }}</p>
      {% if e.note %}<p class="muted">{{ e.note }}</p>{% endif %}
    {% endif %}
  </li>
  {% endfor %}
</ol>
