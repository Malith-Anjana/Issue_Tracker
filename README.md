# Issue Tracker

Issue Tracker is a web application designed for tracking issues, allowing users to perform CRUD operations, assign users to issues, and authenticate via Google. It is built using Next.js as the framework, Prisma for the database schema, and MySQL as the database. The MySQL database is deployed on [Aiven](https://aiven.io/), and the application itself is deployed on [Vercel](https://vercel.com/).

## Demo

You can access the live demo [here](https://issue-tracker-sable-delta.vercel.app/)

## Installation

Clone the project repository:

```git clone https://github.com/Malith-Anjana/Issue_Tracker.git```

Install dependencies:

```npm install```


## Usage

To run the project locally, use the following command:

```npm run dev```

To perform schema migration, use Prisma:

```npx prisma migrate dev```

## Features

- **CRUD Operations**: Create, Read, Update, and Delete issues.
- **User Assignment**: Assign users to specific issues for better organization and collaboration.
- **Google Authentication**: Allow users to authenticate using their Google accounts.
- **Framework**: Built with Next.js for efficient server-side rendering and routing.
- **Database Schema**: Utilizes Prisma for defining and interacting with the database schema.
- **Database Deployment**: MySQL database is deployed on Aiven for reliability and scalability.
- **Application Deployment**: Deployed on Vercel for easy hosting and continuous deployment.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact [Malith Anjana]('malithanjana97@gmail.com).
