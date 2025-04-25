# Feedback Application

## Project Overview

The Feedback Application is a full-stack application designed for collecting user feedback. Users can submit feedback, and an admin can view all the submitted feedbacks. The application also includes a dark mode toggle for improved user experience.

## Live Link: https://sk-feedback-form.netlify.app/

---

## Project Structure

### Frontend
- **`App.jsx`**: The main React component that handles the application's frontend logic and UI.
  - Features include:
    - Feedback submission form.
    - Admin view to see all feedback.
    - Dark mode toggle.
- **`Card`**: Component to display individual feedback.
- **`Loader`**: Loading indicator for feedback fetching and submission processes.
- **`Footer`**: Footer component for the application.

### Backend
- **`app.js`**: The main Express server.
  - Routes:
    - `POST /post-feedback`: Endpoint to submit feedback, which stores data in Firestore.
    - `GET /get-feedback`: Endpoint to fetch all feedback, sorted by timestamp.
- **Firebase Configuration**: The backend connects to Firestore for storing and retrieving feedback.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Axios**: For making API calls.
- **Tailwind CSS**: For styling components with a responsive design.

### Backend
- **Node.js with Express**: For creating RESTful APIs.
- **Firebase Firestore**: For storing feedback data.
- **Dotenv**: For managing environment variables.

### Additional Libraries
- **Cors**: To allow cross-origin requests.

---

## Setup and Deployment

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Steps to Run Locally

#### Backend
1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   FIREBASE_CONFIG={"apiKey": "<API_KEY>", "authDomain": "<DOMAIN>", "projectId": "<PROJECT_ID>", "storageBucket": "<STORAGE_BUCKET>", "messagingSenderId": "<SENDER_ID>", "appId": "<APP_ID>"}
   ```
5. Start the backend server:
   ```bash
   node app.js
   ```

#### Frontend
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

### Deployment Steps

#### Backend
1. Deploy the backend to a platform like Vercel or Render.
2. Ensure the Firebase configuration and environment variables are set up on the platform.

#### Frontend
1. Deploy the frontend to a platform like Vercel, Netlify, or AWS Amplify.
2. Update the API endpoints in the frontend to point to the deployed backend URLs.

---

## Usage
1. Open the application in your browser.
2. Toggle between light and dark modes using the provided button.
3. For users:
   - Fill out the feedback form and submit feedback.
4. For admins:
   - Toggle to "Admin View" to see all feedback.

---

## Future Improvements
- Add authentication for admin access.
- Implement pagination for the feedback list.
- Enhance the UI with additional customization options.
- Add support for exporting feedback data.

