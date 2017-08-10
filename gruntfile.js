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
					url: 'https://ncss.io',
					namespace: 'rs',
					selector: '*:not([class*="hljs"])',
					loglevel: 'info'
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
