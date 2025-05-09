# Educational Platform

## Overview
A comprehensive web application for online education, supporting both student and teacher roles.

## Features
- User Authentication
- Student Dashboard
- Teacher Dashboard
- Quiz System
- Live Streaming
- Attendance Tracking

## Setup

### Backend
1. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

2. Install dependencies
```bash
pip install -r backend/requirements.txt
```

3. Set up environment variables
- Copy `.env.example` to `.env`
- Fill in your configuration details

4. Run the application
```bash
flask run
```

### Frontend (To be developed)
- React.js application
- State management with Redux
- Routing with React Router

## Deployment
- Backend: Heroku/AWS
- Frontend: Netlify/Vercel
- Database: PostgreSQL
