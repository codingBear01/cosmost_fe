// pipeline{
//     agent any
//     options {
//         skipStagesAfterUnstable()
//     }
//         environment {
//         ECR_REPO_URI = "347222812711.dkr.ecr.ap-northeast-2.amazonaws.com/cosmost-fe-ecr"
//         AWS_CREDENTIALS="COSMOST_DEPLOYER_ID"
//         CLUSTER_NAME="cosmost-fe-cluster"
//         SERVICE_NAME="cosmost-fe-service"
//         REGION="ap-northeast-2"
//     }
//     stages {
//         stage('Clone repository') { 
//             steps { 
//                 script{
//                 checkout scm
//                 }
//             }
//         }
//         stage('Build') { 
//             steps { 
//                 script{
//                   app = docker.build("${ECR_REPO_URI}")
//                 }
//             }
//         }
//         stage('Upload to ECR') {
//             steps {
//                 script{
//                     sh 'rm  ~/.dockercfg || true'
//                     sh 'rm ~/.docker/config.json || true'
//                     docker.withRegistry("https://${ECR_REPO_URI}", "ecr:${REGION}:${AWS_CREDENTIALS}") {
//                     app.push("${env.BUILD_NUMBER}")
//                     app.push("latest")
//                     }
//                 }
//             }
//         }
//         stage('Deploy to ECS') {
//           steps {
//                 script {
//                     withAWS(region: "${REGION}", credentials: "${AWS_CREDENTIALS}") {
//                       sh "aws ecs update-service --region ${REGION} --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --force-new-deployment"
//                     }
//                 }
//             }
//         }
//     }
// }

pipeline {
    agent any
    tools {
        nodejs 'node 16.18.0'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'COSMOST_FE_DOCKER_HUB_ID', password: 'PASSWORD', username: 'USERNAME')]) {
                    sh 'docker build -t cosmost-fe .'
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                    sh 'docker push cosmost-fe'
                }
            }
        }
        stage ('Deploy') {
            steps {
                script {
                    def dockerCmd = 'docker run -p 3000:3000 -d cosmost-fe:latest'
                    sshagent(['cosmost_aws_credentials']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@3.36.109.0 ${dockerCmd}"
                    }
                }
            }
        }
    }
}
