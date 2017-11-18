const expect = require('chai').expect;
const exec = require('child_process').exec;

describe('ncsslint', () =>
{
	it('task passed', done =>
	{
		exec('grunt ncsslint:passed', (error, stdout) =>
		{
			expect(stdout).to.match(/PASSED/);
			done();
		});
	})
	.timeout(5000);

	it('task failed', done =>
	{
		exec('grunt ncsslint:failed', (error, stdout) =>
		{
			expect(stdout).to.match(/FAILED/);
			done();
		});
	})
	.timeout(5000);
});
