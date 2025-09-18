import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Checklogin from './Checklogin';
function Homepage()
{
    
    return(
        <div>
            <Carousel className='hero'>
                <Carousel.Item><img className="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/UBS/March/Unrec/Holi/PC/pc_1._CB549343394_.jpg"></img></Carousel.Item>
                <Carousel.Item><img className="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"></img></Carousel.Item>
                <Carousel.Item><img className="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"></img></Carousel.Item>
                <Carousel.Item><img className="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/HMD/Unrec_electricals_3000._CB549027080_.jpg"></img></Carousel.Item>
                <Carousel.Item><img className="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"></img></Carousel.Item>
            </Carousel>
            
            <div className="category">
                <div className="box shadow border">
                <h3>Appliances for your home | Up to 55% off</h3>
                <div className='slide-content '>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'></img><h6>Appliances</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'></img><h6>Refrigirators</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'></img><h6>Microwaves</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'></img><h6>washing Machines</h6>
                </div>
                </div>
                </div>


                <div className="box shadow border">
                    <h3>Under ₹499 | Deals on home improvement essentials</h3>
                    <div className='slide-content'>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg'></img><h6>cushion covers bedsheets&more</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg'></img><h6>Figurines,vases&more</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg'></img><h6>Home storage</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg'></img><h6>Lighting solutions</h6>
                </div>
                </div>
                </div>

                <div className="box shadow border">
                    <h3>Revamp your home in style</h3>
                    <div className='slide-content'>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg'></img><h6>Under 199|cleaning supplies</h6>
                </div >
                <div className='box-item' >
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'></img><h6>Under 299|Bathroom accessories</h6>
                </div>
                <div className='box-item'>
                <img className='w-100'src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg'></img><h6>Under 499|Home tools</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg'></img><h6>Under 299|wallpapers</h6>
                </div>
                </div>
                </div>



                <div className="box shadow border">
                    <h3>Starting ₹149 | Headphones</h3>
                    <div className='slide-content'>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg'></img><h6>Starting 249|boat</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg'></img><h6>Starting 349|boult</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg'></img><h6>starting 649|Noise</h6>
                </div>
                <div className='box-item'>
                <img className='w-100' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg'></img><h6>starting 149|zebronics</h6>
                </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Homepage