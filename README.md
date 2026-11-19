# Readers Haven

Readers Haven is a multi-page public library website built with HTML, CSS, and JavaScript. It introduces the library, presents book collections, explains membership options, highlights digital library services, and provides a contact page.

The project uses **Parcel** to create an optimized production build and a **multi-stage Dockerfile** to serve the built static website through **Nginx**.

## Website Pages

| Page | File | Description |
|---|---|---|
| Home | `src/index.html` | Library introduction, hero section, benefits and calls to action |
| Collections | `src/collections.html` | Fiction, non-fiction, children's books and reference books |
| Membership | `src/membership.html` | Basic, Standard and Premium plans, benefits and FAQs |
| Services | `src/services.html` | Online catalogue, e-books, study-room booking, printing, scanning and Wi-Fi |
| Contact | `src/contact.html` | Contact information and client-side contact form demo |

Shared CSS is in `styles/style.css`, while shared JavaScript is in `src/js/app.js`.

> **Note:** This is a static front-end project. The contact form currently displays a browser-side confirmation message; it does not send or store messages on a backend. Service descriptions are informational and are not connected to booking or catalogue backends.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js 22 Alpine
- Parcel 2.16.4
- Nginx 1.27 Alpine
- Docker multi-stage build
- Git and GitHub

## Project Structure

```text
readers-haven-library/
├── src/
│   ├── index.html
│   ├── collections.html
│   ├── membership.html
│   ├── services.html
│   ├── contact.html
│   └── js/
│       └── app.js
├── styles/
│   └── style.css
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── RELEASE_NOTES.md
```

## Prerequisites

- Node.js 22
- npm
- Git
- Docker Desktop or Docker Engine

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/l1f23bsse0328/readers-haven-library.git
cd readers-haven-library
```

Install dependencies:

```bash
npm ci
```

Build the production application:

```bash
npm run build
```

Parcel generates optimized production files in the `dist/` directory. All five HTML pages are included in the build.

The project does not currently define a development or start script in `package.json`. To preview the build, serve the `dist/` directory using a static HTTP server.

## Docker Implementation

The project uses a two-stage Docker build.

### Stage 1: Builder

- Base image: `node:22-alpine`
- Sets `/app` as the working directory.
- Installs dependencies using `npm ci`.
- Copies HTML source files and shared styles.
- Runs `npm run build`.

### Stage 2: Production

- Base image: `nginx:1.27-alpine`
- Copies the generated `dist/` directory into `/usr/share/nginx/html`.
- Exposes port `80`.
- Runs Nginx in the foreground.

### Build Docker Image

```bash
docker image build -t readers-haven:v2.0 .
```

### Run Docker Container

```bash
docker run -d -p 8083:80 --name readers-haven-v2 readers-haven:v2.0
```

Open the application:

http://localhost:8083

### Useful Docker Commands

View running containers:

```bash
docker ps
```

View logs:

```bash
docker logs readers-haven-v2
```

Stop container:

```bash
docker stop readers-haven-v2
```

Remove container:

```bash
docker rm readers-haven-v2
```

## Docker Hub

The production Docker image is published publicly.

**Docker Hub Image:**

`muhammadaswad/readers-haven:v2.0`

Repository:

https://hub.docker.com/r/muhammadaswad/readers-haven

Pull the image:

```bash
docker pull muhammadaswad/readers-haven:v2.0
```

Run the pulled image:

```bash
docker run -d -p 8083:80 --name readers-haven-v2 muhammadaswad/readers-haven:v2.0
```

## Git Branching and Collaboration Workflow

The project uses Git branches to organize development and GitHub Pull Requests to review and merge changes.

Branches used:

- `main` — Primary integration branch.
- `develop` — Development integration branch.
- `feature/*` — Feature-specific development.
- `release/v2.0` — Release preparation.

Typical workflow:

1. Create a feature branch.
2. Implement and commit changes.
3. Push the feature branch to GitHub.
4. Open a Pull Request.
5. Request a team review.
6. Address review feedback.
7. Merge after approval.

## Testing and Verification

The v2.0 release process included:

- Successful Parcel production build.
- Successful multi-stage Docker image build.
- Local Docker container execution.
- Testing of the five website pages.
- Publishing the v2.0 image to Docker Hub.
- Successfully pulling the published image from Docker Hub.

## Release Information

| Item | Value |
|---|---|
| Project | Readers Haven |
| Release | v2.0 |
| Release branch | `release/v2.0` |
| Docker image | `muhammadaswad/readers-haven:v2.0` |
| Production server | Nginx |
| Build tool | Parcel |

## License

No project-specific open-source license is currently declared. Please refer to the repository owner before reusing or redistributing this project.
