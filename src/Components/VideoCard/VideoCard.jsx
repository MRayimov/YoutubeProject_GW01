import React from 'react'
import './VideoCard.css'
import images1 from '../../img/img1.jfif'
import images2 from '../../img/img2.jfif'
import images3 from '../../img/img3.jfif'
import images4 from '../../img/img4.jfif'
import images5 from '../../img/img5.jfif'
import images6 from '../../img/img6.jfif'
import { CiMenuKebab } from "react-icons/ci";

const VideoCard = () => {
  return (
	<div className='hala'>
		<div className="cr1">
		<div>
		{/* 424 x 238 */}
			<img src={images1} alt="" className='img' />
			<div className='ius'>
			<img src={images1} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		
		<div className='hh1'>
		{/* 424 x 238 */}
			<img src={images2} alt="" className='img' />
			<div className='ius'>
			<img src={images2} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		
		<div className='hh2'>
		{/* 424 x 238 */}
			<img src={images3} alt="" className='img' />
			<div className='ius'>
			<img src={images3} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		</div>
		
		<div className="cr2">
		<div>
		{/* 424 x 238 */}
			<img src={images4} alt="" className='img' />
			<div className='ius'>
			<img src={images4} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		
		<div className='hh1'>
		{/* 424 x 238 */}
			<img src={images5} alt="" className='img' />
			<div className='ius'>
			<img src={images5} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		
		<div className='hh2'>
		{/* 424 x 238 */}
			<img src={images6} alt="" className='img' />
			<div className='ius'>
			<img src={images6} alt="" className='img1' />
			<h3 className='oi'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Suscipit unde nulla sequi.</h3> 
			<CiMenuKebab className='icon' />
			</div>
			
			<h4 className='h1'>Lorem, ipsum.</h4>
			<h4 className='h2'>Lorem ipsum dolor sit.</h4>
		</div>
		</div>

	</div>
  )
}

export default VideoCard