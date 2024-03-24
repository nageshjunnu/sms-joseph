import React from 'react'

const dashboard = () => {
  return (
    <div className="content-wrapper">
    <div className="container-full">
      {/* <!-- Main content --> */}
      <section className="content">
          <div className="row">
              <div className="col-xl-8">														
                  <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                          <h4 className="box-title">Your Courses</h4>							
                          <div className="box-controls pull-right d-md-flex d-none">
                            <a href="#">View All</a>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-12">
                          <a href={""} className="box pull-up">
                              <div className="box-body">
                                  <div className="d-flex align-items-center">
                                      <div className="icon bg-primary-light rounded-circle w-60 h-60 text-center l-h-80">											
                                          <span className="fs-30 icon-Bulb1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                      </div>
                                      <div className="ms-15">											
                                          <h5 className="mb-0">UX Design</h5>
                                          <p className="text-fade fs-12 mb-0">You Watched</p>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mt-20">
                                      <div className="w-p70">
                                          <div className="progress progress-sm mb-0">
                                              <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <div>80%</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-lg-4 col-12">
                          <a href="#" className="box pull-up">
                              <div className="box-body">
                                  <div className="d-flex align-items-center">
                                      <div className="icon bg-primary-light rounded-circle w-60 h-60 text-center l-h-80">											
                                          <span className="fs-30 icon-Pen-tool-vector"><span className="path1"></span><span className="path2"></span></span>
                                      </div>
                                      <div className="ms-15">											
                                          <h5 className="mb-0">UI Design</h5>
                                          <p className="text-fade fs-12 mb-0">You Watched</p>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mt-20">
                                      <div className="w-p70">
                                          <div className="progress progress-sm mb-0">
                                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <div>40%</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-lg-4 col-12">
                          <a href="#" className="box pull-up">
                              <div className="box-body">
                                  <div className="d-flex align-items-center">
                                      <div className="icon bg-primary-light rounded-circle w-60 h-60 text-center l-h-80">											
                                          <span className="fs-30 icon-Chat-check"><span className="path1"></span><span className="path2"></span></span>
                                      </div>
                                      <div className="ms-15">											
                                          <h5 className="mb-0">Marketing</h5>
                                          <p className="text-fade fs-12 mb-0">You Watched</p>
                                      </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mt-20">
                                      <div className="w-p70">
                                          <div className="progress progress-sm mb-0">
                                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <div>30%</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-lg-6 col-12">
                          <div className="box">
                              <div className="box-header">
                                  <h4 className="box-title">New Activity</h4>
                              </div>
                              <div className="box-body">
                                  <div className="act-div">
                                      <div className="bg-gray-100 p-15 rounded10 mb-20">
                                          <div>
                                              <span className="badge badge-sm badge-dot badge-warning me-5"></span>
                                              Fuzzy Logic
                                          </div>
                                          <h4 className="my-20">Dont forget to submit the task!</h4>
                                          <div className="d-flex align-items-center justify-content-between">
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/avatar/1.jpg" className="avatar avatar-sm me-10 avatar-pill"/>
                                                  <p className="text-fade fs-12 mb-0">Johen doe</p>
                                              </div>
                                              <p className="text-fade fs-12 mb-0">08 Nov 2020</p>
                                          </div>
                                      </div>
                                      <div className="bg-gray-100 p-15 rounded10 mb-20">
                                          <div>
                                              <span className="badge badge-sm badge-dot badge-primary me-5"></span>
                                              Biometric
                                          </div>
                                          <h4 className="my-20">Explain what do you know about<br/> Biometric! (&gt;100 words)</h4>
                                          <div className="d-flex align-items-center justify-content-between">
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/avatar/2.jpg" className="avatar avatar-sm me-10 avatar-pill"/>
                                                  <p className="text-fade fs-12 mb-0">Mical doe</p>
                                              </div>
                                              <p className="text-fade fs-12 mb-0">08 Nov 2020</p>
                                          </div>
                                      </div>
                                      <div className="bg-gray-100 p-15 rounded10 mb-20">
                                          <div>
                                              <span className="badge badge-sm badge-dot badge-warning me-5"></span>
                                              Fuzzy Logic
                                          </div>
                                          <h4 className="my-20">Dont forget to submit the task!</h4>
                                          <div className="d-flex align-items-center justify-content-between">
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/avatar/1.jpg" className="avatar avatar-sm me-10 avatar-pill"/>
                                                  <p className="text-fade fs-12 mb-0">Johen doe</p>
                                              </div>
                                              <p className="text-fade fs-12 mb-0">08 Nov 2020</p>
                                          </div>
                                      </div>
                                      <div className="bg-gray-100 p-15 rounded10">
                                          <div>
                                              <span className="badge badge-sm badge-dot badge-primary me-5"></span>
                                              Biometric
                                          </div>
                                          <h4 className="my-20">Explain what do you know about Biometric! (&gt;100 words)</h4>
                                          <div className="d-flex align-items-center justify-content-between">
                                              <div className="d-flex align-items-center">
                                                  <img src="/assets/images/avatar/2.jpg" className="avatar avatar-sm me-10 avatar-pill"/>
                                                  <p className="text-fade fs-12 mb-0">Mical doe</p>
                                              </div>
                                              <p className="text-fade fs-12 mb-0">08 Nov 2020</p>
                                          </div>
                                      </div>									
                                  </div>
                              </div>
                              <div className="box-footer text-center p-0">
                                  <a href="#" className="btn d-grid btn-primary-light">View all</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="box">
                              <div className="box-header">
                                  <h4 className="box-title">Statisics</h4>
                              </div>
                              <div className="box-body">
                                  <h3 className="mt-0">24hr</h3>
                                  <p className="text-fade fs-12">Hours Spend last week</p>
                                  <div id="charts_widget_2_chart"></div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-6">
                                  <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                      <div className="box-body py-25 bg-info-light px-5">
                                          <p className="fw-600 text-info">Courses in Progress</p>
                                      </div>
                                      <div className="box-body">
                                          <h1 className="countnm fs-50 m-0">5</h1>
                                      </div>
                                  </a>
                              </div>
                              <div className="col-6">
                                  <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                      <div className="box-body py-25 bg-info-light px-5">
                                          <p className="fw-600 text-info">Forum Discussion</p>
                                      </div>
                                      <div className="box-body">
                                          <h1 className="countnm fs-50 m-0">25</h1>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="box">
                      <div className="box-header">
                          <h4 className="box-title">Activity Statistics</h4>
                          <ul className="box-controls pull-right d-md-flex d-none">
                            <li className="dropdown">
                              <button className="dropdown-toggle btn btn-warning-light px-10" data-bs-toggle="dropdown" href="#" aria-expanded="false">Monthly</button>										  
                              <div className="dropdown-menu dropdown-menu-end" >
                                <a className="dropdown-item active" href="#">Today</a>
                                <a className="dropdown-item" href="#">Yesterday</a>
                                <a className="dropdown-item" href="#">Last week</a>
                                <a className="dropdown-item" href="#">Last month</a>
                              </div>
                            </li>
                          </ul>
                      </div>
                      <div className="box-body">
                          <div id="charts_widget_1_chart"></div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-12">
                          <a href="#" className="box bg-danger bg-hover-danger pull-up">
                              <div className="box-body">
                                  <div className="d-flex align-items-center">
                                      <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center">
                                          <span className="text-white icon-Cart2 fs-40"><span className="path1"></span><span className="path2"></span></span>
                                      </div>
                                      <div className="ms-10">
                                          <h4 className="text-white mb-0">+1 1234 456 789</h4>
                                          <h5 className="text-white-50 mb-0">Toll Free</h5>
                                      </div>
                                  </div>							
                              </div>
                          </a>
                      </div>
                      <div className="col-lg-6 col-12">
                          <a href="#" className="box bg-primary bg-hover-primary pull-up">
                              <div className="box-body">
                                  <div className="d-flex align-items-center">
                                      <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center">
                                          <span className="text-white icon-Mail fs-40"></span>
                                      </div>
                                      <div className="ms-10">
                                          <h4 className="text-white mb-0">info@EduAdmin.com</h4>
                                          <h5 className="text-white-50 mb-0">Free to Fill Us</h5>
                                      </div>
                                  </div>							
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-12">										
                  <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                          <h4 className="box-title">Upcoming Group Lessons</h4>							
                          <div className="box-controls pull-right d-md-flex d-none">
                            <a href="#">View All</a>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="box bs-5 border-danger rounded pull-up">
                          <div className="box-body">	
                              <div className="flex-grow-1">	
                                  <div className="d-flex align-items-center pe-2 justify-content-between">							
                                      <h4 className="fw-500">
                                          Common English
                                      </h4>
                                      <div className="dropdown">
                                          <a data-bs-toggle="dropdown" href="#" className="px-10 pt-5"><i className="ti-more-alt"></i></a>
                                          <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#"><i className="ti-import"></i> Import</a>
                                            <a className="dropdown-item" href="#"><i className="ti-export"></i> Export</a>
                                            <a className="dropdown-item" href="#"><i className="ti-printer"></i> Print</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#"><i className="ti-settings"></i> Settings</a>
                                          </div>
                                      </div>						
                                  </div>
                                  <p className="fs-16">
                                      Thu 13 PM - 15 PM
                                  </p>
                              </div>							
                              <div className="d-flex align-items-center justify-content-between mt-10">
                                  <div className="d-flex">
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-1.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-3.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-4.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                  </div>
                                  <button type="button" className="waves-effect waves-circle btn btn-circle btn-dark"><i className="mdi mdi-plus"></i></button>
                              </div>
                          </div>					
                      </div>
                      <div className="box bs-5 border-primary rounded mb-10 pull-up">
                          <div className="box-body">	
                              <div className="flex-grow-1">	
                                  <div className="d-flex align-items-center pe-2 justify-content-between">							
                                      <h4 className="fw-500">
                                          Speaking club
                                      </h4>
                                      <div className="dropdown">
                                          <a data-bs-toggle="dropdown" href="#" className="px-10 pt-5"><i className="ti-more-alt"></i></a>
                                          <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#"><i className="ti-import"></i> Import</a>
                                            <a className="dropdown-item" href="#"><i className="ti-export"></i> Export</a>
                                            <a className="dropdown-item" href="#"><i className="ti-printer"></i> Print</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#"><i className="ti-settings"></i> Settings</a>
                                          </div>
                                      </div>						
                                  </div>
                                  <p className="fs-16">
                                      Thu 16 PM - 17 PM
                                  </p>
                              </div>							
                              <div className="d-flex align-items-center justify-content-between mt-10">
                                  <div className="d-flex">
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-2.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-5.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                      <a href="#" className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden">
                                          <img src="/assets/images/avatar/avatar-6.png" className="h-50 align-self-end" alt=""/>
                                      </a>
                                  </div>
                                  <button type="button" className="waves-effect waves-circle btn btn-circle btn-dark"><i className="mdi mdi-plus"></i></button>
                              </div>
                          </div>					
                      </div>
                  </div>						
                  <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                          <h4 className="box-title">Lessons</h4>							
                          <div className="box-controls pull-right d-md-flex d-none">
                            <a href="#">View All</a>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div className="box mb-15 pull-up">
                          <div className="box-body">
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="d-flex align-items-center">
                                      <div className="me-15 bg-warning-light h-50 w-50 l-h-60 rounded text-center">
                                          <span className="icon-Book-open fs-24"><span className="path1"></span><span className="path2"></span></span>
                                      </div>
                                      <div className="d-flex flex-column fw-500">
                                          <a href="#" className="text-dark hover-primary mb-1 fs-16">English - Grammar</a>
                                          <span className="text-fade">Eula kelly, 6 May</span>
                                      </div>
                                  </div>
                                  <a href="#">
                                      <span className="icon-Arrow-right fs-24"><span className="path1"></span><span className="path2"></span></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="box mb-15 pull-up">
                          <div className="box-body">
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="d-flex align-items-center">
                                      <div className="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                          <span className="icon-Mail fs-24"></span>
                                      </div>
                                      <div className="d-flex flex-column fw-500">
                                          <a href="#" className="text-dark hover-primary mb-1 fs-16">Irregular Verbs Test</a>
                                          <span className="text-fade">Oilve Garza, 4 May</span>
                                      </div>
                                  </div>
                                  <a href="#">
                                      <span className="icon-Arrow-right fs-24"><span className="path1"></span><span className="path2"></span></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="box mb-10 pull-up">
                          <div className="box-body">
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="d-flex align-items-center">
                                      <div className="me-15 bg-danger-light h-50 w-50 l-h-60 rounded text-center">
                                          <span className="icon-Book-open fs-24"><span className="path1"></span><span className="path2"></span></span>
                                      </div>
                                      <div className="d-flex flex-column fw-500">
                                          <a href="#" className="text-dark hover-primary mb-1 fs-16">Spanish - Essey</a>
                                          <span className="text-fade">Franklin Harvey, 2 May</span>
                                      </div>
                                  </div>
                                  <a href="#">
                                      <span className="icon-Arrow-right fs-24"><span className="path1"></span><span className="path2"></span></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>					
                  <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                          <h4 className="box-title">Resent Join course</h4>							
                          <div className="box-controls pull-right d-md-flex d-none">
                            <a href="#">View All</a>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="min-h-310" 
                      style={{
                        backgroundImage: `url("/assets/images/front-end-img/courses/1.jpg")`, backgroundPosition: 'center center',
                         backgroundSize: "cover",
                         }}
                    ></div>
                    <div className="card-body">
                          <span className="badge badge-primary">Online</span>	
                          <span className="badge badge-primary-light">English</span>
                          <span className="badge badge-primary-light">Spanish</span>													
                          <div className="cour-stac d-flex align-items-center text-fade mt-20">
                            <p>Start Date 4th Nov..</p>
                            <p className="lt-sp">|</p>
                            <p>Johen doe</p>
                          </div>
                      <h4 className="card-title justify-content-between d-flex align-items-center">Manegement</h4>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer justify-content-between d-flex align-items-center">
                      <div className="d-flex fs-18 fw-600"> <span className="text-dark me-10">$83</span> <del className="text-muted">$195</del> </div>
                      <span>
                          <i className="fa fa-star text-warning"></i>
                          <i className="fa fa-star text-warning"></i>
                          <i className="fa fa-star text-warning"></i>
                          <i className="fa fa-star text-warning"></i>
                          <i className="fa fa-star-half text-warning"></i>
                          <span className="text-muted ms-2">(42)</span>
                      </span>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- /.content --> */}
    </div>
</div>
  )
}

export default dashboard