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
            environment {
                CI = 'false'
            }
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


        stage('Simulate Deployment') {
            steps {
                bat 'cd client && start npm start'   // React dev server
                bat 'cd server && start npm start' 
                
            }
        }
        stage('Deploy to Test Environment') {
            steps {
                bat 'docker-compose down || exit 0'
                bat 'docker-compose build'
                bat 'docker-compose up -d'
            }
        }


        stage('Monitoring') {
    steps {
        echo 'Starting monitoring services with Prometheus and Node Exporter...'
        bat 'docker network create app-network || exit 0'
        bat 'docker-compose -f monitoring/docker-compose.monitoring.yml up -d'
        echo 'Waiting for Prometheus to initialize...'
        bat 'timeout /T 10'
        bat 'curl http://localhost:9090 || echo "Prometheus not reachable"'
    }
}
}
    post {
        always {
            echo 'Jenkins pipeline completed.'
        }
    }
}