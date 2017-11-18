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
					selector: '*:not(.hljs-selector-class):not(.hljs-selector-tag):not(.hljs-selector-pseudo):not(.hljs-attribute):not(.hljs-number):not(.css)'
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
