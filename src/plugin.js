const ncss = require('ncss-linter');
const core = ncss.core;
const reporter = ncss.reporter;
const ruleset = ncss.ruleset;
const option = ncss.option;
const packageArray = require('../package.json');

let REPORTER;
let CORE;

/**
 * init
 *
 * @since 1.0.0
 */

function init()
{
	const optionArray = this.options();

	option.init(
	{
		html: optionArray.html,
		path: optionArray.path,
		url: optionArray.url,
		namespace: optionArray.namespace,
		separator: optionArray.separator,
		selector: optionArray.selector,
		threshold: optionArray.threshold,
		loglevel: optionArray.loglevel,
		haltonerror: optionArray.haltonerror,
		haltonwarn: optionArray.haltonwarn
	});
	REPORTER = new reporter(
	{
		option: option
	});
	CORE = new core(
	{
		reporter: REPORTER,
		ruleset: ruleset,
		option: option
	});
	CORE
		.init()
		.then(() =>
		{
			const reportArray = REPORTER.getReport();

			if (reportArray.error.length)
			{
				grunt.log.error();
			}
			else
			{
				grunt.log.ok();
			}
		});
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param grunt object
 *
 * @return object
 */

function construct(grunt)
{
	grunt.registerMultiTask('ncss', packageArray.description, init);
}

module.exports = construct;