Grunt NCSS Linter
=================

> Grunt enhanced linter for [NCSS](https://ncss.io).

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

Load the task:

```js
grunt.loadNpmTasks('grunt-ncss-linter');
```

Config the task:

```js
grunt.initConfig(
{
	ncsslint:
	{
		name:
		{
			options:
			{
				html: null,
				path: null,
				url: null,
				namespace: null,
				separator: '-',
				selector: '*',
				logLevel: 'warn',
				thresholdError: 0,
				thresholdWarn: 0,
				haltOnError: false,
				haltOnWarn: false
			}
		}
	}
}
```


Options
-------

| Name           | Type    | Default | Mandatory |
|----------------|---------|---------|-----------|
| html           | string  | null    | required  |
| path           | string  | null    | required  |
| url            | string  | null    | required  |
| namespace      | string  | null    | optional  |
| separator      | string  | -       | optional  |
| selector       | string  | *       | optional  |
| logLevel       | string  | warn    | optional  |
| thresholdError | number  | 0       | optional  |
| thresholdWarn  | number  | 0       | optional  |
| haltOnError    | boolean | false   | optional  |
| haltOnWarn     | boolean | false   | optional  |