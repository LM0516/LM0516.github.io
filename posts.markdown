---
layout: default
title: Posts
permalink: /posts/
---

## All Posts

{% if site.categories.size > 0 %}
{% for category in site.categories %}
### {{ category[0] | capitalize }}

<ul class="post-list">
  {% for post in category[1] %}
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

{% endfor %}
{% else %}
{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
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
{% else %}
<div class="card">
  <p>No posts yet. Check back soon!</p>
</div>
{% endif %}
{% endif %}
