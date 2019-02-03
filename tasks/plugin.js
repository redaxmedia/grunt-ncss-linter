const ncss = require('ncss-linter');
const core = ncss.core;
const reporter = ncss.reporter;
const validator = ncss.validator;
const helper = ncss.helper;
const ruleset = ncss.ruleset;
const option = ncss.option;
const packageArray = require('../package.json');

let REPORTER;
let VALIDATOR;
let CORE;

/**
 * init
 *
 * @since 1.0.0
 */

function init()
{
	const optionArray = this.options();
	const done = this.async();

	option.init(
	{
		config: optionArray.config,
		html: optionArray.html,
		path: optionArray.path,
		url: optionArray.url,
		namespace: optionArray.namespace,
		separator: optionArray.separator,
		selector: optionArray.selector,
		logLevel: optionArray.logLevel,
		thresholdError: optionArray.thresholdError,
		thresholdWarn: optionArray.thresholdWarn,
		haltOnError: optionArray.haltOnError,
		haltOnWarn: optionArray.haltOnWarn
	});
	REPORTER = new reporter(
	{
		option
	});
	VALIDATOR = new validator(
	{
		ruleset,
		option
	});
	CORE = new core(
	{
		reporter: REPORTER,
		validator: VALIDATOR,
		helper,
		option
	});
	CORE
		.init()
		.then(() =>
		{
			done();
		});
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param grunt object
 */

function construct(grunt)
{
	grunt.registerMultiTask('ncsslint', packageArray.description, init);
}

module.exports = construct;
