Grunt NCSS Linter
=================

> Grunt enhanced linter for NCSS.

[![Build Status](https://img.shields.io/travis/redaxmedia/grunt-ncss-linter.svg)](https://travis-ci.org/redaxmedia/grunt-ncss-linter)
[![Dependency Status](https://gemnasium.com/badges/github.com/redaxmedia/grunt-ncss-linter.svg)](https://gemnasium.com/github.com/redaxmedia/grunt-ncss-linter)
[![NPM Version](https://img.shields.io/npm/v/grunt-ncss-linter.svg)](https://www.npmjs.com/package/grunt-ncss-linter)
[![GitHub Stats](https://img.shields.io/badge/github-stats-ff5500.svg)](http://githubstats.com/redaxmedia/grunt-ncss-linter)


Installation
------------

```
npm install grunt-ncss-linter
```


Usage
-----

```
{
	ncsslint:
	{
		options:
		{
			html: null,
			path: null,
			url: null,
			namespace: null,
			separator: '-',
			selector: '*',
			threshold: 0,
			loglevel: 'warn',
			haltonerror: false,
			haltonwarn: false
		}
	}
}
```