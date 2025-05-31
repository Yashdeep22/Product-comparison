pipeline {
    agent any

    tools {
        nodejs 'Node 18'
    }

    environment {
        MONGO_URI = "mongodb://localhost:27017/Product_app"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Yashdeep22/Product-comparison.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'cd client && npm install --legacy-peer-deps'
                bat 'cd server && npm install --legacy-peer-deps'
            }
        }

        stage('Build React Frontend') {
            steps {
                bat 'cd client && npm run build'
            }
        }

        stage('Run Node.js Tests') {
            steps {
                bat 'cd server && npm test || exit 0'
                bat 'cd client && npm test || exit 0'
            }
        }

        stage('Code Quality') {
            steps {
                bat 'cd server && npm run lint || exit 0'
            }
        }


        stage('Security Scan (Snyk)') {
            steps {
                bat 'cd server && snyk test || exit 0'
                bat 'cd client && snyk test || exit 0'
            }
        }

        stage('Run Python Script') {
            steps {
                bat 'cd server && python app.py'
            }
        }

        stage('Simulate Deployment') {
            steps {
                bat 'echo Simulating backend start (e.g., npm run start)'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'curl http://localhost:5000/health || echo "Health check failed"'
            }
        }
    }

    post {
        always {
            echo 'Jenkins pipeline completed.'
        }
    }
}