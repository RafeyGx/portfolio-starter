// next image
import Image from "next/image";
// components
import ParticlesContainer from  '../components/ParticlesContainer';
import ProjectsBtn from  '../components/ProjectsBtn';
import Avatar from  '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

// variants 
import {fadeIn} from '../variants'

const Home = () => {

	return ( <div className=' bg-primary/60 h-full '>
		{/* text */}
		<div>
		 <div>
			{/*title*/}
			<h1 className='h1'>
				Transforming ideas <br/> Into <span className='text-accent'>Digital reality</span>
			</h1>
			{/* subtitle */}
			<p className ='max-w-sm xl:max-w-xl mx-auto xl:mx-0'> Lorem ipsum dolor sit amet orci aliquam.Lorem ipsum dolor sit amet orci aliquam.Lorem ipsum dolor sit amet orci aliquam. </p>
		</div>
		 </div>
		{/* image */}
		<div>image</div>
	</div>
	);
};

export default Home;
