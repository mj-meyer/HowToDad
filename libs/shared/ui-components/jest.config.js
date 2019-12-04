module.exports = {
  name: 'shared-ui-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
