module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		ncsslint:
		{
			url:
			{
				options:
				{
					url: 'https://ncss.io',
					namespace: 'rs',
					selector: '*:not(.hljs-selector-tag):not(.hljs-selector-class):not(.hljs-selector-tag):not(.hljs-attribute):not(.hljs-number):not(.css)',
					logLevel: 'info'
				}
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
