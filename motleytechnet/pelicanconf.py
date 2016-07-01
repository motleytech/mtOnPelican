#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'motleytech'
SITENAME = u'motleytech.net'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#           ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

THEME = "themes/elegant"
STATIC_PATHS = ['images', 'js', 'css']

PLUGIN_PATHS = ["plugins"]
PLUGINS = [
    "render_math",
]

LANDING_PAGE_ABOUT = {
    'title': 'Excursions of a mathematical programmer.',
    'details': "One of these days, I have to write something in here."
}

DISQUS_SITENAME = "motleytech"

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
