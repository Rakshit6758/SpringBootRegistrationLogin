pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub-credentials')
	}

	stages {

        stage('Kill') {

			steps {
				sh 'docker ps -q'
                sh 'docker images -q'
			}
		}

        stage('Clean') {

			steps {
				sh 'mvn clean '
			}
		}

        stage('Build') {

			steps {
				sh 'mvn build '
			}
		}

		stage('Docker') {

			steps {
				sh 'docker-compose up'
			}
		}

	}

}