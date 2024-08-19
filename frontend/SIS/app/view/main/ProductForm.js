//form for add edtit operations
Ext.define('SIS.view.main.ProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'productform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    layout: 'fit',
    width: 400,
    modal: true,
    items: [
        {xtype: 'form',
            bodyPadding: 10,
            allowBlank: false,
            defaults: {
                anchor: '100%',
                xtype: 'textfield',
                labelWidth: 150,
                allowBlank: false
            },

            items: [
                
                {
                    fieldLabel: 'Name',
                    name: 'name',
                    emptyText: 'Name',
                    msgTarget: 'under'
                },
                {
                    fieldLabel: 'Quantity',
                    name: 'quantity',
                    emptyText: 'Quantity',
                    msgTarget: 'under'
                },
                {
                    fieldLabel: 'Price',
                    emptyText: 'Price',
                    msgTarget: 'under',
                    name: 'price'
                },
                {
                    fieldLabel:'Description',
                    name: 'description',
                    emptyText: 'Description',
                    msgTarget: 'under'
                },
                /*{
                    xtype: 'component',
                    html: [
                        '<h3>upload document </h3>'
                    ]
                }, 
                {
                    xtype: 'fileuploadfield', // Same as filefield above
                    buttonOnly: true,
                    hideLabel: true,
                    listeners: {
                        change: 'buttonOnlyChange'
                    }
                }*/
                
            ]
            
        }
    ]


});