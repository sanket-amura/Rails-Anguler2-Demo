

System.config({

  //use typescript for compilation

  transpiler: 'typescript',
  // baseUrl: '/assets',

  //typescript compiler options

  typescriptOptions: {

    emitDecoratorMetadata: true

  },
  packages: {
    app: {
      defaultExtension: 'ts'
    }
  }

});

// System.config({
//   baseUrl: '/assets',
//   packages: {
//     app: {
//       format: 'register',
//       defaultExtension: 'js'
//     }
//   }
// });