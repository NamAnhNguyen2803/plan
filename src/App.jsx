import React from 'react'
import { useState } from 'react'
export default function App() {
  const [toDo, setToDo] =useState(' ');
  const [submittedToDo,setSubmittedToDO] =useState([]);
  const handleSubmit = (event) => {
    console.log(event.target); // In ra giá trị toDo khi nhấn nút Submit
  };


  return (

          <div className=" container-fluid header row  "
      style={{
        justifyContent:'center',
        display:'flex',
        backgroundColor:'#000',
      }}>
        <div className="row flex "
        style={{
          color:'#fff',
          marginLeft:'20%',
          fontSize:'12px',
          margin:0,
          fontWeight:600,
        }}>
         <div className='d-flex col-6'
         style={{
          marginLeft:'10%'
         }}
          >
          <p
           style={{
            fontSize:'12px',
            padding:10,
            paddingLeft:0,
            margin:0,
            fontWeight:600,
          }}
        >
            XUÂN CHÍNH INTERIOR DESIGN
          </p>

          <div className='vr align-self-center '></div>
          <p
           style={{
            padding:10,
            margin:0,
            fontWeight:600,
            color:'fff',
            opacity:0.5
          }}>CỬA HÀNG</p>
         </div>
         <div className='col-2'>
          <p
           style={{
          
            padding:10,
            margin:0,
            fontWeight:600,
            color:'fff',
            opacity:0.5
          }}
          >HOTLINE: 012345678</p>
         </div>
        </div>

        {/* line */}
        <div
        style={{
          backgroundColor:'#000'
        }}>
        <hr className='container' /></div>

        {/* bot */}
        <nav className="row"
          style={{ 
           
            backgroundColor: '#000',
            color:'#fff',
            padding:'0',
            margin:0,
       
          }}
        >
          <nav className="navbar col-6 navbar-expand-lg navbar-light"
            style={{
              backgroundColor: '#000',
              marginLeft:'10%',
              fontWeight:400,
              fontSize:20,
              color:'#fff',
            }}>
            <a href="/" className='' style={{
              display: "flex",
              color:'#fff',
            }}>
              <h2 style={{
              margin:0,
              marginRight:20,
              paddingTop: "INHERIT",
              fontSize: 20,
              fontWeight:300,
              letterSpacing:'3px'
            }}>XUÂN CHÍNH</h2>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown"
            >
              <ul className="navbar-nav"
              >
                <li className="nav-item  active ">
                  <Link to="/" className="nav-link ">
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    CÔNG TRÌNH
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    CỬA HÀNG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    LIÊN HỆ
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
          <div className='col-2 d-flex' 
          style={{
           justifyContent:'flex-end',
          }}>
          <i class="bi bi-header bi-search "
                /> 
        
</div>
        </nav>
      

        </div>

      <div className="container-fluid" style={{ backgroundColor: '#000', padding: 0 }}>
      {/* Slide show */}
      <div id="carouselExampleIndicators" className="carousel slide border-bottom" data-ride="carousel">
        <div className="carousel-inner container-fluid" style={{ padding: 0 }}>
          <div className="carousel-item active">
            <img className="d-block w-100 h-80 object-fit-cover" src={LivingRoomPic} alt="First slide" style={{ height: 720 }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 object-fit-cover" src={BedRoomPic} alt="Second slide" style={{ height: 720}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 object-fit-cover" src={LivingRoomPic2} alt="Third slide" style={{ height: 720 }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="circle">
            <i class="bi bi-arrow-left-short "
            style={{
              height:46,
              width:46,
              margin:0,
              fontSize:24,
              justifyContent:'center',
              top:10,
            }}></i>
              </span>
            </a>   
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="circle">
            <i class="bi bi-arrow-right-short d-flex "
            style={{
              height:46,
              width:46,
              margin:0,
              fontSize:24,
              justifyContent:'center',
              top:10,
            }}></i>
                 </span>
            </a>
       
      </div>


      <div className="row container-fluid" style={{ backgroundColor: '#000' }}>
        <div className="col-6 overflow-hidden"
        style={{ height: 720 }}
        >
          <img src={ChinhDung} alt="" className="object-fit-cover img-hover" style={{ height: 720 ,width:'100%'}} />
        </div>
        <div className="col-6 overflow-hidden"
        style={{ height: 720 }}>
          <img src={Bep} alt="" className="object-fit-cover img-hover" style={{ height: 720 ,width:'100%' }} />
        </div>
      </div>
      <div className="building "
      style={{
        backgroundColor:'#fff'
      }}>
        <div className="building-header text-center">
          <h1
          style={{
            fontWeight:600,

          }}>
            CÔNG TRÌNH
          </h1>
          <a className=''> Xem tất cả</a>
        </div>
        <div className="row justify-content-center "
        style={{
          paddingBottom:30,
        }}>
        <div className=" flex col-9   "
        >
          <img src={LivingRoomPic} className='object-fit-cover w-100' alt="" />
        </div>
        <span className='text-center'
        style={{
          marginTop:30,
          marginBottom:0
        }}>
        <p className='d-block '>GENTLEMAN HOME</p></span>
      </div>
</div>

<div className="row container-fluid" style={{ backgroundColor: '#000' }}>
        <div className="col-6 overflow-hidden"
       
        >
          <img src={Furniture2} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
      >
          <img src={Tham1} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
      >
          <img src={DenChum} alt="" className="object-fit-cover img-hover" style={{ height: 660 }} />
        </div>
      </div>

      
<div className="row container-fluid" style={{ backgroundColor: '#000' }}>
  
        <div className="col-3 overflow-hidden"
      >
          <img src={ChenDia} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
        style={{}}
      >
          <img src={Tranh1} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>


      <div className="col-6 overflow-hidden"
        >
          <img src={Furniture} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
      </div>
    </div>

    <div className=''
    style={{
      backgroundColor: "#121212" ,
      marginTop: "10px"
    }
    }>
      <>
        {/* Footer */}
        <footer className=" text-center text-lg-start bg-light text-muted"
        style={{
          backgroundColor:'#121212',
          color:'#12121',
          padding:0
        }}>
            <div className="container-fluid text-center text-md-start "
            style={{
              padding:0,
            }}
            >
              {/* Grid row */}
              <div className="row ">
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-20">
                  <h6 className="text-uppercase fw-bold mb-4 "
                  style={{
                    paddingTop:20,
                  }}>Chính sách của chúng tôi</h6>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="/policy" className="text-reset text-decoration-none">
                    Chính sách bảo mật
                    </a>
                  </p>

                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/bo-sp-vong-tay-y-te" className="text-reset text-decoration-none">
                    Điều khoản dịch vụ
                    </a>
                  </p>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/cong-nghe-khac" className="text-reset text-decoration-none">
                    Chính sách vận chuyển, hoàn trả và hoàn tiền
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"
                   style={{
                    paddingTop:20,
                  }}>Địa điểm của chúng tôi</h6>
                
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
          
                    <a href="https://www.vlaser.vn/bo-giai-phap-the-id" className="text-reset text-decoration-none">
                    Email: marketing@griffycard.com
                    </a>
                  </p >

                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/bo-sp-vong-tay-y-te" className="text-reset text-decoration-none">
                    Phone: +603-2779 1443
                    </a>
                  </p>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/cong-nghe-khac" className="text-reset text-decoration-none">
                    Address: 02-15, Skyawani 2, No. 1A Jalan 2/12 Kg Batu Muda 51100 Kuala Lumpur
                    </a>
                  </p>
                 

                </div>
                {/* Grid column */}
                {/* Grid column */}
                
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
        
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center"
            style={{ backgroundColor: "#121212",    color:'#ffffff', padding:40,}}
          >
            Website thuộc bản quyền sở hữu trí tuệ của
            <   a className="text-reset fw-bold" href="https://995ht.vn/#/login/">
              HT Card
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </>
    </div>
   
  )
}
