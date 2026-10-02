---
layout: page
title: 興趣與探索
permalink: /interests/
---
{% for g in site.data.interests.groups %}
<section class="interest-group">
  <h2>{{ g.title }}</h2>
  {% if g.intro %}<p>{{ g.intro }}</p>{% endif %}
  {% include tags.html group=g.id %}
</section>
{% endfor %}
