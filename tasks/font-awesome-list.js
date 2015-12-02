'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('font-awesome-list', 'FontAwesome List', function() {

		var options = this.options({
			src:'./bower_components/font-awesome/scss/_icons.scss',
            dest:'./lib/font-awesome-icons.txt'
		});
		
		var getIconNames = function(src) {
			var f = grunt.file.read(src);
			f = f.substr(f.indexOf('.#{'));
			var lines = f.split("\n").filter(function(n){ return n != undefined && n != '' });
			var icons = [];
			
			for(var i =0; i < lines.length; i++) {
				var line = lines[i];
				line = line.split(':before')[0];
				line = line.split('}-')[1];
				icons.push(line);
			}
			return icons;
		};
		
		var icons = getIconNames(options.src);
		icons.sort();
        grunt.file.write(options.dest, JSON.stringify(icons));
	});
};