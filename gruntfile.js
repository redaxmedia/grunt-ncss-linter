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
					selector: '*:not([class*="hljs"])',
					loglevel: 'info'
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
