module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'a simple React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx'
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        pattern: new RegExp('MyComponent', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.js',
        templateFile: 'plop-templates/component/styles.js'
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase name}}/styles.js',
        pattern: new RegExp('MyComponent', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.test.tsx',
        templateFile: 'plop-templates/component/index.test.tsx'
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase name}}/index.test.tsx',
        pattern: new RegExp('MyComponent', 'gi'),
        template: '{{pascalCase name}}'
      }
    ]
  });
};
