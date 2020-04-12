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
					url: 'https://ncss.io'
				}
			},
			failed:
			{
				options:
				{
					url: 'https://ncss.io',
					namespace: 'invalid'
				}
			},
			options:
			{
				config: 'tests/provider/.ncsslintrc'
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
