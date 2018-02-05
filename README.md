Grunt NCSS Linter
=================

> Grunt enhanced linter for [NCSS](https://ncss.io).

[![Build Status](https://img.shields.io/travis/redaxmedia/grunt-ncss-linter.svg)](https://travis-ci.org/redaxmedia/grunt-ncss-linter)
[![Dependency Status](https://dependencyci.com/github/redaxmedia/grunt-ncss-linter/badge)](https://dependencyci.com/github/redaxmedia/grunt-ncss-linter)
[![NPM Version](https://img.shields.io/npm/v/grunt-ncss-linter.svg)](https://npmjs.com/package/grunt-ncss-linter)
[![License](https://img.shields.io/npm/l/grunt-ncss-linter.svg)](https://npmjs.com/package/grunt-ncss-linter)


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
				config: '.ncsslintrc',
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

| Name           | Type    | Default     | Mandatory |
|----------------|---------|-------------|-----------|
| config         | string  | .ncsslintrc | optional  |
| html           | string  | null        | required  |
| path           | string  | null        | required  |
| url            | string  | null        | required  |
| namespace      | string  | null        | optional  |
| separator      | string  | -           | optional  |
| selector       | string  | *           | optional  |
| logLevel       | string  | warn        | optional  |
| thresholdError | number  | 0           | optional  |
| thresholdWarn  | number  | 0           | optional  |
| haltOnError    | boolean | false       | optional  |
| haltOnWarn     | boolean | false       | optional  |


Loggers
-------

| Name    | Level | Value |
|---------|-------|-------|
| Silent  | 0     | null  |
| Error   | 1     | error |
| Warning | 2     | warn  |
| Info    | 3     | info  |
| Debug   | 4     | debug |
