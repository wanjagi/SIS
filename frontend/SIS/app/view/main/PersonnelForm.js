//form for add edtit operations
Ext.define('SIS.view.main.PersonnelForm', {
    extend: 'Ext.window.Window',
    xtype: 'personnelform',

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
                    emptyText: 'Registration Number',
                    msgTarget: 'under',
                    name: 'registration'
                },
                {
                    fieldLabel:'ID Number',
                    name: 'idnumber',
                    emptyText: 'ID number',
                    msgTarget: 'under'
                },
                {
                    xtype: 'fileuploadfield',
                    name: 'profile_picture',
                    fieldLabel: 'Profile Picture',
                    buttonText: 'Select Image',
                    allowBlank: true
                }
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