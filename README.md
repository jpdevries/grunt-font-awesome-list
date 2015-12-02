#grunt-font-awesome-list

> Parses font-awesome icons and outputs an alphabetized Array of icon classes

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-font-awesome-list --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-font-awesome-list');
```

## Options

### src
The path to your font-awesome scss/_icons.scss file.  
Type: `String`  
Default: `'./lib/font-awesome/scss/_icons.scss'`

### dest
Filepath for where you would like your Array dumped to.  
Type: `String`  
Default: `'./temp/font-awesome-icons.txt'`

## Usage Examples

```js
'font-awesome-list':{
  list:{
    options:{
      src:'./lib/font-awesome/scss/_icons.scss',
      dest:'./temp/font-awesome-icons.txt'
    }
  }
}
```
