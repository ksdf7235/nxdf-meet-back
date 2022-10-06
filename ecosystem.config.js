module.exports = {
  apps: [{
      name: 'nodeserver', //App name
      script: '/src/server.js', //실행할 스크립트
      instances: 1, //CUP 코어 수 만큼 프로세스 생성(-1:코어수만큼 프로세스 생성)
      exec_mode: "cluster", //CPU 사용을 위한 클러스터 모드
      max_memory_restart: '300M', // 프로세스의 메모리가 300MB에 도달하면 reload 실행
      //bin폴더, routes폴더를 감시해서 변경사항 실행
      watch: [
        "src",
      ],
      //해당폴더의 파일변경은 무시
      ignore_watch : [
        "node_modules"
      ],
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
