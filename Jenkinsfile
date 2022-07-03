pipeline 
{
    environment
    {
    registry = "dilberzaman/cmd-angular"
    registryCredential = "dockerhub"
    dockerImage = ''
    //scannerHome = tool 'sonar_scanner'
    }
  agent any
  stages 
  {
               
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
     stage('Build docker image')
     {
      steps
      {
        echo "Building docker image"
        script
        {
          dockerImage = docker.build registry + ":$BUILD_NUMBER" 
        }
      }
     }

     stage('Push docker image')
     {
      steps
      {
        echo "Pushing docker image"
        script
        {
           docker.withRegistry('',registryCredential) 
           {
            dockerImage.push()
            dockerImage.push('latest')
           }
        }
      }      
     }
   stage("deploy k8")
    {
      steps
      {
        script
        {
         kubernetesDeploy(configs: "deployment.yaml", kubeconfigId: "KUBERNETES_CLUSTER")
        }
      }
    }
  }
}

 
