/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SIS.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    layout: 'border',
    height: 600,
    widht: 600,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SIS.view.main.MainController',
        'SIS.view.main.MainModel',
        'SIS.view.main.List',
        'SIS.view.main.Personnel',
        'SIS.view.main.authentication.LoginForm',
        'SIS.view.main.Products',
        'SIS.view.main.authentication.SignupForm'

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
        
        
    },


    tbar:{
        xtype: 'toolbar',
        region: 'west', // Dock the toolbar to the left
        width: 100,     // Set width for the toolbar
        layout: {
            type: 'vbox', // Make toolbar items stack vertically
            align: 'right'
        },

        items: [
            {
                text: 'Logout',
                handler: function() {
                    var authtok = localStorage.getItem('authToken');
                    if (authtok) {
                        Ext.Ajax.request({
                            url: 'http://localhost:8000/api/logout',
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer ' + authtok
                            },
                            success: function(response) {
                                localStorage.removeItem('authToken');
                                Ext.Msg.alert('Success', 'Logged out successfully.');
    
                                // Redirect to the login form
                                Ext.Viewport.removeAll();
                                Ext.create({
                                    xtype: 'loginform',
                                    fullscreen: true,
                                    renderTo: Ext.getBody()
                                });
                            },
                            failure: function(response) {
                                var responseData = Ext.decode(response.responseText);
                                Ext.Msg.alert('Failure', responseData.failure || 'Log-out failed.');
                            }
                        });
                    } else {
                        Ext.Msg.alert('Failure', 'No authentication token found.');
                    }
                }
            }
        ]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'registrationform'
            
        }]
    }, {
        title: 'Registered',
        iconCls: 'fa-users',
        items: [{
            xtype: 'personnellist'
        }]
    }, {
        title: 'Products',
        iconCls: 'fa-users',
        items: [{
            xtype: 'productlist'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        items: [{
            xtype: ''
        }]
    }
    ]
});
