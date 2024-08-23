Ext.define('SIS.view.main.Products',{
    extend: 'Ext.grid.Panel',
    xtype: 'productlist',

    requires: [
        'SIS.store.Product',
        'SIS.view.main.controllers.ProductController'
    ],

    title: 'Products',

    store: {
        type: 'product'
    },

    selModel: {
        type: 'checkboxmodel',
        mode: 'MULTI'
    },

    columns: [
        {text: 'Name', dataIndex: 'name', flex: 2},
        {text: 'Quantity', dataIndex: 'quantity', flex: 2},
        {text: 'Price', dataIndex: 'price', flex: 2},
        {text: 'Description', dataIndex: 'description', flex: 2},
        {
            xtype: 'actioncolumn',

            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'fa fa-list',
                tooltip: 'Edit Product',
                handler: 'onEditProductClick'
            }
        ]
        },
        {
            xtype: 'actioncolumn',

            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'fa fa-trash',
                tooltip: 'Delete Product',
                handler: 'onRemoveProductClick'
            }
        ]
        }
    ],


    tbar: [
        {
            text: 'Add',
            iconCls: 'fa fa-plus',
            handler: 'onAddProductClick'
        },
        {
            text: 'Delete',
            iconCls: 'fa fa-trash',
            handler: 'onDeleteProductclick'
        }
        
    ],


    tbar: [
        {
            text: 'Add',
            iconCls: 'fa fa-plus',
            handler: 'onAddProductClick'
        },
        {
            text: 'Delete',
            iconCls: 'fa fa-trash',
            handler: 'onDeleteProductclick'
        }
    ],

    controller: 'product',

    listeners: {
        itemdblclick:'onitemSelected',
        itemdblclick: 'onItemDbClick',

    },

});