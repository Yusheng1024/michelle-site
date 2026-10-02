---
layout: page
title: 學習歷程
permalink: /education/
---
{% assign s = site.data.site %}
<div class="edu-current">
  <h2>{{ s.university }}</h2>
  <p>{{ s.department }}<br><span class="muted">{{ s.university_en }}<br>{{ s.department_en }}</span></p>
  <p>{{ s.grade }}</p>
</div>

{% for sec in site.data.education.sections %}
<section class="edu-section">
  <h2>{{ sec.title }}</h2>
  {% if sec.items.size > 0 %}
    <ul class="plain-list">
      {% for it in sec.items %}
        <li><strong>{{ it.title }}</strong>{% if it.note %}<br><span class="muted">{{ it.note }}</span>{% endif %}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>{{ sec.placeholder }}</p>
  {% endif %}
</section>
{% endfor %}
