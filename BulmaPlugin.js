/*
Created by Matjaz Trontelj for Pinegrow Web Editor
Licensed under MIT license
Feel free to use the code in your own Pinegrow plugins
 */
$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {
        var f = new PgFramework('bulma', 'Bulma');
        f.type="bulma";
        f.allow_single_type = true;

        f.description = '<a href="http://bulma.io/">Bulma</a> starting pages and components. Templates are based on Bulma 0.63.'
        f.author = 'Matt Savard';

        f.ignore_css_files = [/(^|\/)bulma\.(css)/i, /(^|\/)bulma\.min\.(css|less)/i, /(^|\/)font(\-|)awesome(\.min|)\.(css|less)/i];
        
        f.detect_async = function (crsaPage, done) {
            crsaPage.stylesheetsThatContain(/bulma/i, /(^|\/)bulma(\.min|)\.(css)/i, function(list) {
                done(list.length > 0)
            });
        }

        f.setScriptFileByScriptTagId('plugin-bulma'); //get url if script is included directly into edit.html
        pinegrow.addFramework(f,5);

        var bm = new PgToggleButtonMaker();

        var textColorOptions = [
            {key: 'has-text-white',name:'White',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,100%);"></div>'},
            {key: 'has-text-black',name:'Black',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,4%);"></div>'},
            {key: 'has-text-light',name:'Light',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,96%);"></div>'},
            {key: 'has-text-dark',name:'Dark',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,21%);"></div>'},
            {key: 'has-text-primary',name:'Primary',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(171,100%,41%);"></div>'},
            {key: 'has-text-info',name:'Info',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(204,86%,53%);"></div>'},
            {key: 'has-text-success',name:'Success',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(141,71%,48%);"></div>'},
            {key: 'has-text-warning',name:'Warning',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(48,100%,67%);"></div>'},
            {key: 'has-text-danger',name:'Danger',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(348,100%,61%);"></div>'},
            {key: 'has-text-black-bis',name:'Midnight Black',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,7%);"></div>'},
            {key: 'has-text-black-ter',name:'Dark Black',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,14%);"></div>'},
            {key: 'has-text-grey-darker',name:'Darker Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,21%);"></div>'},
            {key: 'has-text-grey-dark',name:'Dark Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,29%);"></div>'},
            {key: 'has-text-grey',name:'Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,48%);"></div>'},
            {key: 'has-text-grey-light',name:'Light Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,71%);"></div>'},
            {key: 'has-text-grey-lighter',name:'Lighter Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,86%);"></div>'},
            {key: 'has-text-white-ter',name:'Lightest Grey',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,96%);"></div>'},
            {key: 'has-text-white-bis',name:'Almost White',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,98%);"></div>'}
        ];

        var bgColorOptions = [
            {key: 'is-white',name:'White',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,100%);"></div>'},
            {key: 'is-light',name:'Light',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,96%);"></div>'},
            {key: 'is-dark',name:'Dark',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,21%);"></div>'},
            {key: 'is-black',name:'Black',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(0,0%,4%);"></div>'},
            {key: 'is-primary',name:'Primary',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(171,100%,41%);"></div>'},
            {key: 'is-link',name:'Info',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(217,71%,53%);"></div>'},
            {key: 'is-info',name:'Info',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(204,86%,53%);"></div>'},
            {key: 'is-success',name:'Success',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(141,71%,48%);"></div>'},
            {key: 'is-warning',name:'Warning',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(48,100%,67%);"></div>'},
            {key: 'is-danger',name:'Danger',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(348,100%,61%);"></div>'},
        ];

        var primaryColorOptions = [
            {key: 'is-primary',name:'Primary',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(171,100%,41%);"></div>'},
            {key: 'is-info',name:'Info',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(204,86%,53%);"></div>'},
            {key: 'is-success',name:'Success',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(141,71%,48%);"></div>'},
            {key: 'is-warning',name:'Warning',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(48,100%,67%);"></div>'},
            {key: 'is-danger',name:'Danger',html:'<div class="pg-tb-button" style="border-radius:3px;width:18px;height:16px;background-color:hsl(348,100%,61%);"></div>'},
        ];
        

        
        // Button
        var button = new PgComponentType('Bulma.button', 'Button');
        button.selector = '.button';
        button.parent_selector = 'body';
        button.code = '<button class="button">Button</button>';
        button.tags = 'major';
        button.sections = {
            'Bulma.button' : {
                name : 'Button options',
                fields : {
                    'Bulma.button.value' :{
                        type: 'text',
                        name: 'Text',
                        action: 'element_html'
                    },
                    'Bulma.button.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Button size',
                        options: [
                            {key: 'is-small', name: "Small",html: bm.makeText('S',       { attributes: { 'title': 'Small'  } })},
                            {key: 'is-medium', name: "Medium",html: bm.makeText('M',       { attributes: { 'title': 'Medium'  } })},
                            {key: 'is-large', name: "Large",html: bm.makeText('L',       { attributes: { 'title': 'Large'  } })}
                        ]
                    },
                    'Bulma.button.color' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Button Color',
                        toggle_buttons: true,
                        options: bgColorOptions
                    },
                    'Bulma.button.outlined' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-outlined',
                        name: 'outlined?'
                    },
                    'Bulma.button.inverted' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-inverted',
                        name: 'inverted?'
                    },
                    'Bulma.button.rounded' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-rounded',
                        name: 'Rounded?'
                    },
                    'Bulma.button.static' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-static',
                        name: 'Static?'
                    },
                    'Bulma.button.states' : {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Button State',
                        options: [
                            {key: 'is-active', name: 'Active', html: bm.makeText('Active',       { attributes: { 'title': 'Active'  } })},
                            {key: 'is-hovered', name: 'Hovered', html: bm.makeText('Hover',       { attributes: { 'title': 'Hovered'  } })},
                            {key: 'is-focused', name: 'Focused', html: bm.makeText('Focus',       { attributes: { 'title': 'Focused'  } })},
                            {key: 'is-loading', name: 'Loading', html: bm.makeText('Load',       { attributes: { 'title': 'Loading'  } })}
                        ]
                    },
                    'Bulma.button.disabled' :{
                        type: 'checkbox',
                        action: 'element_attribute',
                        attribute: 'disabled',
                        name: 'Disabled?',
                        value: 'disabled'
                    }
                    
                }
            }
        };
        f.addComponentType(button);

        //Column
        var column = new PgComponentType('Bulma.column', 'Column');
        column.selector = '.column';
        column.parent_selector = '.columns';
        column.preview_image = 'columns.png';
        column.preview_size = 'big';
        column.code = '<div class="column"><p>Text in a column</p></div>';
        column.tags = 'major';
        column.sections = {
            'Bulma.column' : {
                name : 'Column options',
                fields : {
                    'Bulma.column.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Column size',
                        options: [
                            {key: 'is-1', name: "1"},
                            {key: 'is-2', name: "2"},
                            {key: 'is-3', name: "3"},
                            {key: 'is-4', name: "4"},
                            {key: 'is-5', name: "5"},
                            {key: 'is-6', name: "6"},
                            {key: 'is-7', name: "7"},
                            {key: 'is-8', name: "8"},
                            {key: 'is-9', name: "9"},
                            {key: 'is-10', name: "10"},
                            {key: 'is-11', name: "11"},
                            {key: 'is-one-quarter', name: "1/4"},
                            {key: 'is-half', name: "1/2"},
                            {key: 'is-three-quarters', name: "3/4"},
                            {key: 'is-one-third', name: "1/3"},
                            {key: 'is-two-thirds', name: "2/3"},
                            {key: 'is-one-fifth', name: "1/5"},
                            {key: 'is-two-fifths', name: "2/5"},
                            {key: 'is-three-fifths', name: "3/5"},
                            {key: 'is-four-fifths', name: "4/5"}

                        ]
                    },
                    'Bulma.column.offset' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Column offset',
                        options: [
                            {key: 'is-offset-1', name: "1"},
                            {key: 'is-offset-2', name: "2"},
                            {key: 'is-offset-3', name: "3"},
                            {key: 'is-offset-4', name: "4"},
                            {key: 'is-offset-5', name: "5"},
                            {key: 'is-offset-6', name: "6"},
                            {key: 'is-offset-7', name: "7"},
                            {key: 'is-offset-8', name: "8"},
                            {key: 'is-offset-9', name: "9"},
                            {key: 'is-offset-10', name: "10"},
                            {key: 'is-offset-11', name: "11"},
                            {key: 'is-offset-one-quarter', name: "1/4"},
                            {key: 'is-offset-half', name: "1/2"},
                            {key: 'is-offset-three-quarters', name: "3/4"},
                            {key: 'is-offset-one-third', name: "1/3"},
                            {key: 'is-offset-two-thirds', name: "2/3"},
                            {key: 'is-offset-one-fifth', name: "1/5"},
                            {key: 'is-offset-two-fifths', name: "2/5"},
                            {key: 'is-offset-three-fifths', name: "3/5"},
                            {key: 'is-offset-four-fifths', name: "4/5"}

                        ]
                    },
                    'Bulma.column.narrow' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-narrow',
                        name: 'Narrow?'
                    }
                    
                }
            }
        };
        f.addComponentType(column);
        
        // Columns
        var columns = new PgComponentType('Bulma.columns', 'Columns');
        columns.selector = '.columns';
        columns.parent_selector = 'body, .container,.section';
        columns.preview_image = 'columns.png';
        columns.preview_size = 'big';
        columns.action_menu = {
            add: ['Bulma.column']
        };
        columns.code = '<div class="columns"><div class="column"><p>First column</p></div><div class="column"><p>Second Column</p></div></div>';
        columns.tags = 'major';
        columns.sections = {
            'Bulma.columns' : {
                name : 'Columns options',
                fields : {
                    
                    'Bulma.columns.mobile' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-mobile',
                        name: 'Mobile columns?'
                    },
                    'Bulma.columns.gap' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-gapless',
                        name: 'Gapless?'
                    },
                    'Bulma.columns.multiline' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-multiline',
                        name: 'Multiline?'
                    },
                    'Bulma.columns.centered' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-centered',
                        name: 'Centered?'
                    }
                    
                }
            }
        };
        f.addComponentType(columns);

        // container
        var container = new PgComponentType('Bulma.container','Container');
        container.selector = ".container";
        container.parent_selector = ".section, div, body";
        container.code='<div class="container"></div>';

        container.sections = {
            'Bulma.container' : {
                name: 'Container options',
                fields: {
                    'Bulma.container.fluid' :{
                         type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-fluid',
                        name: 'Fluid?'
                    },
                    'Bulma.container.breakpoint' :{
                        type: 'select',
                        show_empty: true,
                        toggle_buttons: true,
                        action: 'apply_class',
                        name: 'Breakpoint',
                        options: [
                            {key:'is-widescreen',name:'Widescreen', html: bm.makeText('Wide',       { attributes: { 'title': 'Widescreen'  } })},
                            {key:'is-fullhd',name:'Full HD', html: bm.makeText('Full HD',       { attributes: { 'title': 'Full HD'  } })}
                        ]
                    }
                }
            }
        };
        f.addComponentType(container);

        // level
        var level = new PgComponentType("Bulma.level","Level");
        level.selector = '.level';
        level.parent_selector = '',
        level.code = '<nav class="level">\
  <p class="level-item has-text-centered">\
    <a class="link is-info">Home</a>\
  </p>\
  <p class="level-item has-text-centered">\
    <a class="link is-info">Menu</a>\
  </p>\
  <p class="level-item has-text-centered is-uppercase has-text-weight-bold is-size-1">\
    Bulma\
  </p>\
  <p class="level-item has-text-centered">\
    <a class="link is-info">Reservations</a>\
  </p>\
  <p class="level-item has-text-centered">\
    <a class="link is-info">Contact</a>\
  </p>\
</nav>';
        level.tags = "major";
        level.action_menu = {
            add: ['Bulma.levelitem']
        };
        level.sections = {
            'Bulma.level': {
                name: 'Level Options',
                fields: {
                    'Bulma.level.mobile': {
                        type: 'checkbox',
                        action: 'apply_class',
                        value: 'is-mobile',
                        name: 'Mobile?'
                    },
                    'Bulma.level.left': {
                        type: 'checkbox',
                        value: 1,
                        name: 'Add Left Side',
                        action: 'custom',
                        get_value: function (pgel) {
                            return pgel.find('div.level-left').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            var pgb = pgel.findOne('div.level-left');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<div class="level-left"></div>').html('<div class="level-item">Level Item</div>');
                                    pgel.prepend(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                    },
                    'Bulma.level.right': {
                        type: 'checkbox',
                        value: 1,
                        name: 'Add Right Side',
                        action: 'custom',
                        get_value: function (pgel) {
                            return pgel.find('div.level-right').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            var pgb = pgel.findOne('div.level-right');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<div class="level-right"></div>').html('<div class="level-item">Level Item</div>');
                                    pgel.append(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(level);

        // level item
        var levelitem = new PgComponentType("Bulma.levelitem","Level Item");
        levelitem.selector = '.level-item';
        levelitem.parent_selector = '.level, .level-right, .level-left';
        levelitem.code = '<div class="level-item"><p>Item contents</p></div>';
        f.addComponentType(levelitem);

        // footer
        var footer = new PgComponentType("Bulma.footer","Footer");
        footer.selector = '.footer';
        footer.parent_selector = 'body';
        footer.code = '<footer class="footer"><div class="container"><div class="content has-text-centered"><p><strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p></div></div><footer>';
        f.addComponentType(footer);

        // box
        var box = new PgComponentType("Bulma.box","Box");
        box.selector = '.box';
        box.parent_selector = 'body';
        box.code = '<div class="box"></div>';
        f.addComponentType(box);

        // breadcrumb link
        var breadcrumbLink = new PgComponentType("Bulma.breadcrumbLink","Breadcrumb Link");
        breadcrumbLink.selector = 'nav.breadcrumb>ul>li';
        breadcrumbLink.parent_selector = 'nav.breadcrumb>ul';
        breadcrumbLink.code = '<li class="is-active"><a href="#">Link Item</a></li>';
        breadcrumbLink.sections = {
            'Bulma.breadcrumbLink': {
                name: 'Item Options',
                fields: {
                    'Active' :{
                        type:'checkbox',
                        name: 'Active?',
                        value:'is-active',
                        action:'apply_class'
                    }
                }
            }
        }
        f.addComponentType(breadcrumbLink);


        // menu
        var menu = new PgComponentType("Bulma.menu","Menu");
        menu.selector = '.menu';
        menu.parent_selector = 'body';
        menu.code = '<aside class="menu">\
  <p class="menu-label">\
    General\
  </p>\
  <ul class="menu-list">\
    <li><a>Dashboard</a></li>\
    <li><a>Customers</a></li>\
  </ul>\
  <p class="menu-label">\
    Administration\
  </p>\
  <ul class="menu-list">\
    <li><a>Team Settings</a></li>\
    <li>\
      <a class="is-active">Manage Your Team</a>\
      <ul>\
        <li><a>Members</a></li>\
        <li><a>Plugins</a></li>\
        <li><a>Add a member</a></li>\
      </ul>\
    </li>\
    <li><a>Invitations</a></li>\
    <li><a>Cloud Storage Environment Settings</a></li>\
    <li><a>Authentication</a></li>\
  </ul>\
  <p class="menu-label">\
    Transactions\
  </p>\
  <ul class="menu-list">\
    <li><a>Payments</a></li>\
    <li><a>Transfers</a></li>\
    <li><a>Balance</a></li>\
  </ul>\
</aside>';
        f.addComponentType(menu);


        // icon
        var icon = new PgComponentType("Bulma.icon","Icon");
        icon.selector = '.icon';
        icon.parent_selector = 'body';
        icon.code = '<span class="icon"><i class="fas fa-users"></i></span>';
        icon.sections = {
            'Bulma.icon': {
                name: 'Icon Options',
                fields: {
                    'Bulma.icon.color': {
                        type: 'select',
                        action: 'apply_class',
                        name: 'Color',
                        toggle_buttons: true,
                        options: textColorOptions,
                        show_empty: true
                    },
                    'Bulma.icon.size': {
                        type: 'select',
                        action: 'apply_class',
                        name: 'Container Size',
                        show_empty: true,
                        toggle_buttons: true,
                        options: [
                            {key:'is-small',name:'Small',html: bm.makeText('S')},
                            {key:'is-medium',name:'Medium', html: bm.makeText('M')},
                            {key:'is-large',name:'Large', html: bm.makeText('L')},
                        ]
                    },
                    'Bulma.icon.position': {
                        type: 'select',
                        action: 'apply_class',
                        name: 'Position',
                        show_empty: true,
                        toggle_buttons: true,
                        options: [
                            {key:'is-left',name:'Left', html: bm.makeIcon('float-left')},
                            {key:'is-right',name:'Right', html: bm.makeIcon('float-right')}                            
                        ]
                    }
                }
            }
        };
        f.addComponentType(icon);


        // media element
        var mediaobject = new PgComponentType('Bulma.mediaobject','Media Object');
        mediaobject.selector='.media';
        mediaobject.code='<article class="media">\
  <figure class="media-left">\
    <p class="image is-64x64">\
      <img src="https://bulma.io/images/placeholders/128x128.png">\
    </p>\
  </figure>\
  <div class="media-content">\
    <div class="content">\
      <p>\
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>\
        <br>\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\
      </p>\
    </div>\
    <nav class="level is-mobile">\
      <div class="level-left">\
        <a class="level-item">\
          <span class="icon is-small"><i class="fas fa-reply"></i></span>\
        </a>\
        <a class="level-item">\
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>\
        </a>\
        <a class="level-item">\
          <span class="icon is-small"><i class="fas fa-heart"></i></span>\
        </a>\
      </div>\
    </nav>\
  </div>\
  <div class="media-right">\
    <button class="delete"></button>\
  </div>\
</article>';
f.addComponentType(mediaobject);


        // breadcrumb
        var breadcrumb = new PgComponentType('Bulma.breadcrumb', 'Breadcrumbs');
        breadcrumb.selector = '.breadcrumb';
        breadcrumb.parent_selector = 'body';
        breadcrumb.code = '<nav class="breadcrumb" aria-label="breadcrumbs"><ul><li><a href="#"><span class="icon is-small"><i class="fas fa-home"></i></span><span>Bulma</span></a></li><li><a href="#">Documentation</a></li><li><a href="#">Components</a></li><li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li></ul></nav';
        breadcrumb.tags = 'major';
        breadcrumb.action_menu = {
            add: ['Bulma.breadcrumbLink'],
            'on_add' : function(pgel, pgnew, newdef,prepend){
                var pgul = pgel.findOne('> ul');
                if (!pgul){
                    pgul=pgCreateNodeFromHtml('<ul><li><a href="#">Link</a></li></ul>');
                    pgel.append(pgul);
                } else {
                    pgul.append(pgnew);
                }
                
            }
        };
        breadcrumb.sections = {
            'Bulma.breadcrumb' : {
                name : 'Breadcrumb options',
                fields : {
                    'Bulma.breadcrumb.position' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Alignment',
                        options: [
                            {key: '', name: "Left", html: bm.makeIcon('align-left')},
                            {key: 'is-centered', name: "Centered", html: bm.makeIcon('align-center')},
                            {key: 'is-right', name: "Right", html: bm.makeIcon('align-right')}                            
                        ]
                    },
                    'Bulma.breadcrumb.seperator' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Seperator',
                        options: [
                            {key: 'has-arrow-separator', name: "Arrow"},
                            {key: 'has-bullet-separator', name: "Bullet"},                            
                            {key: 'has-dot-separator', name: "Dot"},                            
                            {key: 'has-succeeds-separator', name: "Succeeds"}                            
                        ]
                    },
                    'Bulma.breadcrumb.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Size',
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},                            
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}                            
                        ]
                    }
                    
                }
            }
        };
        f.addComponentType(breadcrumb);

        // hero
        var hero = new PgComponentType('Bulma.hero','Hero');
        hero.selector = '.hero';
        hero.parent_selector = 'body';
        hero.code = '<section class="hero"><div class="hero-body"><div class="container"><h1 class="title">Hero title</h1><h2 class="subtitle">Hero subtitle</h2></div></div></section>';
        hero.tags = 'major';
        hero.sections = {
            'Bulma.hero' : {
                name : 'Hero options',
                fields : {
                    'Color': {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Color',
                        toggle_buttons: true,
                        options: bgColorOptions
                    },
                    'Bold': {
                        type: 'checkbox',
                        action: 'apply_class',
                        value: 'is-bold',
                        name: 'Gradient?'
                    },
                    'Size': {
                        type: 'select',
                        action: 'apply_class',
                        name: 'Size',
                        show_empty: true,
                        toggle_buttons: true,
                        options: [
                            {key: 'is-small',name:'Small', html: bm.makeText('S')},
                            {key: 'is-medium',name:'Medium', html: bm.makeText('M')},
                            {key: 'is-large',name:'Large', html: bm.makeText('L')},
                            {key: 'is-fullheight',name:'Full Height', html: bm.makeText('Full')},
                        ]
                    },
                    'Bulma.header': {
                        type: 'checkbox',
                        value: 1,
                        name: 'Header?',
                        action: 'custom',
                        get_value: function (pgel) {
                            return pgel.find('div.hero-head').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            var pgb = pgel.findOne('div.hero-head');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<div class="hero-head"></div>').html('<nav class="navbar"><div class="container"><div class="navbar-brand"><a class="navbar-item"><img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"></a><span class="navbar-burger burger" data-target="navbarMenuHeroA"><span></span><span></span><span></span></span></div><div id="navbarMenuHeroA" class="navbar-menu"><div class="navbar-end"><a class="navbar-item is-active">Home</a><a class="navbar-item">Examples</a><a class="navbar-item">Documentation</a><span class="navbar-item"><a class="button is-primary is-inverted"><span class="icon"><i class="fab fa-github"></i></span><span>Download</span></a></span></div></div></div></nav>');
                                    pgel.prepend(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                    },
                    'Bulma.footer': {
                        type: 'checkbox',
                        value: 1,
                        name: 'Footer?',
                        action: 'custom',
                        get_value: function (pgel) {
                            return pgel.find('div.hero-foot').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            var pgb = pgel.findOne('div.hero-foot');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<div class="hero-foot"></div>').html('<nav class="tabs"><div class="container"><ul><li class="is-active"><a>Overview</a></li><li><a>Modifiers</a></li><li><a>Grid</a></li><li><a>Elements</a></li><li><a>Components</a></li><li><a>Layout</a></li></ul></div></nav>');
                                    pgel.append(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                                        
                    }
                }
            }
        };
        f.addComponentType(hero);

        // section
        var section = new PgComponentType('Bulma.section','Section');
        section.selector=".section";
        section.parent_selector='body';
        section.code='<section class="section"><div class="container"><h1 class="title">Section</h1><h2 class="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you\'re currently reading</h2></div></section>';
        section.sections = {
            'Bulma.section' : {
                name : 'Section options',
                fields : {
                    'Spacing': {
                        type: 'select',
                        name: 'Spacing',
                        show_empty: true,
                        toggle_buttons: true,
                        action: 'apply_class',
                        options: [
                            {key:'is-medium',name:'Medium', html: bm.makeText('Med')},
                            {key:'is-large',name:'Large', html: bm.makeText('Lg')}
                        ]
                    }

                }
            }
        };
        f.addComponentType(section);


        // card
        var card = new PgComponentType('Bulma.card', 'Card',{
        'selector': '.card',
        'preview_image': 'card.png',
        action_menu : {
            add: ['Bulma.cardHeader','Bulma.cardFooter'],
            'on_add' : function(pgel, pgnew, newdef,prepend){
                if(newdef.type == 'Bulma.cardHeader'){
                    pgel.prepend(pgnew);    
                } else {
                    pgel.append(pgnew);
                }
            }
        },
        'code': '<div class="card">\
        <header class="card-header">\
    <p class="card-header-title">\
      Component\
    </p>\
    <a href="#" class="card-header-icon" aria-label="more options">\
      <span class="icon">\
        <i class="fas fa-angle-down" aria-hidden="true"></i>\
      </span>\
    </a>\
  </header>\
  <div class="card-image">\
    <figure class="image is-4by3">\
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">\
    </figure>\
  </div>\
  <div class="card-content">\
    <div class="media">\
      <div class="media-left">\
        <figure class="image is-48x48">\
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">\
        </figure>\
      </div>\
      <div class="media-content">\
        <p class="title is-4">John Smith</p>\
        <p class="subtitle is-6">@johnsmith</p>\
      </div>\
    </div>\
    <div class="content">\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.\
      <a href="#">#css</a> <a href="#">#responsive</a>\
      <br>\
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>\
    </div>\
      <div class="content">\
          <p class="title">\
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\
    </p>\
    <p class="subtitle">\
      Jeff Atwood\
    </p>\
      </div>\
  </div>\
        <footer class="card-footer">\
    <a href="#" class="card-footer-item">Save</a>\
    <a href="#" class="card-footer-item">Edit</a>\
    <a href="#" class="card-footer-item">Delete</a>\
  </footer>\
</div>',
        tags : 'major',
        'sections' : {
            'Bulma.card' : {
                name : 'Card options',
                fields : {
                    header:{
                        type: 'checkbox',
                        name: 'Header?',
                        value: '1',
                        action: 'custom' ,
                        get_value: function (pgel) {
                            return pgel.find('header.card-header').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            //crsaWillChangeDom();
                            var pgb = pgel.findOne('header.card-header');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<header class="card-header"></header>').html('<header class="card-header"><p class="card-header-title">Component</p><a href="#" class="card-header-icon" aria-label="more options"><span class="icon"><i class="fas fa-angle-down" aria-hidden="true"></i></span></a></header>');
                                    pgel.prepend(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                    },
						footer: {
							type: 'checkbox',
							name: 'Footer?',
							value: 1,
							action: 'custom',
								get_value: function (pgel) {
										 return pgel.find('footer.card-footer').length > 0 ? "1" : null;
									},
									set_value: function (pgel, value, values, oldValue, eventType) {
										 //crsaWillChangeDom();
										 var pgb = pgel.findOne('footer.card-footer');
										 if (value) {
											  if (!pgb) {
													pgb = pgCreateNodeFromHtml('<footer class="card-footer"></footer>').html('<a href="#" class="card-footer-item">Save</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a>');
													pgel.append(pgb);
											  }
										 } else {
											  pgb.remove();
										 }
										 return value;
									}
							}
                }
            }
  			}
        
    });
    f.addComponentType(card);

        // card header
        var cardHeader = new PgComponentType('Bulma.cardHeader','Card Header');
        cardHeader.selector = '.card-header';
        cardHeader.parent_selector = '.card';
        cardHeader.code = '<header class="card-header"><div class="card-header-title">Header title</div><a href="#" class="card-header-icon" aria-label="more options"><span class="icon"><i class="fas fa-angle-down" aria-hidden="true"></i></span></a></header>';
         f.addComponentType(cardHeader);

        // card footer
        var cardFooter = new PgComponentType('Bulma.cardFooter','Card Footer');
        cardFooter.selector = '.card-footer';
        cardFooter.parent_selector = '.card';
        cardFooter.code = '<footer class="card-footer"><a href="#" class="card-footer-item">Save</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer>';
         f.addComponentType(cardFooter);

         // common settings
          var def_all = new PgComponentType('Bulma.all', 'All elements', {
            selector : function(pgel) { return true },
            name : 'Text',
            display_name : 'tag',
            priority : 2001,
            sections : {
                textweight : {
                    name: "Text Options",
                    fields: {
                        weight : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Text weight',
                        options: [
                            {key: 'has-text-weight-light', name: "Light"},
                            {key: 'has-text-weight-normal', name: "Normal"},
                            {key: 'has-text-weight-semibold', name: "Semibold"},
                            {key: 'has-text-weight-bold', name: "Bold"}                            
                        ]
                    },
                    textcase : {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Text Case',
                        options: [
                            {key: 'is-uppercase',name:'Uppercase', html: bm.makeIcon('Transform-uppercase',       { attributes: { 'title': 'Uppercase'  } })},
                            {key: 'is-lowercase',name:'Lowercase', html: bm.makeIcon('Transform-lowercase',       { attributes: { 'title': 'Lowercase'  } })},
                            {key: 'is-capitalized',name:'Capitalized', html: bm.makeIcon('sentence-case',       { attributes: { 'title': 'Capitalized'  } })},
                            {key: 'is-italic',name:'Italic', html: bm.makeIcon('style_italic',       { attributes: { 'title': 'Italic'  } })}
                        ]
                    },
                    alignment: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Text Alignment',
                        options: [
                            {key: 'has-text-left',name:'Left', html: bm.makeIcon('align-left')},
                            {key: 'has-text-right',name:'Right', html: bm.makeIcon('align-right')},
                            {key: 'has-text-centered',name:'Centered', html: bm.makeIcon('align-center')},
                            {key: 'has-text-justified',name:'Justified', html: bm.makeIcon('align-full')}
                        ]
                    },
                     color: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Text Color',
                        toggle_buttons: true,
                        options: textColorOptions
                    },
                    size: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Text Size',
                        options: [
                            {key: 'is-size-1',name:'1 (big)'},
                            {key: 'is-size-2',name:'2'},
                            {key: 'is-size-3',name:'3'},
                            {key: 'is-size-4',name:'4'},
                            {key: 'is-size-5',name:'5'},
                            {key: 'is-size-6',name:'6'},
                            {key: 'is-size-7',name:'7 (small)'},
                            
                        ]
                    }
                }
            },
            Helpers : {
                name: 'Helpers',
                fields: {
                    float: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Float',
                        options: [
                            {key: 'is-pulled-left',name:'Pull Left', html: bm.makeIcon('float-left',       { attributes: { 'title': 'Pull left'  } })},
                            {key: 'is-clearfix',name:'Clear', html: bm.makeIcon('float',       { attributes: { 'title': 'Clear fix'  } })},
                            {key: 'is-pulled-right',name:'Pull Right', html: bm.makeIcon('float-right',       { attributes: { 'title': 'Pull right'  } })}
                        ]
                    },
                    margin: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Spacing',
                        options: [
                            {key: 'is-marginless',name:'No Margins'},
                            {key: 'is-paddingless',name:'No Padding'}
                        ]
                    },
                    other: {
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Other',
                        options: [
                            {key: 'is-overlay',name:'Overlay'},
                            {key: 'is-clipped',name:'Clipped'},
                            {key: 'is-radiusless',name:'No Radius'},
                            {key: 'is-shadowless',name:'No Shadow'},
                            {key: 'is-unselectable',name:'Unselectable'},
                            {key: 'is-invisible',name:'Hidden'}
                        ]
                    }
                }
            }
            
            }
        
        });
        f.addComponentType(def_all);

    

        // message
        var message = new PgComponentType('Bulma.message', 'Message');
        message.selector = '.message';
        message.parent_selector = 'body';
        message.code = '<article class="message">\
  <div class="message-header">\
    <p>Hello World</p>\
    <button class="delete" aria-label="delete"></button>\
  </div>\
  <div class="message-body">\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\
  </div>\
</article>';
        message.tags = 'major';
        message.sections = {
            'Bulma.message' : {
                name : 'Message options',
                fields : {
                    'Bulma.message.color' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Message color',
                        toggle_buttons: true,
                        options: bgColorOptions
                    },
                    'Bulma.message.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Message size',
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    },
                    'Bulma.message.header' : {
                        type: 'checkbox',
                        name: 'Header?',
                        value: '1',
                        action: 'custom' ,
                        get_value: function (pgel) {
                            return pgel.find('div.message-header').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            var pgb = pgel.findOne('div.message-header');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<div class="message-header"></div>').html('<p>change me</p><button class="delete" aria-label="delete"></button>');
                                    pgel.prepend(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                    }
                    
                }
            }
        };
        f.addComponentType(message);

        // tabs
        var tabs = new PgComponentType('Bulma.tabs', 'Tabs');
        tabs.selector = '.tabs';
        tabs.parent_selector = 'body';
        tabs.action_menu = {
            add: ['Bulma.tab', 'Bulma.icon.tab'],
            'on_add' : function(pgel, pgnew, newdef,prepend){
                var pgul = pgel.findOne('> ul');
                if (!pgul){
                    pgul=pgCreateNodeFromHtml('<ul><li><a href="#">Tab Link</a></li></ul>');
                    pgel.append(pgul);
                } else {
                    pgul.append(pgnew);
                }
                
            }
        };
        tabs.preview_image = 'tabs.png';
        tabs.preview_size = 'big';
        tabs.code = '<div class="tabs">\
  <ul>\
    <li class="is-active"><a><span class="icon is-small"><i class="fas fa-image"></i></span><span>Pictures</span></a></li>\
    <li><a>Music</a></li>\
    <li><a>Videos</a></li>\
    <li><a>Documents</a></li>\
  </ul>\
</div>';
        tabs.tags = 'major';
        tabs.sections = {
            'Bulma.tabs' : {
                name : 'Tabs options',
                fields : {
                    'Bulma.tabs.alignment' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Tabs Alignment',
                        options: [
                            {key: '', name: "Left", html: bm.makeIcon('align-left')},
                            {key: 'is-centered', name: "Center", html: bm.makeIcon('align-center')},
                            {key: 'is-right', name: "Right", html: bm.makeIcon('align-right')}
                        ]
                    },
                    'Bulma.tabs.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Tabs size',
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    },
                    'Bulma.tabs.boxed' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-boxed',
                        name: 'Boxed tabs?'
                    },
                    'Bulma.tabs.toggled' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-toggle',
                        name: 'Toggled tabs?'
                    },
                    'Bulma.tabs.rounded' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-toggle-rounded',
                        name: 'Rounded tabs?'
                    },
                    'Bulma.tabs.fullwiddth' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'is-fullwidth',
                        name: 'Full width tabs?'
                    }                   
                }
            }
        };
        f.addComponentType(tabs);

        // table row
        var row = new PgComponentType("Bulma.row","Insert Row");
        row.selector = 'tbody';
        row.parent_selector = 'table';
        row.code = '<tr></tr>';
        f.addComponentType(row);

        // tab
        var tab = new PgComponentType("Bulma.tab","Insert Tab");
        tab.selector = '.tab';
        tab.parent_selector = '.tabs';
        tab.code = '<li><a href="#">Link Item</a></li>';
        f.addComponentType(tab);

        // icon tab
        var icontab = new PgComponentType("Bulma.icon.tab","Insert Icon Tab");
        icontab.selector = '.tab';
        icontab.parent_selector = '.tabs';
        icontab.code = '<li><a href="#"><span class="icon is-small"><i class="fas fa-image"></i></span><span>Tab Item</span></a></li>';
        f.addComponentType(icontab);

        // image
        var image = new PgComponentType('Bulma.image', 'Image');
        image.selector = '.image';
        image.parent_selector = 'body';
        image.code = '<figure class="image"><img src="https://bulma.io/images/placeholders/128x128.png"></figure>';
        image.tags = 'major';
        image.sections = {
            'Bulma.image' : {
                name : 'Image options',
                fields : {
                    'Bulma.image.size' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Image Size',
                        options: [
                            {key: 'is-16x16', name: "16x16"},
                            {key: 'is-24x24', name: "24x24"},
                            {key: 'is-32x32', name: "32x32"},
                            {key: 'is-48x48', name: "48x48"},
                            {key: 'is-64x64', name: "64x64"},
                            {key: 'is-96x96', name: "96x96"},
                            {key: 'is-128x128', name: "128x128"}
                            
                        ]
                    },
                    'Bulma.image.ratio':{
                        type: 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name:'Aspect Ratio',
                        options: [
                            {key:'is-square',name:'Square'},
                            {key:'is-1by1',name:'1x1'},
                            {key:'is-4by3',name:'4x3'},
                            {key:'is-3by2',name:'3x2'},
                            {key:'is-16by9',name:'16x9'},
                            {key:'is-2by1',name:'2x1'}
                        ]
                    }
                }
            }
        };
        f.addComponentType(image);

        // notification
        var notification = new PgComponentType('Bulma.notification', 'notification');
        notification.selector = '.notification';
        notification.parent_selector = 'body';
        notification.code = '<div class="notification"><p>Contents</p></div>';
        notification.tags = 'major';
        notification.sections = {
            'Bulma.notification' : {
                name : 'notification options',
                fields : {
                    'Bulma.notification.colors' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        name: 'Notification Color',
                        options: bgColorOptions                            
                    
                },
                'Bulma.notification.button':{
                    type:'checkbox',
                    name:'Button?',
                    value: 1,
                    action: 'custom',
                    get_value: function (pgel) {
                            return pgel.find('button.delete').length > 0 ? "1" : null;
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            var pgb = pgel.findOne('button.delete');
                            if (value) {
                                if (!pgb) {
                                    pgb = pgCreateNodeFromHtml('<button class="delete"></button>').html('');
                                    pgel.prepend(pgb);
                                }
                            } else {
                                pgb.remove();
                            }
                            return value;
                        }
                }
            }
        }
    };
        f.addComponentType(notification);


        // table
        var table = new PgComponentType('Bulma.table','Table');
        table.selector = '.table';
        table.parent_selector = 'body';
        table.action_menu = {
            add: ['Bulma.row'],
            'on_add' : function(pgel, pgnew, newdef,prepend){
                var pgtbody = pgel.findOne('> tbody');
                var pgul = pgel.findOne('> tbody > tr');                
                pgtbody.append(pgul.clone());
            }
        }; 
        table.code = '<table class="table">\
  <thead>\
    <tr>\
      <th><abbr title="Position">Pos</abbr></th>\
      <th>Team</th>\
      <th><abbr title="Played">Pld</abbr></th>\
      <th><abbr title="Won">W</abbr></th>\
      <th><abbr title="Drawn">D</abbr></th>\
      <th><abbr title="Lost">L</abbr></th>\
      <th><abbr title="Goals for">GF</abbr></th>\
      <th><abbr title="Goals against">GA</abbr></th>\
      <th><abbr title="Goal difference">GD</abbr></th>\
      <th><abbr title="Points">Pts</abbr></th>\
      <th>Qualification or relegation</th>\
    </tr>\
  </thead>\
  <tfoot>\
    <tr>\
      <th><abbr title="Position">Pos</abbr></th>\
      <th>Team</th>\
      <th><abbr title="Played">Pld</abbr></th>\
      <th><abbr title="Won">W</abbr></th>\
      <th><abbr title="Drawn">D</abbr></th>\
      <th><abbr title="Lost">L</abbr></th>\
      <th><abbr title="Goals for">GF</abbr></th>\
      <th><abbr title="Goals against">GA</abbr></th>\
      <th><abbr title="Goal difference">GD</abbr></th>\
      <th><abbr title="Points">Pts</abbr></th>\
      <th>Qualification or relegation</th>\
    </tr>\
  </tfoot>\
  <tbody>\
    <tr>\
      <th>1</th>\
      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>\
      </td>\
      <td>38</td>\
      <td>23</td>\
      <td>12</td>\
      <td>3</td>\
      <td>68</td>\
      <td>36</td>\
      <td>+32</td>\
      <td>81</td>\
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\
    </tr>\
    <tr>\
      <th>2</th>\
      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>\
      <td>38</td>\
      <td>20</td>\
      <td>11</td>\
      <td>7</td>\
      <td>65</td>\
      <td>36</td>\
      <td>+29</td>\
      <td>71</td>\
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>\
    </tr></tbody></table>';
    table.sections = {
        'Bulma.table':{
            name: 'Table options',
            fields: {
                'Bulma.table.border' : {
                    type: 'checkbox',
                    name:'Bordered?',
                    action: 'apply_class',
                    value: 'is-bordered'
                },
                'Bulma.table.stripes' :{
                    type:'checkbox',
                    name:'Stripes?',
                    action: 'apply_class',
                    value:'is-striped'
                },
                'Bulma.table.narrow' :{
                    type:'checkbox',
                    name:'Narrow?',
                    action: 'apply_class',
                    value:'is-narrow'
                },
                'Bulma.table.hover' :{
                    type:'checkbox',
                    name:'Hover?',
                    action: 'apply_class',
                    value:'is-hoverable'
                },
                'Bulma.table.fullwidth' :{
                    type:'checkbox',
                    name:'Full Width?',
                    action: 'apply_class',
                    value:'is-fullwidth'
                }
            }
        }
    };
     f.addComponentType(table);


        // progress bar
        var progress = new PgComponentType('Bulma.progress', 'Progress');
        progress.selector = '.progress';
        progress.parent_selector = 'body';
        progress.code = '<progress class="progress" value="15" max="100">15%</progress>';
        progress.tags = 'major';
        progress.sections = {
            'Bulma.progress' : {
                name : 'Progress options',
                fields : {
                    'Bulma.progress.value' : {
                        type : 'text',
                        action: 'element_attribute',
                        attribute: 'value',
                        name: 'Progress'
                },
                'Bulma.progress.max' :{
                    type : 'text',
                    action: 'element_attribute',
                    attribute: 'max',
                    name: 'Max'
                },
                'Bulma.progress.color':{
                    type:'select',
                    action: 'apply_class',
                    name:'Color',
                    toggle_buttons: true,
                    show_empty: true,
                    options: bgColorOptions
                },
                'Bulma.progress.size':{
                    type: 'select',
                    action: 'apply_class',
                    name: 'Size',
                    show_empty: true,
                    toggle_buttons: true,
                    options: [
                       {key: 'is-small', name: "Small", html: bm.makeText('S')},
                    {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                    {key: 'is-large', name: "Large", html: bm.makeText('L')}
                    ]
                }
            }
        }
    };
        f.addComponentType(progress);


        // title
        var title = new PgComponentType('Bulma.title', 'Title');
        title.selector = '.title, .subtitle';
        title.parent_selector = 'h1,h2,h3,h4,h5,p,span, div';
        title.code = '<h1 class="title">Title</h1>';
        title.tags = 'major';
        title.sections = {
            'Bulma.title' : {
                name : 'Title options',
                fields : {
                    'Bulma.title.type':{
                        type:'select',
                        action:'apply_class',
                        name:'Type',
                        show_empty: false,
                        toggle_buttons: true,
                        options: [
                            {key:'title',name:'Title', html: bm.makeIcon('ikone1-100-copy-63')},
                            {key:'subtitle',name:'Sub Title', html: bm.makeIcon('style_bold')}
                        ]
                    },
                 'Bulma.title.size':{
                    type:'select',
                    action: 'apply_class',
                    name:'Size',
                    show_empty: true,
                    options: [
                        {key:'is-1',name:'Huge'},
                        {key:'is-2',name:'Big'},
                        {key:'is-3',name:'Default'},
                        {key:'is-4',name:'Medium'},
                        {key:'is-5',name:'Small'},
                        {key:'is-6',name:'Tiny'},
                    ]
                },
                'Bulma.title.spaced':{
                    type: 'checkbox',
                    action: 'apply_class',
                    name: 'Spaced?',
                    value: 'is-spaced'
                }
            }
        }
    };
        f.addComponentType(title);


        // modal
        var modal = new PgComponentType('Bulma.modal','Modal');
        modal.code='<div class="modal"><div class="modal-background"></div><div class="modal-content"><!-- Any other Bulma elements you want --></div><button class="modal-close is-large" aria-label="close"></button></div>';
        modal.selector = '.modal';
        modal.parent_selector = 'body';
        modal.tags = 'major';
        modal.sections = {
            'Bulma.modal' : {
                name : 'Modal options',
                fields : {
                    'Bulma.modal.active':{
                        type:'checkbox',
                        name:'Active?',
                        value:'is-active',
                        action: 'apply_class'
                    }
                }
            }
        };

        f.addComponentType(modal);


        // content
        var content = new PgComponentType('Bulma.content','Content');
        content.code='<div class="content"><h1>Hello World</h1><p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p><h2>Second level</h2><p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p><ul><li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li><li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li><li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li><li>Ut non enim metus.</li></ul></div>';
        content.selector = '.content';
        content.parent_selector = 'body';
        content.tags = 'major';
        content.sections = {
            'Bulma.content' : {
                name : 'Content options',
                fields : {
                    'Bulma.content.size':{
                        type:'select',
                        name:'Size',
                        show_empty: true,
                        toggle_buttons: true,
                        action: 'apply_class',
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    }
                }
            }
        };
        f.addComponentType(content);


        // Navbar
        var navbar = new PgComponentType('Bulma.navbar','Navbar');
        navbar.selector = 'nav.navbar';
        navbar.parent_selector = 'body';
        navbar.code = '<nav class="navbar"><div class="container is-fluid"><div class="navbar-brand"><a class="navbar-item"><img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"></a><span class="navbar-burger burger" data-target="navbarMenuHeroA"><span></span><span></span><span></span></span></div><div id="navbarMenuHeroA" class="navbar-menu"><div class="navbar-end"><a class="navbar-item is-active">Home</a><a class="navbar-item">Examples</a><a class="navbar-item">Documentation</a><span class="navbar-item"><a class="button is-primary is-inverted"><span class="icon"><i class="fab fa-github"></i></span><span>Download</span></a></span></div></div></div></nav>';
        navbar.sections = {
            'Bulma.navbar' : {
                name : 'Navbar options',
                fields : {
                    'Bulma.navbar.transparent':{
                        type:'checkbox',
                        value:'is-transparent',
                        action:'apply_class',
                        name:'Transparent?'
                    },
                    'Bulma.navbar.shadow':{
                        type:'checkbox',
                        value:'has-shadow',
                        action:'apply_class',
                        name:'Shadow?'
                    },
                    'Bulma.navbar.fixed':{
                        type:'select',
                        action:'apply_class',
                        name:'Fixed',
                        show_empty: true,
                        options: [
                            {key:'is-fixed-top',name:'Fixed Top'},
                            {key:'is-fixed-bottom',name:'Fixed Bottom'},
                        ]
                    },
                    'Bulma.navbar.color':{
                        type:'select',
                        action:'apply_class',
                        name:'Background',
                        toggle_buttons: true,
                        show_empty: true,
                        options: bgColorOptions
                    }
                }
            }
        };
        f.addComponentType(navbar);

        // navbar item
        var navbarItem = new PgComponentType('Bulma.navbarItem','Navbar Item');
        navbarItem.selector = '.navbar-item';
        navbarItem.parent_selector = '.navbar, .navbar-brand, .navbar-start, .navbar-end, .navbar-dropdown';
        navbarItem.code = '<div class="navbar-item">Item</div>';
        navbarItem.sections = {
            'Bulma.navbarItem' : {
                name : 'Navbar Item options',
                fields : {
                    'Bulma.navbarItem.display' :{
                        type:'select',
                        name:'Dropdown Display',
                        action:'apply_class',
                        show_empty: true,
                        options: [
                            {key:'is-hoverable',name:'Hoverable'},
                            {key:'is-active',name:'Active'},
                        ]
                    },
                    'Bulma.navbarItem.dropdownDirection':{
                        type:'checkbox',
                        name:'Dropup?',
                        value:'has-dropdown-up',
                        action:'apply_class',
                        show_if: 'has-dropdown'
                    },
                    'Bulma.navbarItem.state':{
                        type:'checkbox',
                        name:'Active?',
                        value:'is-active',
                        action:'apply_class',
                        show_if: 'has-dropdown'
                    }
                }
            }
        }
        f.addComponentType(navbarItem);

        // navbar dropdown item
        var navbarDropdown = new PgComponentType('Bulma.navbarDropdown','Navbar Dropdown');
        navbarDropdown.selector = '.navbar-dropdown';
        navbarDropdown.parent_selector = '.navbar-item';
        navbarDropdown.code = '<div class="navbar-item has-dropdown"><a class="navbar-link">Item</a><div class="navbar-dropdown"><a class="navbar-item">Dropdown Item</a></div></div>';
        navbarDropdown.sections = {
            'Bulma.navbarDropdown' : {
                name : 'Navbar dropdown options',
                fields : {
                    'Bulma.navbarDropdown.dropdownPosition':{
                        type:'checkbox',
                        name:'Right Dropdown?',
                        value:'is-right',
                        action:'apply_class'
                    },
                    'Bulma.navbarDropdown.boxed':{
                        type:'checkbox',
                        name:'Boxed dropdown?',
                        value:'is-boxed',
                        action:'apply_class'
                    }
                }
            }
        }
        f.addComponentType(navbarDropdown);


        // pagination
        var pagination = new PgComponentType('Bulma.pagination','Pagination');
        pagination.code='<nav class="pagination" role="navigation" aria-label="pagination">\
  <a class="pagination-previous">Previous</a>\
  <a class="pagination-next">Next page</a>\
  <ul class="pagination-list">\
    <li>\
      <a class="pagination-link" aria-label="Goto page 1">1</a>\
    </li>\
    <li>\
      <span class="pagination-ellipsis">&hellip;</span>\
    </li>\
    <li>\
      <a class="pagination-link" aria-label="Goto page 45">45</a>\
    </li>\
    <li>\
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>\
    </li>\
    <li>\
      <a class="pagination-link" aria-label="Goto page 47">47</a>\
    </li>\
    <li>\
      <span class="pagination-ellipsis">&hellip;</span>\
    </li>\
    <li>\
      <a class="pagination-link" aria-label="Goto page 86">86</a>\
    </li>\
  </ul>\
</nav>';
        pagination.selector = '.pagination';
        pagination.parent_selector = 'body';
        pagination.tags = 'major';
        pagination.sections = {
            'Bulma.pagination' : {
                name : 'Pagination options',
                fields : {
                    'Bulma.pagination.rounded':{
                        type:'checkbox',
                        name:'Rounded?',
                        value: 'is-rounded',
                        action: 'apply_class',
                    },
                    'Bulma.pagination.size':{
                        type:'select',
                        name:'Size',
                        action:'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    },
                    'Bulma.pagination.alignment':{
                        type:'select',
                        name:'Align',
                        action:'apply_class',
                        show_empty: true,
                        toggle_buttons: true,
                        options: [
                            {key:'is-centered',name:'Centered', html: bm.makeIcon('align-center')},
                            {key:'is-right',name:'Right', html: bm.makeIcon('align-right')}
                        ]
                    }
                }
            }
        };
        f.addComponentType(pagination);


        // pagination link
        var paginationLink = new PgComponentType('Bulma.paginationLink','Pagination Link');
        paginationLink.code='<li><a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a></li>';
        paginationLink.selector = '.pagination-link,.pagination-previous, .pagination-next';
        paginationLink.parent_selector = '.pagination-list';
        paginationLink.tags = 'major';
        paginationLink.sections = {
            'Bulma.paginationLink' : {
                name : 'paginationLink options',
                fields : {
                    'Bulma.paginationLink.number':{
                        type:'text',
                        name:'Page Number',
                        action: 'custom',
                        get_value: function (pgel) {
                            var target = pgel.html();
                            return target.length > 0 ? target.substr(0,target.length):'';
                        },
                        set_value: function (pgel, value, values, oldValue, eventType) {
                            crsaWillChangeDom();
                            pgel.setAttr('aria-label','Goto page '+ value);
                            pgel.html(value);
                            return value;
                        }
                    },
                    'Bulma.paginationLink.active':{
                        type:'checkbox',
                        name:'Current?',
                        value:'is-current',
                        action: 'apply_class'
                    },
                    'Bulma.paginationLink.disabled':{
                        type:'checkbox',
                        name:'Disabled?',
                        action: 'element_attribute',
                        attribute: 'disabled',
                        value:'disabled'
                    }
                }
            }
        };
        f.addComponentType(paginationLink);


        // dropdown
        var dropdown = new PgComponentType('Bulma.dropdown','Dropdown');
        dropdown.code='<div class="dropdown is-active">\
  <div class="dropdown-trigger">\
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">\
      <span>Dropdown button</span>\
      <span class="icon is-small">\
        <i class="fas fa-angle-down" aria-hidden="true"></i>\
      </span>\
    </button>\
  </div>\
  <div class="dropdown-menu" id="dropdown-menu" role="menu">\
    <div class="dropdown-content">\
      <a href="#" class="dropdown-item">\
        Dropdown item\
      </a>\
      <a class="dropdown-item">\
        Other dropdown item\
      </a>\
      <a href="#" class="dropdown-item is-active">\
        Active dropdown item\
      </a>\
      <a href="#" class="dropdown-item">\
        Other dropdown item\
      </a>\
      <hr class="dropdown-divider">\
      <div class="dropdown-item">\
        Any <strong>content</strong> can be entered in a <span class="is-medium is-bold">div</span>\
      </div>\
    </div>\
  </div>\
</div>';
        dropdown.selector = '.dropdown';
        dropdown.parent_selector = 'body';
        dropdown.tags = 'major';
        dropdown.sections = {
            'Bulma.dropdown' : {
                name : 'dropdown options',
                fields : {
                    'Bulma.dropdown.active':{
                        type:'checkbox',
                        name:'Active?',
                        value: 'is-active',
                        action: 'apply_class'
                    },
                    'Bulma.dropdown.type':{
                        type:'checkbox',
                        name:'Hoverable?',
                        value: 'is-hoverable',
                        action: 'apply_class'
                    },
                    'Bulma.dropdown.align': {
                        type: 'checkbox',
                        name: 'Right aligned?',
                        value: 'is-right',
                        action: 'apply_class'
                    },
                    'Bulma.dropdown.direction': {
                        type:'checkbox',
                        name:'Drop up?',
                        value:'is-up',
                        action: 'apply_class'
                    },
                }
            }
        };
        f.addComponentType(dropdown);

        // form input
        var formInput = new PgComponentType('Bulma.form.input','Input');
        formInput.selector = 'input';
        formInput.parent_selector = 'div.control';
        formInput.tags = 'major';
        formInput.code = '<input class="input" type="text" placeholder="Placeholder text">';
        formInput.sections = {
            'Bulma.form.input' : {
                name : 'Input options',
                fields : {
                    'Bulma.formInput.color':{
                        type:'select',
                        action: 'apply_class',
                        name: 'Color',
                        show_empty: true,
                        toggle_buttons: true,
                        options: primaryColorOptions
                    },
                    'Bulma.formInput.size':{
                        type:'select',
                        action: 'apply_class',
                        toggle_buttons: true,
                        show_empty: true,
                        name: 'Size',
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    },
                    'Bulma.formInput.rounded':{
                        type:'checkbox',
                        action: 'apply_class',
                        name: 'Rounded?',
                        value: 'is-rounded'
                    },
                    'Bulma.formInput.state':{
                        type:'select',
                        action: 'apply_class',
                        name: 'State',
                        options: [
                            {key:'',name:'Normal'},
                            {key:'is-hovered',name:'Hovered'},
                            {key:'is-focused',name:'Focused'}
                        ]
                    }
                }
            }
        }
        f.addComponentType(formInput);  

        // form control
        var formControl = new PgComponentType('Bulma.form.control','Control');
        formControl.selector = '.control';
        formControl.action_menu = {
            add: ['Bulma.form.input','Bulma.icon','Bulma.button']
        };
        formControl.parent_selector = 'div.field, form';
        formControl.tags = 'major';
        formControl.code = '<div class="control"><input class="input" type="text" placeholder="Placeholder"></div>';
        formControl.sections = {
            'Bulma.form.control' : {
                name : 'Control options',
                fields : {
                    'Bulma.formControl.iconsL':{
                        type:'checkbox',
                        value: 'has-icons-left',
                        action: 'apply_class',
                        name: 'Has icons left?'
                    },
                    'Bulma.formControl.iconsR':{
                        type:'checkbox',
                        value: 'has-icons-right',
                        action: 'apply_class',
                        name: 'Has icons right?'
                    },
                    'Bulma.formControl.expanded':{
                        type:'checkbox',
                        action: 'apply_class',
                        name: 'Expanded?',
                        value:'is-expanded'
                    },
                    'Bulma.formControl.loading':{
                        type:'checkbox',
                        action: 'apply_class',
                        name: 'Loading?',
                        value:'is-loading'
                    },
                    'Bulma.formControl.size':{
                        type:'select',
                        action: 'apply_class',
                        name: 'Size',
                        toggle_buttons: true,
                        show_empty: true,
                        options: [
                            {key: 'is-small', name: "Small", html: bm.makeText('S')},
                            {key: 'is-medium', name: "Medium", html: bm.makeText('M')},
                            {key: 'is-large', name: "Large", html: bm.makeText('L')}
                        ]
                    }

                }
            }
        }
        f.addComponentType(formControl); 

        // form field
        var formField = new PgComponentType('Bulma.form.field','Field');
        formField.selector = 'div.field';
        formField.action_menu = {
            add: ['Bulma.form.control']
        };
        formField.parent_selector = 'form, body';
        formField.tags = 'major';
        formField.code = '<div class="field"><label class="label">Name</label><div class="control"><input class="input" type="text" placeholder="Placeholder"></div><p class="help">Help text</p></div>';
        formField.sections = {
            'Bulma.form.field' : {
                name : 'Field options',
                fields : {
                    'Bulma.formField.addons':{
                        type:'checkbox',
                        value: 'has-addons',
                        action: 'apply_class',
                        name: 'Has addons?'
                    },
                    'Bulma.formField.addonspos':{
                        type:'select',
                        show_empty: true,
                        options: [
                            {key:'has-addons-centered',name:'Centered'},
                            {key:'has-addons-right',name:'Right'}
                        ],
                        action: 'apply_class',
                        name: 'Addon Position'
                    },
                    'Bulma.formField.grouped':{
                        type:'checkbox',
                        value: 'is-grouped',
                        action: 'apply_class',
                        name: 'Grouped?'
                    },
                    'Bulma.formField.groupedPosition':{
                        type:'select',
                        show_empty: true,
                        options: [
                            {key:'is-grouped-centered',name:'Centered'},
                            {key:'is-grouped-right',name:'Right'},
                        ],
                        action: 'apply_class',
                        name: 'Grouped Position'
                    },                    
                    'Bulma.formField.multiline':{
                        type:'checkbox',
                        value: 'is-grouped-multiline',
                        action: 'apply_class',
                        name: 'Multiline?'
                    },                
                    'Bulma.formField.horizontal':{
                        type:'checkbox',
                        value: 'is-horizontal',
                        action: 'apply_class',
                        name: 'Horizontal?'
                    }
                }
            }
        }
        f.addComponentType(formField);      

        var res = new PgComponentTypeResource('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css');
        res.type = 'text/css';
        f.resources.add(res);

        //Tell Pinegrow about the framework
        //pinegrow.addFramework(f);
            
        var componentSection = new PgFrameworkLibSection("Bulma_components", "Components");
        var layoutSection = new PgFrameworkLibSection("Bulma_layout","Layout");
        var elementSection = new PgFrameworkLibSection("Bulma_elements","Elements");
        var formSection = new PgFrameworkLibSection("Bulma_forms","Forms");
        //Pass components in array
        componentSection.setComponentTypes([breadcrumb,card, cardHeader, cardFooter,dropdown,menu, message,modal,pagination, paginationLink, tabs ]);
        layoutSection.setComponentTypes([column, columns, container, footer, hero, level, levelitem, mediaobject,  navbar, navbarItem,navbarDropdown,section]);
        elementSection.setComponentTypes([box,button,content,icon, image, notification, progress, table, title]);
        formSection.setComponentTypes([formInput, formControl, formField]);

        f.addLibSection(componentSection);
        f.addLibSection(layoutSection);
        f.addLibSection(elementSection);
        f.addLibSection(formSection);

        //Register starting page template
        var notRequiredFiles = ["hero.css"];
        var templatesOrder = ["index.html"];

        f.addTemplateProjectFromResourceFolder('template', null, 0, function (node) {
            var currentFilesName = notRequiredFiles.filter(function (fileName) {
                return node.name == fileName;
            });
            if (currentFilesName && currentFilesName.length > 0) {
                node.required = false;
            }

            var nodeIndex = templatesOrder.indexOf(node.name);
            if (nodeIndex >= 0) node.order = nodeIndex;
        });
        
   });
});