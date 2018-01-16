/* Assumes that handsontable css and js have been loaded
<link rel="stylesheet" type="text/css" href="https://handsontable.com/static/css/main.css">
<script src="https://docs.handsontable.com/pro/bower_components/handsontable-pro/dist/handsontable.full.min.js"></script>
*/

class MyHot extends Handsontable {
    constructor(container, colHeaders, columns, data) {
        var options = {    
            data: data,
            columns: columns,
            stretchH: 'all',
            width: 806,
            autoWrapRow: true,
            height: 487,
            maxRows: 22,
            manualRowResize: true,
            manualColumnResize: true,
            rowHeaders: true,
            colHeaders: true,
            colHeaders: colHeaders,
            manualRowMove: true,
            manualColumnMove: true,
            contextMenu: true,
            filters: true,
            dropdownMenu: true
        };
        super(container, options);
        this.author = "Vijay Balasubramaniam";
        this.hotElement = container;
        this.hotElementContainer = container.parentNode;
        this.someFunction = function(value) {
            this.setDataAtCell(0, 0, value);
        }
    }
}
