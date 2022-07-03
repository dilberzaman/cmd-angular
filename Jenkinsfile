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

 
