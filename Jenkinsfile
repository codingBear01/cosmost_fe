pipeline{
    agent any
    options {
        skipStagesAfterUnstable()
    }
        environment {
        ECR_REPO_URI = "347222812711.dkr.ecr.${REGION}.amazonaws.com/test_cicd"
        AWS_CREDENTIALS="COSMOST_DEPLOYER_ID"
        CLUSTER_NAME="cosmost"
        SERVICE_NAME="ecs-service"
        REGION="ap-northeast-2"
    }
    stages {
        stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }
        stage('Build') { 
            steps { 
                script{
                  app = docker.build("${ECR_REPO_URI}")
                }
            }
        }
        stage('Upload to ECR') {
            steps {
                script{
                    sh 'rm  ~/.dockercfg || true'
                    sh 'rm ~/.docker/config.json || true'
                    docker.withRegistry("https://${ECR_REPO_URI}", "ecr:${REGION}:${AWS_CREDENTIALS}") {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                    }
                }
            }
        }
        stage('Deploy to ECS') {
          steps {
                script {
                    withAWS(region: "${REGION}", credentials: "${AWS_CREDENTIALS}") {
                      sh "aws ecs update-service --region ${REGION} --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --force-new-deployment"
                    }
                }
            }
        }
    }
}