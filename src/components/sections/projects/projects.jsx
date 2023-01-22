import React, {useState, useEffect} from 'react';
import { projectCategory } from '../../../data';
import { projects } from '../../../data';
import {motion, AnimatePresence} from 'framer-motion';
import waveLight from "../../../assets/img/wave.png";

export default function Projects() {
    const [filterImages, setFilterImages] = useState(null);

    useEffect(() => {
        setFilterImages(projects);
    }, []);

    const handleClick = (e) => {
        let btnCategory = e.target.value;
        const newFilterImages = projects.filter(
        (project) => project.value === btnCategory);
        
        btnCategory !== 'all' 
        ? setFilterImages(newFilterImages)
        : setFilterImages(projects);
    };


  return (
    <section className='bg-spaceBlue bg-opacity-70 relative min-h-[165vh] max-h-fit'>
        <div id='projects' className='section pt-[5rem] pb-[9rem]'>
                <div className='mb-8'>
                    <h2 className='text-[1.5rem] font-bold text-mylight'>
                        My projects
                    </h2>
                    <div className='w-14 h-1 rounded-sm bg-spaceBlue'></div>              
                </div>

                <div className='flex flex-wrap gap-8 justify-center'>
                    {projectCategory.map((btn) => {
                        return(
                            <button key={btn.id} value={btn.value} onClick={handleClick}
                            className='py-1 w-[80px] text-sm text-mydark rounded-2xl bg-mylight bg-opacity-90 hover:bg-spaceBlue
                            hover:text-mylightOpaque
                            hover:shadow-lg hover:shadow-mylightOpaque
                            hover:font-semibold
                            focus:bg-spaceBlue
                            focus:text-mylightOpaque
                            focus:font-semibold'
                            >
                                {btn.name}</button>
                        )
                    })
                    }
                </div>
                
            <AnimatePresence>
                <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-3 p-2 lg:mx-20 mb-8 '>
                    {filterImages && filterImages.map(filterImage=>{
                        return(
                            <motion.div
                            className='relative'
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            key={filterImage.id}
                            >
                                <div id="project">
                                    <motion.img src={filterImage.image} alt="" id="image" className='h-full object-cover cursor-pointer '/> 

                                    <div id="info" className="absolute text-sm bottom-0">
                                        <div className='flex justify-between'>
                                        <h4 className='bg-spacePurple bg-opacity-70 w-full font-semibold pl-1 text-mylight border border-solid border-mylightOpaque'>{filterImage.title}</h4>   
                                        <a className='bg-mylight flex items-center px-2 h-6  font-semibold text-spacePurple border border-solid border-spacePurple border-opacity-70 hover:bg-spacePurple hover:text-mylight' href={filterImage.link}>Visit</a>
                                        </div>
                                        <p className='bg-spacePurple  bg-opacity-80 text-center text-mylight py-2 '>{filterImage.description}</p>
                                </div>
                                </div>
                            </motion.div>
                            
                        )
                    }
                    )}
                </motion.div>
            </AnimatePresence>

            <div className='flex justify-center'>
                <a href='https://github.com/ranya-m?tab=repositories' target='_blank' className="text-[0.9rem] font-medium shadow-lg hover:bg-spaceBlue rounded-full py-2 px-6 hover:text-mylightOpaque bg-mylight bg-opacity-95 text-mydark cursor-pointer">See more projects</a>
            </div>
        </div>
    
      {/* wave deco */}
    <img src={waveLight} className="w-[120%] absolute bottom-[0vh] h-[25vh] sm:h-[25vh] z-50"/>
    </section>
  )
}
