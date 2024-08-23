
Ext.define('SIS.view.main.controllers.ProductController',{

    extend: 'Ext.app.ViewController',
    alias: 'controller.product',

    onAddProductClick: function(){
        Ext.create('SIS.view.main.forms.ProductForm', {
            title: 'Add New Product',
            buttons: [
                {
                    text: 'Save',
                    handler: 'onProductSaveClick'
                }
            ]
        }).show()
    },


    onDeleteProductclick: function(){

    },


    onRemoveProductClick: function(view, recIndex, cellIndex, item, e, record) {
        var grid = this.getView();
        grid.getStore().remove(record);
        grid.getStore().sync();
        Ext.Msg.alert('Success', 'Record has been deleted successfully.'); 
    },


    onEditProductClick: function(view, recIndex, cellIndex, item, e, record) {
        var grid = this.getView();
        if (record) {
            // Automatically select the record in the grid
            //grid.getSelectionModel().select(record);

            var editWindow = Ext.create('SIS.view.main.ProductForm', {
                title: 'Edit Product',
                buttons: [
                    {
                        text: 'Save',
                        handler: 'onProductSaveClick'
                    }
                ]
            });

            var form = editWindow.down('form');
            form.loadRecord(record); // Load the record data into the form
            editWindow.show();
            grid.getStore().sync(); 
        } else {
            Ext.Msg.alert('Error', 'No record selected for editing');
        }
        
    },



    onItemSelected: function(){

    },


    onItemDbclick: function(){

    }

})