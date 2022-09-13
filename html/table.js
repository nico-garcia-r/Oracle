var tabledata = [{name: "Test", type: "int", value: 11}];
var table = new Tabulator("#example-table", {
    data: tabledata,           //load row data from array
    layout: "fitColumns",      //fit columns to width of table
    responsiveLayout: "hide",  //hide columns that dont fit on the table
    tooltips: true,            //show tool tips on cells
    addRowPos: "bottom",          //when adding a new row, add it to the top of the table
    history: true,             //allow undo and redo actions on the table
    pagination: "local",       //paginate the data
    displayRowsCount: 5,
    paginationSize: 5,         //allow 7 rows per page of data
    movableColumns: true,      //allow column order to be changed
    resizableRows: true,       //allow row order to be changed
    dataChanged: function (data) {
        console.log(data)
        message.commands["table"] = data;
        SendMessage();
    },
    columns: [                 //define the table columns
        { title: "Name", field: "name", editor: "input" },
        { title: "Type", field: "type", width: 95, editor: "select", editorParams: { values: ["INTEGER", "VARCHAR", "BOOLEAN","DATE", "SYS_REFCURSOR"] } },
        { title: "Value", field: "value", editor: "input" },
        { title: "Output", field: "output", editor: "tick" }
    ],
});