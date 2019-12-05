module.exports = {
  name: 'feature-joke',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-joke',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
