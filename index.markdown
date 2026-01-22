---
layout: default
title: Home
---

## Welcome

Hello! I'm **Lorenzo Minuz**, a passionate physics student with a love for minimal design, efficient code, and sharing knowledge. This is my personal space on the web.

Check out my [university notes](/notes/) from my studies, browse through my [blog posts](/posts/), or learn more [about me](/about/).

---

## Latest Posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit:3 %}
  <li class="post-item">
    <h3 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
    </div>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size > 3 %}
[View all posts →](/posts/)
{% endif %}

{% else %}
<div class="card">
  <p>No posts yet. Check back soon!</p>
</div>
{% endif %}
