module.exports = {
  name: 'feature-joke-data-access-joke',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature-joke/data-access-joke',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
