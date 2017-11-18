module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		ncsslint:
		{
			passed:
			{
				options:
				{
					url: 'https://ncss.io',
					selector: '*:not(.hljs-selector-class):not(.hljs-selector-tag):not(.hljs-selector-pseudo):not(.hljs-attribute):not(.hljs-number):not(.css)'
				}
			},
			failed:
			{
				options:
				{
					url: 'https://ncss.io',
					selector: '*'
				}
			},
			options:
			{
				namespace: 'rs'
			}
		}
	});

	/* load tasks */

	grunt.loadTasks('tasks');

	/* register tasks */

	grunt.registerTask('default',
	[
		'ncsslint'
	]);
};
