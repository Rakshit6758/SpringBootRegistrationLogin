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

		stage('Build') {

			steps {
				sh 'docker-compose up'
			}
		}

	}

}