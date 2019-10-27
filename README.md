# To setup project using babel and webpack

- mkdir project_dir

- npm init -y
- npm install webpack webpack-cli --save-dev
add in to package.json file 

- npm install webpack-dev-server 

  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },

- npm install babel-core babel-loader babel-preset-env --save-dev

- create file .babelrc and add configureation for presets


- create webpack.config.js file

- npm install react-dom react  babel-preset-react --save-dev

- add   "babel": {
    "presets": ["es2015", "react"]
  },
#	into package.json file

- and add <div id="root"></div> into index.html