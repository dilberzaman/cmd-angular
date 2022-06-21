pipeline 
{
    environment
    {
    registry = "dilber.zaman@skillassure.com/cmd-angular"
    registryCredential = "gitlab"
    dockerImage = ''
    }
    agent any
    stages 
    {
        stage('Gitlab')
        {
           steps
            {
                 git branch: 'dev', credentialsId: '1',url:'http://106.51.36.182:8095/skillassure-training/lob/fit/opteamix/tracks/devops/cmd-angular.git'
         
            }       
        }
     
       stage('Build dockerimage')
        {
         steps
         {
          echo "Building dockerimage"
          script
         {
           dockerImage = docker.buildregistry +":$BUILD_NUMBER"
          }
         }
        }        
    }
}

