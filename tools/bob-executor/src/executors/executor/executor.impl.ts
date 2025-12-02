import { PromiseExecutor } from '@nx/devkit';
import { writeFileSync } from 'fs';
import { joinPathFragments } from '@nx/devkit';
import { ExecutorExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<ExecutorExecutorSchema> = async (
  options
) => {
  console.log({ options });
  console.log('Executor ran for Executor', options);
  writeFileSync(joinPathFragments(options.outputPath, 'bob-executor-output.txt'), 'Executor ran successfully', {
    encoding: 'utf8',
  });
  return {
    success: true,
  };
};

export default runExecutor;
