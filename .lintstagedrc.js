module.exports = {
  '*.ts': ['tsc --noEmit', 'yarn run lint:fix', 'yarn run test'],
};
