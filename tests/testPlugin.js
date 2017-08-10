const expect = require('chai').expect;
const exec = require('child_process').exec;

describe('ncsslint', () =>
{
	it('validate url', done =>
	{
		exec('grunt ncsslint:url', (error, stdout) =>
		{
			expect(stdout).to.match(/PASSED/);
			done();
		});
	})
	.timeout(5000);
});
