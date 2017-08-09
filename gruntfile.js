module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		ncss:
		{
			url:
			{
				options:
				{
					path: 'https://ncss.io',
					namespace: 'rs',
					loglevel: 'debug'
				}
			}
		}
	});

	/* load tasks */

	grunt.loadTasks('src');

	/* register tasks */

	grunt.registerTask('default',
	[
		'ncss'
	]);
};
