# 0x00. Webpack

This project provides a guide on how to set up Webpack for a basic front-end project. It covers the following topics:

1. How to setup Webpack for a basic project
2. Entry points, output, and loaders
3. How to add plugins
4. How to split your code into chunks
5. How to set up a development server

## Setup Instructions

To get started with this project, follow the steps below:

1. Clone the repository:

```
git clone https://github.com/yandah1/alx-react.git
```

2. Install the dependencies:

```
npm install
```

3. Configure Webpack by modifying the `webpack.config.js` file according to your project needs.

4. Entry points, output, and loaders:

   - Specify the entry point of your application in the configuration file.
   - Define the output directory and filename for the bundled JavaScript file.
   - Configure loaders to handle different file types (e.g., Babel for transpiling ES6).

5. Add plugins:

   - Customize your Webpack configuration by adding plugins such as HTMLWebpackPlugin for generating HTML files and injecting bundles.

6. Split your code into chunks:

   - Utilize code splitting techniques to split your JavaScript bundles into smaller chunks, improving performance and loading times.

7. Set up a development server:

   - Configure a development server to serve your bundled files locally during development.

## Usage

To build your project, run the following command:

```
npm run build
```

This will bundle your project using Webpack based on the configuration in `webpack.config.js`, and generate the bundled files in the specified output directory.

To start the development server, run the following command:

```
npm start
```

This will start the development server and allow you to view your project in a web browser. Any changes you make to your source files will automatically trigger a rebuild.

