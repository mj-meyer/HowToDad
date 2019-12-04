module.exports = {
  name: 'shared-ui-nebular',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-nebular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
