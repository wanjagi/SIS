Ext.define('SIS.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',

    model: 'SIS.model.Personnel',

    /*data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", registration: "sct212-0058/2017", idnumber: '36195979' },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", registration: "sct212-0058/2017", idnumber: '36195979' },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", registration: "sct212-0058/2017", idnumber: '36195979' },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", registration: "sct212-0058/2017", idnumber: '36195979' }
    ]},*/

    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/


       proxy:{
            type:'rest',
            url:'http://localhost:8000/api/personnel',
            reader:{
                type:'json',
                rootProperty:'data'
            },
            writer:{
                type:'json'
            }
        },
        autoLoad: true
});

    
