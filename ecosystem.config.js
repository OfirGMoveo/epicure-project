module.exports = {
    apps : [{
      name: 'API01',
      script: 'dist/index.js',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      }
    },
    {
      name: 'API02',
      script: 'dist/index.js',
  
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      }
    }],
  
    deploy : {
      production : {
        key : '~/pem-keys/demo_app.pem',
        user : 'ubuntu',
        host : ['ec2-18-224-29-177.us-east-2.compute.amazonaws.com'],
        ref  : 'origin/master',
        repo : 'git@github.com:OfirGMoveo/epicure-project.git',
        path : '/home/ubuntu/epicure/',
        "post-deploy" : './install-build-del-source.sh && pm2 reload ecosystem.config.js  --env production',
        "pre-deploy-local" : "echo 'Deploying code to servers'",
      },
    }
  };
  