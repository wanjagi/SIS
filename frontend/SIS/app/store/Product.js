Ext.define( 'SIS.store.Product',{
    extend: 'Ext.data.Store',
    alias: 'store.product',
    storeId: 'products',

    model: 'SIS.model.Product',

    proxy:{
        type:'rest',
        url:'http://localhost:8000/api/product',
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