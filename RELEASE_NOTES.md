# Readers Haven — Release v2.0

## Release Overview
This release contains the production-ready Readers Haven website with Docker multi-stage build configuration.

## Features and Improvements
- Configured Parcel production build.
- Implemented multi-stage Docker build.
- Used Node.js 22 Alpine for the build stage.
- Used Nginx Alpine for production hosting.
- Added Docker ignore configuration.
- Organized website source files and styles.

## Docker Information
- Docker Image: `muhammadaswad/readers-haven:v2.0`
- Image ID: `762d3fca5db3`
- Image Size: 73.7 MB
- Container Name: `readers-haven-v2`
- Host Port: `8083`

## Verification
- Docker image build completed successfully.
- Production container started successfully.
- Website pages tested locally.
- Docker Hub image successfully pulled and verified.

## Release Branch
`release/v2.0`

## Target Branch
`main`