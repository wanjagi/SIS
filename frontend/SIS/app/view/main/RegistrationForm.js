//form for add edtit operations
Ext.define('SIS.view.main.RegistrationForm', {
    extend: 'Ext.form.Panel',
    xtype: 'registrationform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    title: 'Registration Form',
    layout: 'fit',
    frame: true,
    resizable: true,
    width: 610,
    minWidth: 610,
    minHeight: 300,
    bodyPadding: 0,
    width: 400,
    modal: true,
    items: [
        {xtype: 'form',
            bodyPadding: 10,
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
                    emptyText: 'Full Name',
                    msgTarget: 'under'
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    emptyText: 'Email',
                    msgTarget: 'under',
                    vtype: 'email'
                },
                {
                    fieldLabel: 'Registration',
                    emptyText: 'Registratio Number',
                    msgTarget: 'under',
                    name: 'registration'
                },
                {
                    fieldLabel:'ID Number',
                    name: 'idnumber',
                    emptyText: 'ID number',
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
                
            ],
            buttons: [
                { 
                    text: 'Submit',
                    handler: 'onRegSaveClick' ,
                    disabled: true,
                    formBind: true

                    
                },
                { 
                    text: 'New',
                    handler: 'onNewRegClick',
                    iconCls: 'fa fa-plus'
                 }
            ]

            
        }
    ]


});