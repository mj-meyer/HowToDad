module.exports = {
  name: 'how-to-dad',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/how-to-dad',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
