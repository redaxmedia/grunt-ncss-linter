const expect = require('chai').expect;
const exec = require('child_process').exec;

describe('ncss', () =>
{
	it('validate url', done =>
	{
		exec('grunt ncss:url', (error, stdout) =>
		{
			expect(stdout).to.match(/PASSED/);
			done();
		});
	});
});
