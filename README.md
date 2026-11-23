# College Athlete Planner

## Project Description
College Athlete Planner is a web application designed to help college student-athletes manage their academic and athletic responsibilities in one place. It provides a simple way to keep track of assignments, workouts, schedules, and daily responsibilities.

## MVP Features
- **Task Manager:** Add tasks and assignments to a list.
- **Workout Tracker:** Record daily workouts.
- **Daily Schedule:** Add classes, practices, and other scheduled activities.
- **Delete Functionality:** Remove items from lists when they are completed or no longer needed.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Containerization:** Docker
- **Version Control:** Git and GitHub
- **Deployment Goal:** Google Cloud Run

## Docker
The application was containerized using Docker and tested locally.

To run the application locally using Docker:

```bash
docker build -t college-athlete-planner .
docker run -d -p 8080:80 --name athlete-planner college-athlete-planner
```

After running the container, visit `http://localhost:8080` in your browser.

## AI Tools
ChatGPT and GitHub Copilot were used to assist with development, troubleshooting, code improvement, and project guidance.

## Deployment Status
Google Cloud Run deployment was attempted. Deployment could not be completed during the MVP sprint because the Cloud Run Admin API was not successfully enabled.

## Project Goal
The goal of College Athlete Planner is to make it easier for college student-athletes to balance academics, athletics, and personal responsibilities through a simple organizational tool.
