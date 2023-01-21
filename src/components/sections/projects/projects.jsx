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
    console.log(filterImages);

  return (
    <section className='bg-mydark relative'>
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
                    className='py-1 w-[80px] font-medium text-sm text-mydark rounded-2xl bg-mylight bg-opacity-90 hover:bg-spaceBlue
                    hover:text-mylight
                     hover:shadow-lg hover:shadow-mylightOpaque
                     focus:bg-spaceBlue
                    focus:text-mylight'
                    >
                        {btn.name}</button>
                )
            })
            }
        </div>
        
    <AnimatePresence>
        <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-3 p-2 lg:mx-20'>
            {filterImages && filterImages.map(filterImage=>{
                return(
                    <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    key={filterImage.id}
                    >
                        <motion.img src={filterImage.image} alt="" className=''/>
                    </motion.div>
                )
            }
            )}
        </motion.div>
    </AnimatePresence>
    </div>

      {/* wave deco */}
   <img src={waveLight} className=" w-[120%] absolute bottom-[0vh] h-[25vh] sm:h-[25vh]"/>
    </section>
  )
}
