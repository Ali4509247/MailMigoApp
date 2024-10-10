# MailMigo
MailMigo is a full-stack email application that implements core functionalities of a email service. This web app allows users to send, receive, and view emails in a user-friendly interface.

Key Features:
* Users can compose new emails by specifying the recipient, subject, and body.
* Users can view a list of all received emails, each displaying the subject, sender, and a brief preview of the content.
* Click on an email to view its full content, along with sender details.
* Built using Spring Boot for handling API requests and managing email operations.
* Uses PostgreSQL as the database for storing emails and user information.
* Includes Docker for containerized deployment

Techstack:
Frontend: React.js with Material-UI.
Backend: Spring Boot with RESTful APIs.
Database: PostgreSQL
Other: Axios for making HTTP requests, Docker for containerization.
How to Run:
To run the project locally, you need to have Docker installed. Follow these steps:

Clone the repository.
Navigate to the root directory where docker-compose.yml is located.
Run docker-compose up to start the application.
This will start the frontend, backend, and the PostgreSQL database.
