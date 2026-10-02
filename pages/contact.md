---
layout: page
title: 聯絡我
permalink: /contact/
---
{% assign c = site.data.contact %}
{% if c.intro %}<p>{{ c.intro }}</p>{% endif %}

<dl class="contact-list">
  {% for it in c.items %}
    {% unless it.value == blank %}
    <div>
      <dt>{{ it.label }}</dt>
      <dd>{% if it.url != blank %}<a href="{{ it.url }}">{{ it.value }}</a>{% else %}{{ it.value }}{% endif %}</dd>
    </div>
    {% endunless %}
  {% endfor %}
</dl>
