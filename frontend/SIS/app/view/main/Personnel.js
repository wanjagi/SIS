Ext.define('SIS.view.main.Personnel',{
    extend:'Ext.grid.Panel',
    xtype:'personnellist',

    requires:[
        'SIS.store.Personnel',
        'SIS.view.main.PersonnelController'
    ],

    title:'Basic Info',

    store:{
        type:'personnel'
    },

    selModel: {
        type: 'checkboxmodel', // checkboxes for selection
        mode: 'MULTI' // multiple selections
    },

    columns:[
        {text:'Name', dataIndex:'name', flex:3},
        {text:'Email Address', dataIndex:'email', flex:3},
        {text:'Registration', dataIndex:'registration', flex:2},
        {text:'ID Number', dataIndex:'idnumber', flex:2},
        {
            xtype: 'actioncolumn',

            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'fa fa-list',
                tooltip: 'Edit Product',
                handler: 'onEditPersonnelWidgetClick'
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
                handler: 'onDeletePersonnelWidgetClick'
            }
        ]
        }

        /*{
            text: 'Select',
            xtype: 'checkcolumn',
            headerCheckbox: true,
            dataIndex: 'select',
            handler: 'onChecked'
        }*/
            
        //{text:'Date', dataIndex:'createdAt', flex:5},
        //{text:'file', dataIndex:'file', flex:5}
    ],

    tbar:[
        {
            text: 'Add New',
            iconCls: 'fa fa-plus',
            tooltip: 'Add new record',
            handler: 'onAddClick'
        },
        /*{
            text: 'Edit Selected',
            handler: 'onEditClick'
        },*/
        {
            text: 'Delete',
            iconCls: 'fa fa-trash',
            tooltip: 'Delete record',
            handler: 'onDeleteClick'
        },
        /*{
            text: 'Delete Selected',
            handler: 'onDeleteSelectedClick'
        }*/
    ],


    controller: 'personnel',


    listeners:{
        itemdblclick:'onitemSelected',
        itemdblclick: 'onItemDbClick',

    },

    signTpl: '<span style="' +
        'color:{value:sign("${red}", "${green}")}"' +
        '>{text}</span>'

});

