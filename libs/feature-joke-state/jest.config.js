module.exports = {
  name: 'feature-joke-state',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-joke-state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
