pipeline {
    environment{
    registry = "skillassure/cmd-fe-hcl-java2022"
    registryCredential = "Docker-Hub-Auth"
    dockerImage = ''
  }
  agent any

  stages {
     stage('Sonarqube'){
       steps{
         echo "Sonarqube codequality"
         sh '''
          sonar-scanner \
              -Dsonar.projectKey=get2aha-ui \
              -Dsonar.sources=. \
              -Dsonar.host.url=http://15.206.64.114:9000 \
              -Dsonar.login=sqp_8c293219e63fd56f0b837128868486ffae16f7f0
         '''
       }
     }   
  }
}
