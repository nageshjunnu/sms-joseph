import React from 'react'

const LeftSide = () => {
  return (
    <aside className="main-sidebar">
        {/* <!-- sidebar--> */}
        <section className="sidebar position-relative">	
            <div className="multinav">
                <div className="">	
                    {/* <!-- sidebar menu--> */}
                    <ul className="sidebar-menu" data-widget="tree">	
                        <li className="header">Dashboard & Apps</li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Layout-4-blocks"><span className="path1"></span><span className="path2"></span></i>
                            <span>Dashboard</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 1</a></li>
                            <li><a href="index2.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 2</a></li>
                            <li><a href="index3.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 3</a></li>
                            <li><a href="index4.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 4</a></li>
                            <li><a href="index5.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 5</a></li>
                            <li><a href="index6.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 6</a></li>
                            <li><a href="index7.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 7</a></li>
                            <li><a href="index8.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 8</a></li>
                        </ul>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i span className="icon-Layout-grid"><span className="path1"></span><span className="path2"></span></i>
                            <span>Apps</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="extra_calendar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Calendar</a></li>
                            <li><a href="contact_app.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Contact List</a></li>
                            <li><a href="contact_app_chat.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chat</a></li>
                            <li><a href="extra_taskboard.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Todo</a></li>
                            <li><a href="mailbox.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Mailbox</a></li>
                        </ul>
                        </li>
                        <li className="header">Components & UI </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Write"><span className="path1"></span><span className="path2"></span></i>
                            <span>UI Elements</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">			
                            <li><a href="ui_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Grid System</a></li>								
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="box_cards.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Card</a></li>
                                    <li><a href="box_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Card</a></li>
                                    <li><a href="box_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Card</a></li>
                                    <li><a href="box_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Color</a></li>
                                    <li><a href="box_group.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Group</a></li>
                                </ul>
                            </li>
                            <li><a href="ui_badges.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Badges</a></li>
                            <li><a href="ui_border_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Border</a></li>
                            <li><a href="ui_buttons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Buttons</a></li>	
                            <li><a href="ui_color_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Color</a></li>
                            <li><a href="ui_dropdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown</a></li>
                            <li><a href="ui_dropdown_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown Grid</a></li>
                            <li><a href="ui_progress_bars.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Progress Bars</a></li>					
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Icons
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="icons_fontawesome.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Font Awesome</a></li>
                                    <li><a href="icons_glyphicons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Glyphicons</a></li>
                                    <li><a href="icons_material.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Material Icons</a></li>	
                                    <li><a href="icons_themify.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Themify Icons</a></li>
                                    <li><a href="icons_simpleline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple Line Icons</a></li>
                                    <li><a href="icons_cryptocoins.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Cryptocoins Icons</a></li>
                                    <li><a href="icons_flag.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flag Icons</a></li>
                                    <li><a href="icons_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather Icons</a></li>
                                </ul>
                            </li>
                            <li><a href="ui_ribbons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ribbons</a></li>
                            <li><a href="ui_sliders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sliders</a></li>
                            <li><a href="ui_typography.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Typography</a></li>
                            <li><a href="ui_tab.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tabs</a></li>
                            <li><a href="ui_timeline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Timeline</a></li>
                            <li><a href="ui_timeline_horizontal.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Horizontal Timeline</a></li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Components
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="component_bootstrap_switch.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bootstrap Switch</a></li>
                                    <li><a href="component_date_paginator.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Date Paginator</a></li>
                                    <li><a href="component_media_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Medias</a></li>
                                    <li><a href="component_rangeslider.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Range Slider</a></li>
                                    <li><a href="component_rating.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ratings</a></li>
                                    <li><a href="component_animations.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Animations</a></li>
                                    <li><a href="extension_fullscreen.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Fullscreen</a></li>
                                    <li><a href="extension_pace.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pace</a></li>
                                    <li><a href="component_nestable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Nestable</a></li>
                                    <li><a href="component_portlet_draggable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Draggable Portlets</a></li>	
                                </ul>
                            </li>  
                        </ul>
                        </li>			
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-File"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>
                            <span>Forms & Tables</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>					
                        <ul className="treeview-menu">					
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Forms
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="forms_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</a></li>
                                    <li><a href="forms_general.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Layout</a></li>
                                    <li><a href="forms_wizard.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Wizard</a></li>	
                                    <li><a href="forms_validation.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Validation</a></li>
                                    <li><a href="forms_mask.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Formatter</a></li>
                                    <li><a href="forms_xeditable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Xeditable Editor</a></li>
                                    <li><a href="forms_dropzone.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropzone</a></li>
                                    <li><a href="forms_code_editor.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Code Editor</a></li>
                                    <li><a href="forms_editors.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editor</a></li>
                                    <li><a href="forms_editor_markdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Markdown</a></li>
                                </ul>
                            </li> 		
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tables
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="tables_simple.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple tables</a></li>
                                    <li><a href="tables_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data tables</a></li>
                                    <li><a href="tables_editable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editable Tables</a></li>
                                    <li><a href="tables_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Table Color</a></li>
                                </ul>
                            </li> 					
                        </ul>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Chart-pie"><span className="path1"></span><span className="path2"></span></i>
                            <span>Charts</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="charts_chartjs.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>ChartJS</a></li>
                            <li><a href="charts_flot.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flot</a></li>
                            <li><a href="charts_inline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Inline charts</a></li>
                            <li><a href="charts_morris.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Morris</a></li>
                            <li><a href="charts_peity.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Peity</a></li>
                            <li><a href="charts_chartist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chartist</a></li>
                            <li><a href="charts_c3_axis.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Axis Chart</a></li>
                            <li><a href="charts_c3_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
                            <li><a href="charts_c3_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data Chart</a></li>
                            <li><a href="charts_c3_line.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Line Chart</a></li>
                            <li><a href="charts_echarts_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Charts</a></li>
                            <li><a href="charts_echarts_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
                            <li><a href="charts_echarts_pie_doughnut.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pie & Doughnut Chart</a></li>
                        </ul>
                        </li> 
                        <li className="header">COLLECTIONS</li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Library"><span className="path1"></span><span className="path2"></span></i>
                            <span>Widgets</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="widgets_blog.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blog</a></li>
                            <li><a href="widgets_chart.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chart</a></li>
                            <li><a href="widgets_list.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>List</a></li>
                            <li><a href="widgets_social.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Social</a></li>
                            <li><a href="widgets_statistic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Statistic</a></li>
                            <li><a href="widgets_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather</a></li>
                            <li><a href="widgets.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Widgets</a></li>
                            <li><a href="email_index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Emails</a></li>					  	
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maps
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="map_google.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Google Map</a></li>
                                    <li><a href="map_vector.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Vector Map</a></li>
                                </ul>
                            </li>					  	
                            <li className="treeview">
                                <a href="#">
                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="component_modals.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals</a></li>
                                    <li><a href="component_sweatalert.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sweet Alert</a></li>
                                    <li><a href="component_notification.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Toastr</a></li>
                                </ul>
                            </li>
                        </ul>
                        </li> 				 
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Cart"><span className="path1"></span><span className="path2"></span></i>
                            <span>Ecommerce</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="ecommerce_products.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products</a></li>
                            <li><a href="ecommerce_cart.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Cart</a></li>
                            <li><a href="ecommerce_products_edit.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Edit</a></li>
                            <li><a href="ecommerce_details.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Details</a></li>
                            <li><a href="ecommerce_orders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Orders</a></li>
                            <li><a href="ecommerce_checkout.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Checkout</a></li>
                        </ul>
                        </li>  		
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-User"><span className="path1"></span><span className="path2"></span></i>
                            <span>Pages</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="invoice.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice</a></li>
                            <li><a href="invoicelist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice List</a></li>	
                            <li><a href="extra_app_ticket.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Support Ticket</a></li>
                            <li><a href="extra_profile.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Profile</a></li>
                            <li><a href="contact_userlist_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist Grid</a></li>
                            <li><a href="contact_userlist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist</a></li>	
                            <li><a href="sample_faq.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>FAQs</a></li>
                            <li><a href="sample_blank.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blank</a></li>
                            <li><a href="sample_coming_soon.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Coming Soon</a></li>
                            <li><a href="sample_custom_scroll.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom Scrolls</a></li>
                            <li><a href="sample_gallery.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Gallery</a></li>
                            <li><a href="sample_lightbox.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lightbox Popup</a></li>
                            <li><a href="sample_pricing.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pricing</a></li>
                        </ul>
                        </li>
                        <li className="header">LOGIN & ERROR </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Chat-locked"><span className="path1"></span><span className="path2"></span></i>
                            <span>Authentication</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="auth_login.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Login</a></li>
                            <li><a href="auth_register.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Register</a></li>
                            <li><a href="auth_lockscreen.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lockscreen</a></li>
                            <li><a href="auth_user_pass.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Recover password</a></li>	
                        </ul>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="icon-Chat-check"><span className="path1"></span><span className="path2"></span></i>
                            <span>Miscellaneous</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="error_404.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 404</a></li>
                            <li><a href="error_500.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 500</a></li>
                            <li><a href="error_maintenance.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maintenance</a></li>	
                        </ul>
                        </li>	 	     
                    </ul>
                </div>
            </div>
        </section>
        <div className="sidebar-footer">
            <a href="javascript:void(0)" className="link" data-bs-toggle="tooltip" title="Settings"><span className="icon-Settings-2"></span></a>
            <a href="mailbox.html" className="link" data-bs-toggle="tooltip" title="Email"><span className="icon-Mail"></span></a>
            <a href="javascript:void(0)" className="link" data-bs-toggle="tooltip" title="Logout"><span className="icon-Lock-overturning"><span className="path1"></span><span className="path2"></span></span></a>
        </div>
    </aside>
  )
}

export default LeftSide