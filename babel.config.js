const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
        ie: '11',
        esmodules: true,
      },
      useBuiltIns: 'usage',
      corejs: '3.1.4',
    },
  ],
];

module.exports = { presets };
