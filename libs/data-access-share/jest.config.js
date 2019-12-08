module.exports = {
  name: 'data-access-share',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-share',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
