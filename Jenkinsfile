pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub-credentials')
	}

	stages {

        stage('Clean') {

			steps {
				sh 'mvn clean '
			}
		}

        stage('Install') {

			steps {
				sh 'mvn install '
			}
		}

		stage('Application') {

			steps {
				sh 'mvn spring-boot:run'
			}
		}

	}

}