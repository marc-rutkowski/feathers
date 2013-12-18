module.exports = function(grunt) {
    return {
        unit: {
            dir: '<%= build_dir %>',
            src: [
                '<%= vendor_files.js %>',
                '<%= html2js.app.dest %>',
                '<%= html2js.common.dest %>',
                '<%= test_files.js %>'
            ]
        }
    }
}
