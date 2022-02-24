pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub-credentials')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker-compose up'
			}
		}

	}

}