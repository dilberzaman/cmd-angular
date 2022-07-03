pipeline {
    environment{
    registry = "skillassure/cmd-fe-hcl-java2022"
    registryCredential = "Docker-Hub-Auth"
    dockerImage = ''
  }
  agent any
  

  stages {
    stage('SonarQube analysis') {

            environment {

                scannerHome = tool 'sonar_scanner'

            }

            steps {

                script{

                    echo '=========== SonarQube analysis ============'

                    withSonarQubeEnv('SonarQube') {

                        sh '${scannerHome}/bin/sonar-scanner --version'

                    }

                }

      }
     stage('Sonarqube'){
       steps{
         echo "Sonarqube codequality"
         sh '''
          sonar-scanner \
              -Dsonar.projectKey=get2aha-admin \
              -Dsonar.sources=. \
              -Dsonar.host.url=http://15.206.64.114:9000 \
              -Dsonar.login=sqp_90fd8c531334f8238be92c00eea1f2e198e205ae
         '''
       }
     }   
  }
}
