const ncss = require('ncss-linter');
const plugin = ncss.core;
const reporter = ncss.reporter;
const validator = ncss.validator;
const helper = ncss.helper;
const ruleset = ncss.ruleset;
const option = ncss.option;
const packageObject = require('../package.json');

let REPORTER;
let VALIDATOR;
let CORE;

/**
 * init
 *
 * @since 1.0.0
 *
 * @return {void}
 */

function init()
{
	const optionObject = this.options();
	const done = this.async();

	option.initWithConfig(
	{
		config: optionObject.config,
		html: optionObject.html,
		path: optionObject.path,
		url: optionObject.url,
		namespace: optionObject.namespace,
		separator: optionObject.separator,
		selector: optionObject.selector,
		logLevel: optionObject.logLevel,
		thresholdError: optionObject.thresholdError,
		thresholdWarn: optionObject.thresholdWarn,
		haltOnError: optionObject.haltOnError,
		haltOnWarn: optionObject.haltOnWarn
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
	CORE = new plugin(
	{
		reporter: REPORTER,
		validator: VALIDATOR,
		helper,
		option
	});
	CORE
		.init()
		.then(() => done());
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param {object} grunt
 *
 * @return {void}
 */

function construct(grunt)
{
	grunt.registerMultiTask('ncsslint', packageObject.description, init);
}

module.exports = construct;
